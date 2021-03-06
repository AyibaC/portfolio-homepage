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
const close = document.getElementsByClassName("close");
for (let i=0; i<modals.length; i++) {
    const currentModal = modals[i];
    const currentBtn = btn[i];
    const currentClose = close[i];

    // document.addEventListener("click", function(event){
    //     if (event.target.matches(".close") || !event.target.closest(".modal")) {
    //         currentModal.style.display = "none";
    //         }
    // });


    currentBtn.addEventListener("click", function(){
        currentModal.style.display = "block";
    })

    currentClose.addEventListener("click", function(){
        currentModal.style.display = "none";
    })

    // document.addEventListener("click", function(event){
    //     for (const m of modals) {
    //         if (m.style.display == "block" && !event.target.closest(".modal")) {
    //                 console.log(m);
    //                 console.log("modal display", m.style.display);
    //                 console.log("event target", event.target);
    //                 m.style.display = "none";
    //         }
    //     }
        
    // });


};


