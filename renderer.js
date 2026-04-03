console.log(window.api)

// Source - https://stackoverflow.com/a/8916697
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
// My code:
window.addEventListener("keydown", function(e) {
    if(["ArrowUp"].indexOf(e.code) > -1) {
        let i = Array.from(document.getElementsByClassName("theme")).findIndex(el => el === document.activeElement);
        if(i >= 0) {
            document.getElementsByClassName("theme")[i - 1].focus();
            i--;
        }
    }
    else if(["ArrowDown"].indexOf(e.code) > -1) {
        let i = Array.from(document.getElementsByClassName("theme")).findIndex(el => el === document.activeElement);
        if(i <= (document.getElementsByClassName("theme").length - 1)) {
            document.getElementsByClassName("theme")[i + 1].focus();
            i++;
        }
    }
})


document.getElementById("th1").addEventListener("click", () => {
    window.api.runCommand('/home/rzaba/Desktop/Programowansko/my-CLIs/Configs/config-dark');
});

document.getElementById("th2").addEventListener("click", () => {
    window.api.runCommand('/home/rzaba/Desktop/Programowansko/my-CLIs/Configs/config-light');
})

document.getElementById("th3").addEventListener("click", () => {
    console.log("clicked");
})

document.getElementById("th4").addEventListener("click", () => {
    console.log("clicked");
})

document.getElementById("th5").addEventListener("click", () => {
    console.log("clicked");
})

document.getElementById("th6").addEventListener("click", () => {
    console.log("clicked");
})

document.getElementById("th7").addEventListener("click", () => {
    console.log("clicked");
})

document.getElementById("th8").addEventListener("click", () => {
    console.log("clicked");
})

// Source - https://stackoverflow.com/a/19844696
// Posted by Matthew Johnson, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-03, License - CC BY-SA 4.0

function changeCSS(cssFile) {

    let link = document.getElementById("style")
    let oldLink = link.getAttribute("href");
    console.log("old link: ", oldLink);

    link.setAttribute("href", cssFile);
}
