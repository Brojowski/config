// ==UserScript==
// @name         Workbench Previewer
// @namespace    github.com/Brojowski
// @version      0.1
// @description  Loads an iFrame sidebar showing the content of the hovered ID
// @author       You
// @match        https://workbench.developerforce.com/query.php*
// @match        http://localhost:8088/workbench/query.php*
// @updateURL    https://raw.githubusercontent.com/Brojowski/config/master/workbench-preview/workbench-preview.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Setup iFrame Previewer
    var iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'previewPane');
    document.body.appendChild(iframe);

    // View record link regex
    var viewRecordLink = /retrieve\.php\?id=[A-z0-9]{18}/;
    function isRecordViewLink(aTag) {
        return viewRecordLink.exec(aTag.href)
    }

    function previewRecord(a) {
        iframe.setAttribute('src', a.href)
    }

    window.setInterval(function(){

        var previewableLinks = Array.from(document.getElementsByTagName('a')).filter(a => isRecordViewLink(a))
        previewableLinks.forEach(function(a) {
            a.onmouseenter = function() { previewRecord(this); };
            //a.onmouseleave = function() { iframe.setAttribute('src', '') };
        });

    }, 1000);
})();
