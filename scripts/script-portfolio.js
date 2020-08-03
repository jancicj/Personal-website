/* SECTIONS APPEAR 

function toggleSection(){
    let photo = document.querySelector('.coding');
    photo.classList.toggle("show");
    if (toggleSection) {
        
        document.getElementById("switch").classList.toggle('switch2')
    } else{
        console.log("true") 
    }
}
document.getElementById("switch").addEventListener("click", toggleSection());




function toggleSwitch(){
    if (toggleSection=true) {
        
        document.getElementById("switch").classList.toggle('switch2')
    }
};



   

    

    

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
//Buttons
const previousBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';


nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-100 *counter) + '%)';
});

previousBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});


carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    }
});

*/

