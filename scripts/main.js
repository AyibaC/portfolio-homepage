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