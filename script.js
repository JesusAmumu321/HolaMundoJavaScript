let eventosArray = [];

function eventos(id) {
  switch (id) {
    case "A":

      let textoAgarrado = document.getElementById("textArea").value;
      if (textoAgarrado == '') {
        alert("no se puede");
      } else {
        eventosArray.push(textoAgarrado);
        console.log(eventosArray);
        alert("Se agrego el evento");
      }

      break;

    case "B":
      document.getElementById("letra").innerHTML = "b";
      break;

    case "C":
      document.getElementById("letra").innerHTML = "c";
      break;

    default:
      document.getElementById("letra").innerHTML = "wsadosuy";
      break;
  }
}
