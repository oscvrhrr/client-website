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

mediaScroller.addEventListener('scroll', () => {
    
})