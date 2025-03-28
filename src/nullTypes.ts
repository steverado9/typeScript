function greet (name: string | null) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log('Hola');
    }
}
greet(null)
//This is the only acceptable way to use null values in typescript