
//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(imagem, texto, link ){
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }
    
      
    static Start(arr){

        if(arr){

            if(arr.length > 0){
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        let item = Carousel._arr[Carousel._sequence];

        document.getElementById("carousel").innerHTML =
            `
            <a href="${item.link}">
                <img src="img/${item.imagem}"
                     alt="${item.texto}"
                     style="width:100%; height:100%; object-fit:cover;">
            </a>
            `;

        document.getElementById("carousel-title").innerHTML =
            `<a href="${item.link}">${item.texto}</a>`;

        Carousel._sequence++;

        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }
}
