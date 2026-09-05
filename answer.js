function describeValue(val) {
    if(!!val){
        return (`${typeof val} | truthy`)
    } else {
        return (`${typeof val} | falsy`)
    }
}


