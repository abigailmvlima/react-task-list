// exemplo de funcao
function nomedafuncao(parametros) {

}

// exemplo de funcao
const nomedafuncao = (parametros) => {
    // corpo da funcao
    
}

// maneira de receber dados
// 1 - passar o nome parametros
const nomedafuncao = (parametros) => {    
    // corpo da funcao
    const task = parametros.task

    task.id
    task.title    
}


// 2 - passar o nome parametros entre chaves
<nomedocomponente 
    prop1={valor1} 
    task={valorTask} 
    prop3={valor3} />

const nomedafuncao = ({ prop1, task, prop3  }) => {    
    // corpo da funcao    
    task.id
    task.title    
}


const nomedafuncao = ({ task, header, ...parametros  }) => {    
    const prop1 = parametros.prop1
    const prop3 = parametros.prop3

    task.id
    task.title    
}


// exemplo - componente react
export default function(parametros) {

    // useState, useEffect

    return (
        <div>teste</div>
    )
}

// exemplo - componente react
function nomedocomponente(parametros) {

    // useState, useEffect

    return (
        <div>teste</div>
    )
}

export default nomedocomponente



// exemplo - componente react
const nomedocomponente = (parametros) => {

    // useState, useEffect

    return (
        <div>teste</div>
    )
}

export default nomedocomponente

/// ***********************



lista

    1, 'teste 1', 'completo 1' 
    2, 'teste 2', 'completo 2' 
    3, 'teste 3', 'completo 3' 
    4, 'teste 4', 'completo 4' 


// json formato de arquivo ou dados
const dados = { id: 1, title: 'teste 1', complete: 'completo 1' }




// exemplo de array, array[]
const lista = []  // lista vazia  


const lista = [dados]
const lista = [dados, dados]


lista   
    // linha 1 
    id = 1 
    title = 'teste 1'
    complete = 'completo 1'

    // linha 2
    id = 1 
    title = 'teste 1'
    complete = 'completo 1'
    

const lista = [
    { id: 1, title: 'teste 1', complete: 'completo 1' },
    { id: 2, title: 'teste 2', complete: 'completo 2' },
    { id: 3, title: 'teste 3', complete: 'completo 3' },
    { id: 4, title: 'teste 4', complete: 'completo 4' },
]



// maneira de criar variavel no javascript
const variavel = ""
const variavel = 11
const variavel = true
const variavel = new Date()


var variavel = ""
var variavel = 11
var variavel = true
var variavel = new Date()


// maneira de criar variavel apenas no react
const [variavel, funcaoQueAdiciona] = useState(lista)


funcaoQueAdiciona([novovalor])


const useState = (iniaial) => {
    const variavel = iniaial
    
    const funcao = (valor) => {
       variavel = valor     
    }    
    return [variavel, funcao]
}


//////////

const lista = [
    { id: 1, title: 'teste 1', complete: 'completo 1' },
    { id: 2, title: 'teste 2', complete: 'completo 2' },
    { id: 3, title: 'teste 3', complete: 'completo 3' },
    { id: 4, title: 'teste 4', complete: 'completo 4' },
]


// lista.length pega o tamanho da lista 
// lista = 3
for (let i = 0; i < lista.length; i++) {
    const task = lista[i];
    // task == { id: 1, title: 'teste 1', complete: 'completo 1' },
    // task.id ou task.title ou  task.complete    
}

lista.forEach((task, index) => {
    // index = sequencial da lista iniciando por 0    
    // task == { id: 1, title: 'teste 1', complete: 'completo 1' },
    // task.id ou task.title ou  task.complete    
})

lista.map(task => {
    // index = sequencial da lista iniciando por 0    
    // task == { id: 1, title: 'teste 1', complete: 'completo 1' },
    // task.id ou task.title ou  task.complete    
})