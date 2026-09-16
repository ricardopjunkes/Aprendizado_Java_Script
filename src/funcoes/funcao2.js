function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(8));

console.log("Olá");

((name) => {
    console.log(name);
})("Ricardo");

function createTag(name,prefix,suffix){
    if (prefix && suffix){
        return `${prefix} ${name} ${suffix}`
    }
    if (prefix ){
        return `${prefix} ${name} `
    }
    return name
}

const tag = createTag("Ricardo", "Desenvolvedor", "dev")

console.log(tag)


function pow(number,exponent = 2){
    return number ** exponent
}
console.log(pow(5))