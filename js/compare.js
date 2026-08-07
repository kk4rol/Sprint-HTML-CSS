
//car
let carArr = [];

class Car {

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){

        let posicao = GetCarArrPosition(carArr, carClass)
        
        //não permite marcar mais de duas checkbox
        if(el.checked){
            if(carArr.length >= 2){
                el.checked = false;
                return;
            }
        
        //adiciona o item marcado no array caso não esteja 
        if (posicao === -1){
            carArr.push(carClass);
        }
        
        //remove o item do array caso não esteja marcado
        } else {
          if (posicao !== -1){
            carArr.splice(posicao, 1);
          }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length !== 2 ) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    for(let i = 0; i < 2; i++){
        document.getElementById(`compare_image_${i}`).innerHTML = "";
        document.getElementById(`compare_modelo_${i}`).innerHTML = "";
        document.getElementById(`compare_alturacacamba_${i}`).innerHTML = "";
        document.getElementById(`compare_alturaveiculo_${i}`).innerHTML = "";
        document.getElementById(`compare_alturasolo_${i}`).innerHTML = "";
        document.getElementById(`compare_capacidadecarga_${i}`).innerHTML = "";
        document.getElementById(`compare_motor_${i}`).innerHTML = "";
        document.getElementById(`compare_potencia_${i}`).innerHTML = "";
        document.getElementById(`compare_volumecacamba_${i}`).innerHTML = "";
        document.getElementById(`compare_roda_${i}`).innerHTML = "";
        document.getElementById(`compare_preco_${i}`).innerHTML = "";
    }

    // preenche os dados
    for(let i = 0; i < carArr.length; i++){

        let carObj = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML =
            `<img src="${carObj.image}" width="180">`;

        document.getElementById(`compare_modelo_${i}`).innerHTML = carObj.nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerHTML = carObj.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerHTML = carObj.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerHTML = carObj.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerHTML = carObj.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerHTML = carObj.motor;
        document.getElementById(`compare_potencia_${i}`).innerHTML = carObj.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerHTML = carObj.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerHTML = carObj.roda;
        document.getElementById(`compare_preco_${i}`).innerHTML =
            `R$ ${carObj.preco.toLocaleString("pt-BR")}`;
    }
}
