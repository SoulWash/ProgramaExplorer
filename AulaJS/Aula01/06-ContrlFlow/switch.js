// Switch

function coffeBreak(coffe, sugar, milk){
    switch (coffe){
        case 1:
            sugar = console.log("Café docinho.")
            break
        case 2:
            milk = console.log("Café com leite.")
            break
        default:
            console.log("Café purasso.")
            break
    }
    return coffe
}

coffeBreak(1)