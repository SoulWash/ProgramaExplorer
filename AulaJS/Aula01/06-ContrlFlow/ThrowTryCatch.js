// Throw e Try/Catch

//Throw

function sayMyName(name = ''){
    if (name === ''){
        throw new Error('Nome é obrigatório')
    }
    console.log(name)
}
//Try..catch

try {
    sayMyName()
} catch (error) {
    console.log(error)
}

console.log('após o try/catch')