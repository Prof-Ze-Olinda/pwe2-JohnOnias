"use strict";

const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {
    // TODO: peça ao usuário seu nome usando prompt()
    let user_name = prompt('digite seu nome!'); 
    
    // TODO: peça o ano de nascimento e armazene em anoNascimento
    let anoNascimento = prompt("digite o seu ano de nascimento!");
    // Use uma variável para o ano atual
    let anoAtual = 2025;

    // TODO: converta o ano de nascimento para número (parseInt)
    anoNascimento = parseInt(anoNascimento); 
    // TODO: exiba com alert() uma frase: "Olá, NOME! Você tem X anos."
    let user_age = anoAtual - anoNascimento;
    alert("Olá, " + user_name + " Você tem  " + user_age + "  anos");
    // TODO: use confirm() para perguntar se a idade está correta
    let user_confirm = confirm("A idade esta certa?");
    // Exiba no console a escolha do usuário (console.log ou console.warn)
    console.log(user_confirm);
    // Melhore o programa adicionando outros recursos
});
