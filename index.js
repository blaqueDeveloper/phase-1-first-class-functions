function receivesAFunction(callBackFunction){
    let callBack = callBackFunction()
    return callBack
}

function returnsANamedFunction(){
    return function namedFunction(){
        return `I am a named function`
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return `I am an anonymous function`
    }
}