// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista1sController {

    ex1({request}){
            const dados = request.body()
            const estoqueMedio = (dados.qtdMinima*1+dados.qtdMaxima*1)/2
        //return request.Only(['qtdMinima','nome'])
        return estoqueMedio
    }
    ex2(){
        
    }
}

  