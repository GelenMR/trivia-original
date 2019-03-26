let name= prompt("¿Cual es tu nombre");
let saludo= (document.write(" hola "+ name) );


function comenzar() {

  document.getElementById("pagina1").style.display="none";
  document.getElementById("pagina2").style.display="block";
}
function septimo() {

    document.getElementById("pagina2").style.display="none";
    document.getElementById("septimo").style.display="block";
    }
    function f_revisar() {
     let r1 = document.form1.r1[1].checked;  //si esta chequeado devuelve true sino devuelve false
     let r2 = document.form1.r2[1].checked;
     let r3 = document.form1.r3[2].checked;

    let sumrespuesta = 0;
    if(r1){sumrespuesta++;
    }
    if(r2 == true){sumrespuesta++;
    }
    if(r3 == true){sumrespuesta++;
    }

    alert("Ha obtenido: " + sumrespuesta + " correcta de 3 preguntas");
  }



function primero() {
  document.getElementById("pagina2").style.display="none";
  document.getElementById("primero").style.display="block";

}
function volver2(){
  document.getElementById("pagina2").style.display="none";
  document.getElementById("primero").style.display="block";
}
function f_revisar() {
   let r1 = document.form1.r1[1].checked;  //si esta chequeado devuelve true sino devuelve false
   let r2 = document.form1.r2[0].checked;
   let r3 = document.form1.r3[2].checked;
   let sumrespuesta = 0;
  if(r1){sumrespuesta++;
  }
  if(r2 == true){sumrespuesta++;
  }
  if(r3 == true){sumrespuesta++;
  }

  alert("Ha obtenido: " + sumrespuesta + " correcta de 3 preguntas");

}
function volver(){
  document.getElementById("primero").style.display="none";
  document.getElementById("pagina1").style.display="block";
}
