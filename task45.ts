interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function storeCarInfo(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const carInfo: Car = {
        manufacturer: manufacturer,
        model: model
    };

    for (const [key, value] of options) {
        carInfo[key] = value;
    }

    return carInfo;
}

const carInfo = storeCarInfo("Toyota", "Camry", ["color", "blue"], ["features", ["Navigation", "Sunroof"]]);

console.log(carInfo);
