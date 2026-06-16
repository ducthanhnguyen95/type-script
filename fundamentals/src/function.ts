// function calculateTax(income:number){};
// function calculateTax(income:number){return 0;}

// function calculateTax(income:number):number{
//     if(income < 50_000)
//         return income * 1.2;
// }

// function calculateTax(income:number):number{
//     if(income < 50_000)
//         return income * 1.2;
//     return income * 1.3;
// }

// function calculateTax(income:number):number{
//     let x; 
//     if(income < 50_000)
//         return income * 1.2;
//     return income * 1.3;
// }

// function calculateTax(income:number, taxYear?:number):number{ 
//     if((taxYear || 2026) < 20226)
//         return income * 1.2;
//     return income * 1.3;
// }; 

function calculateTax(income:number, taxYear = 2026):number{ 
    if(taxYear < 20226)
        return income * 1.2;
    return income * 1.3;
}; 
calculateTax(10_000);