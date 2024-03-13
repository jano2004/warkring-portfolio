class ServiceObject {
    constructor(type, description, price) {
        this.type = type;
        this.description = description;
        this.price = price;
    }
}

let ServiceObjetOne =
    new ServiceObject('Basic', 'Die Basics.', '199')
let ServiceObjetTwo =
    new ServiceObject('Advanced', 'Schlicht & Modern', '399')
let ServiceObjetThree =
    new ServiceObject('Premium', 'Mehr geht nicht!', '899')
let ServiceObjetFour =
    new ServiceObject('Baukasten', 'Ihr Wunsch, Ihre Wahl.', 'ab 399')

export const service = [{
    serviceObject: ServiceObjetOne
}, {
    serviceObject: ServiceObjetTwo
}, {
    serviceObject: ServiceObjetThree
}, {
    serviceObject: ServiceObjetFour
}]

