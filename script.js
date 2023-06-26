function carregaDicionario() {
  let verbetes = {
    nota01: {
      titulo: "Aí dentro",
      imagem:
        "https://media.istockphoto.com/id/1366970560/pt/foto/creative-design-contemporary-art-collage-many-female-mouths-talkig-shouting-symbolzing.jpg?s=612x612&w=0&k=20&c=LbkRQGYH_8TBEZZ-hZaOsrjzpfFhIV9HDIE478xvED8=",
      descricao: "Resposta a qualquer provocação",
    },
    nota02: {
      titulo: "Amancebado",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszkadwTCQpt91ooXegjGIMM4Rs-L6GgAUHbZ2Eo8-FkOHokToPWguMTccNt9vAdEIbnU&usqp=CAU",
      descricao:
        "Situação irregular ou provisória em um relacionamento amoroso. O mesmo que amigado.",
    },
    nota03: {
      titulo: "Avexar",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQpGP755CkRYBc0l43GJFMzrO03kZetrceQ&usqp=CAU",
      descricao: "Apressar, aperriar",
    },
    nota04: {
      titulo: "Babão",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaVTO6yS5aN6by5sg-szrLryxl2ZQ4ifdcw&usqp=CAU",
      descricao: "Puxa-saco, bajulador",
    },
    nota05: {
      titulo: "Bregueço",
      imagem:
        "https://cdn.create.vista.com/api/media/small/151799160/stock-vector-hand-drawing-doodle-vector-illustration",
      descricao:
        "Objeto sem valor; desprezível, ou qualquer coisa que na hora esqueceu o nome",
    },
    nota06: {
      titulo: "Buchuda",
      imagem:
        "https://images.unsplash.com/photo-1544784179-ae1535e9f013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhdmlkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      descricao: "Gestante, mulher grávida",
    },
    nota07: {
      titulo: "Cabra (caba, cabinha)",
      imagem:
        "https://static.vecteezy.com/system/resources/thumbnails/000/229/567/small/t-shirt-model-male-vector.jpg",
      descricao: "Qualquer individuo",
    },
    nota08: {
      titulo: "Caritó",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEyosB-nPsgfh3IDIty35js1PXJ8aI6Ny6BYTeYqx61jUdPgQCk8sbYY6tpeUwY6QvYw&usqp=CAU ",
      descricao:
        "Solteirona(ão), mulher ou homem que não casou. Ou ainda moça velha, rapaz velho.",
    },
    nota09: {
      titulo: "Estribado(a)",
      imagem:
        "https://media.istockphoto.com/id/1394027072/pt/foto/young-black-woman-smiling-holding-brazilian-money-bills-positively-surprised-space-for-text.webp?b=1&s=170667a&w=0&k=20&c=QiDYIIkv28G4rHq36QFQVrGVgX9uhTQcAvnOUJs2fOk=",
      descricao: "Cheio(a) de dinheiro",
    },
    nota10: {
      titulo: "Lascado(a)",
      imagem:
        "https://images.unsplash.com/photo-1629144152968-50627249db14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlaW8lMjBkZSUyMHByb2JsZW1hc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      descricao: "Cheio(a) de problemas, em má situação.",
    },
    nota11: {
      titulo: "Paia",
      imagem:
        "https://images3.memedroid.com/images/UPLOADED877/6410d6adcf4c4.jpeg",
      descricao: "Quando algo é muito ruim ou sem graça",
    },
    nota12: {
      titulo: "Pantim, pantinho",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUElvWfljV5Vg5TNi0kH6Y4a0fwLxaQNF7A&usqp=CAU",
      descricao: "Manha, resmungo",
    },
  };

  let content = document.getElementById("content");

  for (let nota in verbetes) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      verbetes[nota].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      verbetes[nota].titulo +
      "</summary>" + 
      "<p>" + 
      verbetes[nota].descricao + 
      "</p>" +
      "</details>" + 
      "</div>";
  }
}

carregaDicionario();
