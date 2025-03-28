function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') //ar this point, the compiler knows it is a number
        return weight * 2.2; 
    else  //at this point, the compiler knows it a string
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');