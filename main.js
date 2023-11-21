const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
})



function initMap(){

    // MAP OPTIONS
    const options = {
        center: {lat:41.8781 , lng:-87.6298},
        zoom: 10
    }
    
    // NEW MAP
    map = new google.maps.Map(document.getElementById("map"),options)


    //MARKER

    const marker = new google.maps.Marker({
        position:{lat:41.8674 , lng:-87.6275},
        map:map

    })

}

const techStack =  document.querySelector('.media-scroller');

//let mediaScroller;

//mediaScroller.addEventListener('scroll', () => {
    
//})

const flexProjects = document.querySelector('.project-flex--item');
const container = document.querySelector('.project--container')


let text = document.getElementById('interval-text');

let textChangingInterval;

function textInterval() {
    textChangingInterval = setInterval(changeText,2200);
} 


function changeText() {
    if(text.innerText === 'I am deeply impassioned by the art of web development.') {
         text.innerText = 'I am deeply impassioned by the science of web development.'
    } else {
         text.innerText = 'I am deeply impassioned by the art of web development.'
    }

}

textInterval()
