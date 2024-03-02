const iconMenu = document.querySelector(".menu-icon-container .material-icons.menu-icon");
const ulMenu = document.querySelector(".menu-icon-container .show-dropdown");

iconMenu.addEventListener("click", function(){
    const ulStyles = getComputedStyle(ulMenu);
    const ulVisibility = ulStyles.getPropertyValue("visibility");
    if (ulVisibility === "hidden") {
        ulMenu.style.visibility = "visible";
    } else {
        ulMenu.style.visibility = "hidden";
    };
});
