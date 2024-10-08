function enviar(){
    let user = document.getElementById("user").value;
    let passoword = document.getElementById("senha").value;
    
    if(user == "user" && passoword == "senha"){
          window.location = "../paginaPrincipal/index.html"
    }
    else{
        alert("Usuario ou senha incorreta");
    }
}