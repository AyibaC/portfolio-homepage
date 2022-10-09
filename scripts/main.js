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

document.addEventListener("click", (e)=>{
    console.log('doc click');
    const { target } = e;
    console.log('target', target);
    console.log(target.closest('.modal'));
    if(!target?.closest('.modal')){
        console.log('was outside modal');
        closeAllModals();
    }
})

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


