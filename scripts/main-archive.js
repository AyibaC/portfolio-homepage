//enable full page
const myFullPage = new fullpage('#fullpage',{
    licenseKey: '3310F724-FAB2489A-857B00AC-B4CA87B4',
    anchors:['home','about','experience','projects','contact'],
    onLeave: function(origin, destination, direction){
		var leavingSection = this;

		if(origin.anchor == 'about' && direction =='down'){
			const path = anime.path('#timeline path');
            console.log('path', path);
            const animation = anime({
                targets: '.experience-item',
                translateX: path('x'),
                translateY: path('y'),
                delay: anime.stagger(500, {from: 'last'}),
                easing: 'linear',
                duration: 2000,
                loop: false
                });
            setTimeout(animation.pause, 2000);
            const fade = function(){
                const text = document.getElementsByClassName('experience-text');
                for (const x of text) {
                    x.style.opacity = "1"
                    // x.style.animation = "fadeIn ease 2s";
                    // x.style.animationFillMode = "forwards";
                }
                
            };
            setTimeout(fade, 2000);
            // animation.restart();
		}
	},
    afterLoad: function(origin, destination, direction){
		var loadedSection = this;
        console.log('experience section loaded')
		if(origin.anchor == 'experience' && destination.anchor=='experience'){

			const path = anime.path('#timeline path');
            console.log('path', path);
            const animation = anime({
                targets: '.experience-item',
                translateX: path('x'),
                translateY: path('y'),
                delay: anime.stagger(500, {from: 'last'}),
                easing: 'linear',
                duration: 2000,
                loop: false
                });
            setTimeout(animation.pause, 2000);
            const fade = function(){
                const text = document.getElementsByClassName('experience-text');
                for (const x of text) {
                    x.style.opacity = "1"
                    // x.style.animation = "fadeIn ease 2s";
                    // x.style.animationFillMode = "forwards";
                }
                
            };
            setTimeout(fade, 2000);
            // animation.restart();
		}
	},
});

//makes skills show after clicking on icon
const skillsIcons = document.getElementsByClassName('skill-logo');
console.log('skillsIcons', skillsIcons);
const hiddenClass = 'hidden';
for(const i of skillsIcons){
    i.addEventListener("click", (e) => {
        e.preventDefault();
            if (i.nextElementSibling.classList.contains(hiddenClass)){
                i.nextElementSibling.classList.remove(hiddenClass);
                i.previousElementSibling.classList.remove(hiddenClass);
            } else {
                i.nextElementSibling.classList.add(hiddenClass);
                i.previousElementSibling.classList.add(hiddenClass);
            }
    });
};

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

let contactLink = document.getElementsByClassName('contact-link')[0];
contactLink.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('contactLink:', contactLink);
    if(document.getElementsByClassName("home-content").length > 0){
        const homeContent = document.getElementsByClassName("home-content")[0];
        homeContent.remove()

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
        homepage.appendChild(contact)};

let homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", (e)=>{
    e.preventDefault();
    const contact = document.getElementsByClassName("container contact")[0];
    contact.remove();

    homeNav.innerHTML = `<a href="./about.html">About</a>
                        <a href="./experience.html">Experience</a>
                        <a href="./projects.html">Projects</a>
                        <span class="contact-link" >Contact</span>`;

    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    homeContent.innerHTML = `<h1 class="home-title">Ayiba C. Cesario</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>`;
    homepage.appendChild(homeContent);
})
    
})

