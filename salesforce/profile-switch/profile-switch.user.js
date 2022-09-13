// ==UserScript==
// @name         Salesforce: Profile Switcher
// @namespace    github.com/Brojowski
// @version      0.2
// @description  Quickly switch between Salesforce Profiles without leaving the object view
// @author       Brojowski
// @match        *.salesforce.com/setup/ui/profilelist.jsp*
// @match        *.salesforce.com/00e*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=force.com
// @updateURL    https://raw.githubusercontent.com/Brojowski/config/master/salesforce/profile-switch/profile-switch.user.js
// @downloadURL  https://raw.githubusercontent.com/Brojowski/config/master/salesforce/profile-switch/profile-switch.user.js
// ==/UserScript==

(function() {
    'use strict';

    function navigateToProfile(event) {
        console.log('navTo', event.target.value)
        location.pathname = '/' + event.target.value
    }

    function createProfileSelector(rawProfileList) {
        try {
            var profileList = JSON.parse(rawProfileList.value)
            console.log(rawProfileList.value, profileList)


            var profileSelector = document.createElement('select')
            document.getElementsByClassName('pageDescription')[0].append(document.createElement('br'))
            document.getElementsByClassName('pageDescription')[0].append(profileSelector)
            for (var i = 0; i < profileList.length; i++) {
                var option = document.createElement('option')
                option.innerText = profileList[i].profileName
                option.value = profileList[i].profileId
                profileSelector.appendChild(option)
            }
            profileSelector.value = location.pathname.slice(1)

            profileSelector.onchange = navigateToProfile
        } catch(e) {
            document.getElementsByClassName('pageDescription')[0].style.color = 'orange'
            throw e
        }
    }

    function main() {
        // Profile list
        if (location.pathname.indexOf('profilelist') >= 0) {

            var profileLinks = Array.from(document.getElementsByClassName('dataCell'))
                .filter(it => it.getElementsByTagName('a').length)
                .map(it => it.getElementsByTagName('a')[0])
                .map(it => {
                    return {
                        'profileName': it.innerText,
                        'profileId': it.href.split('%')
                                         .filter(it => it.indexOf('2F') == 0)[0]
                                         .slice(2)
                    }
                })
            console.log('Write profileLinks', profileLinks)

            cookieStore.set({
                name: 'profileLinks',
                value: JSON.stringify(profileLinks),
                domain: 'my.salesforce.com',
                sameSite: 'none',
            })
            .then(function() {
                document.getElementsByClassName('noSecondHeader')[0].style.color = 'green'
            })
            .catch(function(err) {
                document.getElementsByClassName('noSecondHeader')[0].style.color = 'orange'
                throw err;
            })
        }
        else
        {
            document.getElementsByClassName('pageDescription')[0].style.color = 'green'
            cookieStore.get({
                name: 'profileLinks',
                domain: 'my.salesforce.com'
            }).then(createProfileSelector)

        }
    }


    main()
    //setTimeout(main, 2000)
})();