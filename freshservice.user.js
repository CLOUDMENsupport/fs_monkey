// ==UserScript==
// @name FreshService CSS Customisations
// @namespace https://cloudmen.com
// @version 0.9
// @description  Adds some style customisations to FreshService
// @match https://*.freshservice.com/*
// @copyright 2021, cloudmen.com
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    $(".private-note").css("background-color","#ef5456");
    $(".private-note").css("color","white");
    $(".private-note .author-mail-detail").css("color","white");
    $(".private-note .username").css("color","white");
})();
