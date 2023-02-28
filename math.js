const OPERATIONS ={
    sum: '+',
    sub: '-',
    mul: '*',
    division: '/'
}

function calculate({ a, b , operation}){
    let result = null
    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a,b)
            break
        case OPERATIONS.sub:
            result = sub(a,b)
            break
        case OPERATIONS.mul:
            result = mul(a,b)
            break
        case OPERATIONS.division:
            result = division(a ,b)
    }


    return result
}

















