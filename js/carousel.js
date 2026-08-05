

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    
      
    Start(carouselArr){
        if(carouselArr){

            if(carouselArr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    Next(){
        
    }
};
