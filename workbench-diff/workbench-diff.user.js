// ==UserScript==
// @name         Workbench Diff
// @namespace    github.com/Brojowski
// @version      0.1
// @description  Code to diff two records in workbench using an iFrame to load the second one.
// @author       Brojowski
// @include      http*workbench*retrieve.php?*diff*
// @updateURL    https://raw.githubusercontent.com/Brojowski/config/master/workbench-diff/workbench-diff.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var reg = /diff=([^&]+)/;
    var matches = reg.exec(window.location.search)

    if (!matches || matches.length <= 0) {
        //console.log('No Diff Command')
        return;
    }

    document.getElementById("disclaimer").remove()

    var iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'diffOther');
    document.body.appendChild(iframe);

    function previewRecord(id) {
        var prefix = /^(.+retrieve.php\?id=)/.exec(window.location.href)[1];
        iframe.setAttribute('src', prefix+id);
    }


    var obj1 = document.getElementsByTagName('form')[0].getElementsByTagName('td');

    iframe.addEventListener('load', function() {
        console.log(iframe.contentDocument.getElementById('mainBlock').height);
        iframe.contentDocument.getElementById('mainBlock').id = "";
        iframe.contentDocument.getElementById("disclaimer").remove()


        //console.log('iFrame Loaded');
        var obj2 = iframe.contentDocument.getElementsByTagName('form')[0].getElementsByTagName('td');

        for (var i = 1; i < obj1.length; i++) {
            if (obj1[i].innerText != obj2[i].innerText) {
                obj1[i].style.backgroundColor = 'pink';
                obj2[i].style.backgroundColor = 'pink';
            }
        }

    });
    previewRecord(matches[1])

})();