window.addEventListener("load", ()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*page loader*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
});

/*Navbar toggle*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*Active section*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //activate overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});

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

/*Send email from contact form*/
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tanvirahmedjoy2441139@gmail.com",
        Password : "435E0335859B5C1592A9656C4D0FA6D4F992",
        To : 'tanvir.joy2419@gmail.com',
        From : 'tanvirahmedjoy2441139@gmail.com',
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value +
                "<br> Email: " + document.getElementById("email").value +
                "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}