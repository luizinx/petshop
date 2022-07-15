const cachorros = require('./database/cachorros.json');

module.exports = {
    listar: function(){
        console.table(cachorros);
    },
    descrever: function(pos){
        if(pos >= cachorros.length || pos > 0){
            console.error("Cachorro inexistente!");
            return;
        }
        
        let c = cachorros[pos]
        console.log(`Nome: ${c.nome}`);
        console.log(`Sexo: ${c.sexo}`);

        //console.log(`Castrado: ${c.castrado}`);
        if(c.castrado){
            console.log("Castrado: Sim")
        }else{
            console.log("Castrado : Não")
        }
        console.log(`Peso: ${c.peso}`)
        console.log(`Data de Nascimento: ${c.dataDeNascimento}`);
        console.log("Vacinas:");
        console.table(c.vacinas);

        console.log("Serviços:");
        console.table(c.servicos);

        

    },

    adicionar: function($nome, $sexo, $castrado, $dataDeNascimento, $peso){
        
        //objeto cachorro
        
        
        let dog = {
            nome: $nome,
            sexo: $sexo,
            castrado: $castrado,
            dataDeNascimento: $dataDeNascimento,
            peso: $peso,
            vacinas: [],
            servicos: []
        } 
    
         //adicionar o cachorro criado a array de cachorros
        cachorros.push(dog);
         
        // gravar array de cacorros no arquivo cachorros.json
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros));

    }


}