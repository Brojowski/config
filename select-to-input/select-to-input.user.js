// ==UserScript==
// @name         Replace Select with Searchable Input
// @namespace    github.com/Brojowski
// @version      0.1
// @description  Large HTML select boxes are a pain. This replaces them with searchable input fields.
// @author       Brojowski
// @match        https://workbench.developerforce.com/*
// @match        http://localhost:8088/workbench/*
// @updateURL    https://raw.githubusercontent.com/Brojowski/config/master/select-to-input/select-to-input.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var selectsToReplace = document.getElementsByTagName("select");

    for (var i = 0; i < selectsToReplace.length; i++) {
        var selectBox = selectsToReplace[i];

        // Filter conditions
        if (selectBox.multiple
            || selectBox.children.length < 10
            || !selectBox.id
           ) {
            continue;
        }


        console.log(selectBox);

        var boxId = selectBox.id;
        var opts = Array.from(selectBox.children).map( it => '<option value="' + it.value + '">');
        var autoSelectHtml = '<input list="datalist-'+boxId+'" name="objSelector" id="input-'+boxId+'" onchange="var orig = document.getElementById(\''+boxId+'\'); orig.value = this.value; orig.onchange()" onclick="this.value = \'\'" value="'+selectBox.value+'" style="'+selectBox.attributes["style"]+'" /> <datalist id="datalist-'+boxId+'">'
        for (var j = 0; j < opts.length; j++) {
            autoSelectHtml += opts[j];
        }
        autoSelectHtml += '</datalist>'
        selectBox.insertAdjacentHTML('beforebegin', autoSelectHtml);
        selectBox.style.width = 0;
        selectBox.style.visibility = "hidden";

    }
})();
