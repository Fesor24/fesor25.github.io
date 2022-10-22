var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")
var side = document.getElementById("sidemenu");

opentab = (tab) => {
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link")
    }
    for (content of tabContents) {
        content.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tab).classList.add("active-tab");
}

openmenu =()=> {

    side.style.right="0";
}

closemenu=()=>{
    side.style.right="-200px";
}