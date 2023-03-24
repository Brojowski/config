// ==UserScript==
// @name         Salesforce: Choose SandboxPostCopy Script
// @namespace    github.com/brojowski
// @version      0.2
// @description  Choose a SandboxPostCopy script to run.
// @author       You
// @match        https://*.my.salesforce.com/udd/Sandbox/editSandbox.apexp*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=salesforce.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Brojowski/config/master/salesforce/clone-di/clone-di.user.js
// @downloadURL  https://raw.githubusercontent.com/Brojowski/config/master/salesforce/clone-di/clone-di.user.js
// ==/UserScript==

(function() {
    'use strict';

    var apexClassOptions = [
        'QA',
        'Staging',
        'DI1',
        'DI2',
        'DI3',
        'DI4',
        'DI5',
        'DI6',
        'DI7',
        'DI8',
        'DI9',
        'DI10',
        'DI11',
        'DI12'
    ];

    var apexClassField = Array.from(document.getElementsByTagName('input'))
        .map(it => {return {label: it.id, element: it}})
        .filter(it => it.label.indexOf('apexClassNameInput') > -1)
        .map(it => it.element)[0];

    var apexClassSelector = document.createElement('select');
    apexClassSelector.addEventListener('change', function(evt) {
        apexClassField.value = evt.target.value;
    })

    for (var i = 0; i < apexClassOptions.length; i++) {
        var opt = document.createElement('option');
        opt.value = apexClassOptions[i];
        opt.innerText = apexClassOptions[i];
        apexClassSelector.appendChild(opt);
    }
    apexClassSelector.value = '';
    apexClassField.parentElement.appendChild(apexClassSelector);



    var autoActivate = Array.from(document.getElementsByTagName('input'))
        .map(it => {return {label: it.id, element: it}})
        .filter(it => it.label.indexOf('autoActivateCheckBox') > -1)
        .map(it => it.element)[0];
    autoActivate.checked = true;

})();