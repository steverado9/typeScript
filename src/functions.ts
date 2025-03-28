function calculateTax (income: number, taxYear = 2022 ): number { //This second annotated value is what datatype we are returning
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;  
}
calculateTax(10_000);
//we can make a parameter optional by adding ? to it
//giving taxYear a default value