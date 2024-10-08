function autoEngineeringCompany(input){
    obj = {};

    while(input.length > 0){
        let line = input.shift();
        let [carBrand, carModel, producedCars] = line.split(' | ');
        
        if(!obj[carBrand]){
            obj[carBrand] = {}
        }

        if(!obj[carBrand][carModel]){
            obj[carBrand][carModel] = 0
        }

        obj[carBrand][carModel] += Number(producedCars)
    }

    for (const [brand, model] of Object.entries(obj)) {
        console.log(brand);

        for (const [models, qty] of Object.entries(model)) {
            console.log(`###${models} -> ${qty}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);