"use strict";

var yvo = {
    mobileMenuBtn: null,
    menuContent: null,
    ready: () => {
        yvo.mobileMenuBtn = document.getElementById("mobile_menu_button");
        yvo.menuContent = document.getElementById("menu_content");
        yvo.mobileMenuBtn.addEventListener("click", yvo.menuButtonClicked, false);
    },
    menuButtonClicked: (evt) => {
        //yvo.menuContent.style.transition = "all 2s ease-in-out";
        if (yvo.menuContent.style.display === "block") {
            yvo.menuContent.style.display = "none";
        }
        else {
            yvo.menuContent.style.display = "block";
        }
    },
    initialize: () => {
        if (document.readyState === "complete") {
            setTimeout(yvo.ready, 1);
        }
        else if (document.readyState === "interactive") {
            setTimeout(yvo.initialize, 10);
        }
        else {
            document.addEventListener("DOMContentLoaded", () => {
                if (document.readyState === "complete") {
                    yvo.ready();
                }
            }, false);
        }
    }
};

yvo.initialize();