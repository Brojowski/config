// ==UserScript==
// @name         Vault: Better Tab Names
// @namespace    github.com/Brojowski
// @version      2024-12-04
// @description  Take the Vault heading and use it in place of the default tab name.
// @author       Brojowski
// @match        https://*.vaultpvm.com/ui/
// @match        https://*.vaultdev.com/ui/
// @match        https://*.veevavault.com/ui/
// @icon         https://www.veeva.com/wp-content/themes/veeva2015/favicon.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Brojowski/config/master/vault/better-tab-names/better-tab-names.user.js
// @downloadURL  https://raw.githubusercontent.com/Brojowski/config/master/vault/better-tab-names/better-tab-names.user.js
// ==/UserScript==

(function() {
    'use strict';

    var headerTags = [
        'viewTitle', // Individual Object UI
        'vv-vof-detail-header-title', // Admin UI title
        'vv-admin-header-title' // Admin Header
    ];

    function findBetterPageTitle() {
        var elements = [];

        for (var i = 0; i < headerTags.length; i++) {
            elements = elements.concat(Array.from(document.getElementsByClassName(headerTags[i])));
        }
        
        //console.log('findBetterPageTitle', elements);


        var nameSource = elements.pop();
        if (nameSource) {
            var name = nameSource.innerText;
            //console.log("Better Page Title: ", name);
            document.title = name;
        } 
        setTimeout(findBetterPageTitle, 1000);
    }

    findBetterPageTitle();
})();