
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
                // eventos dos botões
                document.addEventListener("click", function(e){

                    if(e.target.classList.contains("botaoDireito")){
                        e.preventDefault();
                        Carousel.Next();
                    }

                    if(e.target.classList.contains("botaoEsquerdo")){
                        e.preventDefault();
                        Carousel.Previous();
                    }
                });

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

            <a class="botaoEsquerdo" href="#">❮</a>
            <a class="botaoDireito" href="#">❯</a>
            `;

        // legenda com link
        document.getElementById("carousel-title").innerHTML =
            `<a href="${item.link}">${item.texto}</a>`;

        Carousel._sequence++;

        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }

    static Previous(){

        Carousel._sequence -= 2;

        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.Next();
    }    
}
