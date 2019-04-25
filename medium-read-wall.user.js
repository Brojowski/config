// ==UserScript==
// @name     Medium Paywall Auto-Logout
// @version  1
// @grant    none
// @include *medium.com/*
// @updateURL https://raw.githubusercontent.com/Brojowski/custom-styles/master/iOS-Class-Navigation.user.js
// ==/UserScript==

var paywallElements = document.getElementsByClassName("js-paywall")

var isPayWalled = paywallElements.length > 0

if (isPayWalled) {
    document.getElementsByClassName("avatar-image avatar-image--icon")[0].click()
    var links = document.getElementsByTagName("a")
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("signout") !== -1) {
            links[i].click()
            break
        }
    }
}

// Handle case we just signed out
var loc = window.location.href
if (loc.indexOf("signout") !== -1
    || loc === "https://medium.com/") {
    history.back()
}
