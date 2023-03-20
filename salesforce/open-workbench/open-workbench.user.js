// ==UserScript==
// @name         Salesforce: Open Workbench
// @namespace    github.com/Brojowski
// @version      0.2
// @description  Quickly switch between Salesforce Profiles without leaving the object view
// @author       Brojowski
// @match        https://*.salesforce.com/*
// @match        https://*.force.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=force.com
// @updateURL    https://raw.githubusercontent.com/Brojowski/config/master/salesforce/open-workbench/open-workbench.user.js
// @downloadURL  https://raw.githubusercontent.com/Brojowski/config/master/salesforce/open-workbench/open-workbench.user.js
// ==/UserScript==

(function() {
    'use strict';

    /*
    Usage:
    1. Create a bookmark with the url:
        javascript:void(document.location.pathname = "/home/home.jsp&workbench=true")
    2. Click the bookmark while on a SF page
    3. It should redirect first to Classic, then to Workbench
    */

    if (document.location.pathname.indexOf('workbench=true') > 0)
    {
        var sfUrl = "https://"+document.location.hostname;
        var sid = /sid=([^;\s]+)/.exec(document.cookie)[1];
        var workbenchUrl = 'http://localhost:8088/workbench/login.php?serverUrlPrefix='+escape(sfUrl) + '&sid=' + escape(sid);
        window.open(workbenchUrl, '_blank');
    } 

})();