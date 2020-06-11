function message() {

  if(confirm("Deseja que a janela contendo o curso se abra?")) {
    var page = document.getElementById('cursos').value;

    console.log(page);

    window.open("pages/" +page+ ".html", "info", "width = 400", "height = 400");
    
  }

}

