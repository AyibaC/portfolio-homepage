//project modals
const modals = document.getElementsByClassName("modal");
const btn = document.getElementsByClassName("modal-btn");

const closeAllModals = () => {
    const openModals = document.querySelectorAll(".modal.open");
    for (const openMod of openModals){
        openMod.classList.remove("open");
    }
};

// document.addEventListener("click", (e)=>{
//     console.log('doc click');
//     const { target } = e;
//     console.log('target', target);
//     console.log(target.closest('.modal'));
//     if(!target?.closest('.modal')){
//         console.log('was outside modal');
//         closeAllModals();
//     }
// })

for (let i=0; i<modals.length; i++) {
    const currentModal = modals[i];
    const currentBtn = btn[i];
    const currentClose = currentModal.querySelector('.close');

    currentBtn.addEventListener("click", (e)=>{
        e.stopPropagation(); // stops the 'click' listener on the doc from being reached
        closeAllModals(); // so you don't get stacked modals.
        currentModal.classList.add('open');
    })

    currentClose.addEventListener("click", (e)=>{
        console.log('close modal btn click');
        e.stopPropagation();
        currentModal.classList.remove("open");
    })
};


//open contact page
const homepage = document.querySelector("#homepage main");
const homeNav = document.getElementById("home-nav");

function setContactListener() {
    const contactLink = document.getElementsByClassName('contact-link')[0];
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        if(document.getElementsByClassName("home-content").length > 0){
            const homeContent = document.getElementsByClassName("home-content")[0];
            homeContent.remove();

            homeNav.innerHTML = `<span id="home-link">Home</span>`;

            const contact = document.createElement("div");
            contact.classList.add("container", "contact");
            contact.innerHTML = `<div class="text">
                <h1>Get in touch...</h1>
                <ul>
                    <li><a title="email" class="email-link" href="mailto:ayibacesario@hotmail.co.uk"><i class="far fa-envelope"></i> ayibacesario@hotmail.co.uk</a></li>
                    <li><a title="GitHub" href="https://github.com/AyibaC?tab=repositories" target="_blank"><i class="fab fa-github"></i> AyibaC</a></li>
                    <li><a title="LinkedIn" href="https://www.linkedin.com/in/ayiba-cesario-a62871136/" target="_blank"><i class="fab fa-linkedin"></i> Ayiba Cesario</a></li>
                </ul>
            </div>`;
            homepage.appendChild(contact);


            const homeLink = document.getElementById("home-link");
            homeLink.addEventListener("click", (e) => {
                e.preventDefault();
                contact.remove();

                homeNav.innerHTML = `
                    <a href="./about.html">About</a>
                    <a href="./experience.html">Experience</a>
                    <a href="./projects.html">Projects</a>
                    <span class="contact-link">Contact</span>`;

                const homeContent = document.createElement("div");
                homeContent.classList.add("home-content");
                homeContent.innerHTML = `
                    <h1 class="home-title">Ayiba C. Cesario</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>`;
                homepage.appendChild(homeContent);

                setContactListener();
            });
        }
    });
}
setContactListener();



//switch tabs on project page
function openTab(e, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
    };

    const tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    };

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
    };

//default open javascript tab    
document.getElementById("defaultOpen").click();


//OPERATE ACCORDION ON EXPERIENCE PAGE
function moveExperience(e,slideName){
    e.preventDefault();
    const slider = document.getElementsByClassName("slider")[0];

    if(slideName==="work"){
        slider.style.setProperty("--work", "3fr");
        slider.style.setProperty("--training", "1fr");
        slider.style.setProperty("--education", "1fr");
    } else if(slideName==="training"){
        slider.style.setProperty("--work", "1fr");
        slider.style.setProperty("--training", "3fr");
        slider.style.setProperty("--education", "1fr");
    } else if(slideName==="education"){
        slider.style.setProperty("--work", "1fr");
        slider.style.setProperty("--training", "1fr");
        slider.style.setProperty("--education", "3fr");
    };
}
