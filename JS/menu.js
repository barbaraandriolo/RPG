// Importe os módulos necessários
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// import { getDatabase } from "firebase/database";



function classeRaca() {
    var select_classe = document.getElementById('Classes'); // substitua 'seu-select' pelo id do seu elemento <select>
    var select_raca = document.getElementById('Raca'); // substitua 'seu-select' pelo id do seu elemento <select>
    var texto_classe_raca = select_classe.value + " - " + select_raca.value
    // document.getElementById("p_classe").innerText = texto_classe_raca
    var vida = 0;
 switch(select_raca.value){

  case "Anão":
    vida = 6
    console.log("Anão escolhido");
    break;
  case "Criatura":
    vida = 10
    console.log("Criatura escolhida");
    break;
  case "Elfo":
    vida = 7
    console.log("Elfo escolhido");
    break;
  case "Goblin":
    vida = 8
    console.log("Goblin escolhido");
    break;
  case "Híbrido":
    vida = 8
    console.log("Híbrido escolhido");
    break; q
  case "Humano":
    vida = 7
    console.log("Humano escolhido");
    break;
  case "Orc":
    vida = 12
    console.log("Orc escolhido");
    break;
  default:
    console.log("Raça não escolhida");


 }


document.getElementById("p_classe").innerText = texto_classe_raca + '\n' + "HP: " + vida
    

  }


  formulario.addEventListener("submit", function(event) {
    // Evita o comportamento padrão de recarregar a página
    event.preventDefault();
  
    // Lógica de manipulação do formulário
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
  
    // Exemplo: exibir os valores do formulário no console
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);

    const firebaseConfig = {
      apiKey: "AIzaSyAY0fwUK1h6raZGNKPUFa_ZrH7RjVNC8CQ",
      authDomain: "rpg-ferias.firebaseapp.com",
      projectId: "rpg-ferias",
      storageBucket: "rpg-ferias.appspot.com",
      messagingSenderId: "115931771378",
      appId: "1:115931771378:web:92d50e763661d3d8e23b6b",
      measurementId: "G-W4PGNGHHPJ"
    };
    // Inicialize o Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.getDatabase(firebaseApp);
    const usersRef = database.ref("teste")
    set(usersRef, {
      nome: nome,
      idade: idade,
    });
  

  });
  


