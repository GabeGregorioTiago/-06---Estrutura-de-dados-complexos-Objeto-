// Crie um objeto que receba ao menos três propriedades sobre você.
   let informacoes = {
       nome : 'Gabriel',
       idade:24,
       cidade:'Barra Mansa',
   }
    console.log(informacoes)
// Adicione uma nova propriedade sem alterar seu objeto inicial.
  informacoes.sobrenome = 'Tiago'
  console.log(informacoes)
// Remova uma propriedade desse objeto.
  delete informacoes.cidade
 
//Mostre no console todas as propriedades desse objeto.
 console.log(informacoes)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
  let cadastro = [{
    nome: 'Gabriel',
    idade:24,
    telefone:'24 988457044',
    amigos : ['Joao','Olivia','Sheila','Renato'],
  },{
    nome:'Anna Carolina',
    idade: 27,
    telefone: '24 977667868',
    amigos: ['Dominique','Amanda','Fernanda','José'],
  },{
    nome:'Ana Paula',
    idade: 48,
    telefone: '27 96817638987',
    amigos: ['Nice','Jessica','Anderson','Leandro'],
  },{
    nome:'Sheila',
    idade: 25,
    telefone: '24 9885658234',
    amigos:['Gabriel', 'Manoel','Olivia','Sabrina'],
  },{
    nome:'Olivia',
    idade: 25,
    telefone: '24 9887863847',
    amigos: ['Joao','Karla','Gabriel','Renan'],
  }]

   console.log(cadastro)
   console.table(cadastro)
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[1])