/* About Tabs */
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    };
});

/* Project details popups */
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        toggleProjectPopup();
        document.querySelector(".pp-popup").scrollTo(0,0);
        projectItemDetails(e.target.parentElement);
    }
});
function toggleProjectPopup(){
    document.querySelector(".pp-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", toggleProjectPopup);

/* Hide popup when click outside of it */
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        toggleProjectPopup();
    };
});

function projectItemDetails(projectItem){
    document.querySelector(".pp-thumbnail img").src = projectItem.querySelector(".pp-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML = projectItem.querySelector(".pp-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = projectItem.querySelector(".pp-item-details").innerHTML;

}