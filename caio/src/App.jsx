import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Prova() {
    var botao = document.getElementById("bot")
    botao.addEventListener('click',gerar);
  function gerar(){
    const valor = fetch('https://opentdb.com/api.php?amount=30&category=15').then(res =>{
        res.json().then(dados=>{
            console.log(dados.data);
            mostracategoria(dados)
            
        
        });

        })
        .catch(erro=>{
            console.log(erro + "erro na requisição")
        });
    }



   
    
    function mostracategoria(dados){
        
        var questao = document.getElementById('texto')

            questao.textContent = dados.data.category[Math.floor(Math.random()*100)].url;    
     
    }





  return (
    <>
    <h1>Com meme</h1><br/>
    <button id="bot"  onClick={gerar()}>Gerar</button><br/>
    <h4 id="texto"></h4>
    </>
  )
}

export default App

