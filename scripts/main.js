//enable full page
// const myFullPage = new fullpage('#fullpage',{
//     licenseKey: '3310F724-FAB2489A-857B00AC-B4CA87B4',
//     anchors:['home','about','experience','projects','contact'],
// });

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


////animate items on timeline
// const path = anime.path('#timeline path');
//                     console.log('path', path);
//                     const animation = anime({
//                         targets: '.experience-item',
//                         translateX: path('x'),
//                         translateY: path('y'),
//                         delay: anime.stagger(500, {from: 'last'}),
//                         easing: 'linear',
//                         duration: 2000,
//                         loop: false
//                         });

//                     setTimeout(animation.pause, 2000);


//initiate timeline animation on scroll 
const waypoint = new Waypoint({
    element: document.getElementById('experience-section'),
    handler: function(){
        console.log('waypoints object', this);
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
                // animation.restart();
    }
})


