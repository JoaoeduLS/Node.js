// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista1sController {

    ex1({request}){
            const dados = request.body()
            const resultado = (dados.qtdMinima-dados.qtdMaxima)/2

            return{resultado}

    }
    ex2({request}){
        const dados = request.body()
        const salario= dados.horas*dados.porhora
        const numerodefilhos= dados.filhos*0.03
        const res = salario*numerodefilhos+salario
        const resultado={
            nome:dados.nome,
            horas:dados.horas,
            porhora:dados.porhora,
            fihos:dados.filhos,
            res
    }
        return resultado  
    }
    ex4({ request }) {
        const dados = request.body()

        let dias = dados.dias
        let anos = 0
        let meses = 0

        while(dias >= 365){
            dias -= 365
            anos++
        }
        while(dias >= 30){
            dias -= 30
            meses++
        }

        const resultado = {
            anos: anos,
            meses: meses,
            dias: dias
        }

        return resultado
    }
    ex5({ request }) {
        const dados = request.body()
        const media = (nota1, nota2, nota3) => {
            const calc = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
            return calc
        }
    
        return media(dados.nota1, dados.nota2, dados.nota3)
    }
    ex6({ request }) {

        const dados = request.body()
        let segundos = dados.segundos
        let horas = 0
        let minutos = 0
  
        while(segundos >= 60){
            segundos -= 60
            minutos++
        }
        while(minutos >= 60){
            minutos -= 60
            horas++
        }
  
        const resultado = {
            horas: horas,
            minutos: minutos,
            segundos: segundos
        }
  
        return resultado
      }
      ex7({ request }) {
        const dados = request.body()
        const nome = dados.nome
        const totalVendas = dados.totalVendas
        const comissao = dados.comissao
        const salario = totalVendas * (1 + (comissao / 100))
  
        const resultado = {
            nome: nome,
            salario: `R$${salario.toFixed(2).replace('.', ',')}`
        }
  
        return resultado
      }
      ex8({ request }) {
        const dados = request.body()
  
        const nome = dados.nome
        const distancia = dados.distancia
        const tempo = dados.tempo
        const velocidadeMedia = distancia / tempo
  
        return `A velocidade média do ${nome} foi ${velocidadeMedia} km/h.`
      }
      x9({ request }) {
        const dados = request.body()
  
        const salario = dados.salario
        
        if(salario >= 1000){
          const resposta = {
            salario: `R$${salario.toFixed(2).replace('.', ',')}`,
            mensagem: `Salário superior ou igual a R$1000,00, sem reajuste.`
          }
          return resposta
        }else{
          const novoSalario = salario * 1.3
          const resposta = {
            salario: `R$${salario.toFixed(2).replace('.', ',')}`,
            mensagem: `Salário inferior a R$1000,00.`,
            novoSalario: `R$${novoSalario.toFixed(2).replace('.', ',')}`
          }
          return resposta
  

    }

}
}