
//class contato

class Contato {
    
    constructor(nome,email,telefone,tipoDeContato,mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipodeContato = tipoDeContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
        event.preventDefault();

        let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("tipoDeContato").value, 
            form.elements.namedItem("mensagem").value); 
  
        console.log(data);
        Enviar();
    }


function Enviar() {

    var nome = document.getElementById("nomeid");

        if (nome.value != "") {
            alert('Obrigado sr(a) ' + nome.value + ', os seus dados foram encaminhados com sucesso!');
    }

}