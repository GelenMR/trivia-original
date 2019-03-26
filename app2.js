

function portada(){
  document.getElementById("portada").style.display="block";//aparece
  document.getElementById("eleccion").style.display="none";//invisible
  document.getElementById("septimo").style.display="none";//invisible
  document.getElementById("primero").style.display="none";//invisible
  clearInterval(contador);
}

function comenzar(){ //segundo bloque- div llamado eleccion
  let name = document.getElementsByName('name')[0].value;
    document.getElementById("nombre").innerHTML='<h2> Hola '+name+'!<br></h2>' ;
  //let name= prompt("¿Cuál es tu nombre?");
  //document.getElementById("nombre").innerHTML =  " Hola "+ name;

  document.getElementById("portada").style.display="none";
  document.getElementById("eleccion").style.display="block";
  document.getElementById("septimo").style.display="none";
  document.getElementById("primero").style.display="none";

}

function septimo(){
  document.getElementById("portada").style.display="none";
  document.getElementById("eleccion").style.display="none";
  document.getElementById("septimo").style.display="block";
  document.getElementById("primero").style.display="none";
  limpiar();
  startTimer_septimo(30, document.querySelector('#time_septimo'));
}

function ir_a_primero(){
  document.getElementById("portada").style.display="none";
  document.getElementById("eleccion").style.display="none";
  document.getElementById("septimo").style.display="none";
  document.getElementById("primero").style.display="block";
  limpiar();
  startTimer_primero(30, document.querySelector('#time_primero'));
}

function limpiar(){
  let ele = document.getElementsByName("r1");
    for(let i=0;i<ele.length;i++) ele[i].checked = false;
    ele = document.getElementsByName("r2");
    for(let i=0;i<ele.length;i++) ele[i].checked = false;
    ele = document.getElementsByName("r3");
    for(let i=0;i<ele.length;i++) ele[i].checked = false;
}


function f_revisar_septimo() {
  let r1 = document.form_septimo.r1[1].checked;//si el usuario la escoge devuelve true sino devuelve false
  let r2 = document.form_septimo.r2[1].checked;
  let r3 = document.form_septimo.r3[2].checked;
  let sumrespuesta = 0;
  if(r1){sumrespuesta++;
  }
  if(r2 == true){sumrespuesta++;
  }
  if(r3 == true){sumrespuesta++;
  }
  clearInterval(contador);
  document.getElementById("correctasseptimo").innerHTML=(" Has obtenido "+ sumrespuesta +" correcta de 3 preguntas");
}



function f_revisar() {
   let r1 = document.form1.r1[1].checked;  //si esta chequeado devuelve true sino devuelve false
   let r2 = document.form1.r2[2].checked;
   let r3 = document.form1.r3[0].checked;

  let sumrespuesta = 0;
  if(r1){sumrespuesta++;
  }
  if(r2 == true){sumrespuesta++;
  }
  if(r3 == true){sumrespuesta++;
  }
  clearInterval(contador);
  document.getElementById("correctasprimero").innerHTML=("Has obtenido: " + sumrespuesta + " correcta de 3 preguntas");
}

//https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
let contador
function startTimer_septimo(duration, contenido_time) {
    var timer = duration, seconds;
    contador = setInterval(function () {
        seconds = timer;
        contenido_time.textContent =  seconds;
        if (--timer < 0) {
           alert("Tiempo terminado");
           f_revisar_septimo();
           comenzar();
        }
    }, 1000);
}
function startTimer_primero(duration, contenido_time) {
    let timer = duration, seconds;
     contador = setInterval(function () {
        seconds = timer;
        contenido_time.textContent =  seconds;
        if (--timer < 0) {
           alert("Tiempo terminado");
           f_revisar();
           comenzar();
        }
    }, 1000);
    return false;
}
