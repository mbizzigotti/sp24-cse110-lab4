let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let property in statistics) {
    const shouldPrint = property.startsWith('r')
                    || statistics[property] % 2 === 1;
    if (shouldPrint) {
        console.log(property);
    }
}