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


let imgSlide = document.getElementsByClassName('top-image')[0];
let aboutSlide = document.getElementsByClassName('container-about-me')[0];




window.addEventListener('scroll',() => {
    imgSlide.classList.add('top-image-active')
    aboutSlide.classList.add('container-about-me-active')
})

// window.addEventListener('load', () => {
//     imgSlide.classList.add('top-image-active')
//     aboutSlide.classList.add('container-about-me-active')
// })


