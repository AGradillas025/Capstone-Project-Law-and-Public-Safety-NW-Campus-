"use strict";

/*
    Authors: Anthony Gradillas & Emmanuel Cortes Castaneda
    File: script.js
*/

window.onload = function () {
    document.getElementById("submit").onclick = submit;
    document.getElementById("name").oninput = nameValidation;
    document.getElementById("email").oninput = emailValidation;
    document.getElementById("commBox").onkeydown = questionValidation;
}

function submit() {
    questionValidation();
    nameValidation();
    emailValidation();
}

function nameValidation() {
    var fullName = document.getElementById("name");
    if (fullName.validity.valueMissing) {
        fullName.setCustomValidity("Please enter your full name.");
    } else {
        fullName.setCustomValidity("");
    }
}

function emailValidation() {
    var email = document.getElementById("email");

    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email address.");
    } else {
        email.setCustomValidity("");
    }
}

function questionValidation() {
    var comments = document.getElementById("commBox");

    if (comments.validity.valueMissing) {
        comments.setCustomValidity("Please let us know your questions!");
    } else {
        comments.setCustomValidity("");
    }
}