var emailRegex = "[^@]+@[^\.]+\..";

function isValid(e) {
  e.preventDefault();

  var nome = document.frml.elements[0].value;
  var email = document.frml.elements[1].value;
  var comentario  = document.frml.elements[2].value;
  var radios = document.frml.elements["res"];

  if(nome.length < 10) {
    return alert("Nome tem que ter no mínimo 10 caractéres");
  }

  if(!email.match(emailRegex)) {
    return alert("Email inválido");
  }

  if(comentario.length < 20) {
    return alert("Comentário tem que ter no mínimo 20 caractéres");
  }

  if(radios[0].checked) {
    return alert("Volte sempre a visitar esta página");
  }else{
    return alert("Que bom que você voltou a visitar esta página");
  }

}

function limpar(e) {
  e.preventDefault();

  var inputList = document.getElementsByClassName('inpt');
  var radios = document.frml.elements["res"];

  for(var i = 0; i < inputList.length; i++) {
    inputList[i].value = "";
  }

  radios[0].checked = true;
}