// ------ ternary operator ------------
// const rating = 7
//condition
// if(rating > 8 ) {
//     //True
//     console.log("This is a good movie")
// } else {
//     //false
//     console.log("This is a terrible movie")
// }

//condition                                     // true                                             //false
// rating > 9 ? console.log(`This is a good movie because it was rated ${rating} from IMDB`) : console.log("This is a terrible movie")

// ------ callback functions -------
const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, they were charged ${price}`)
}

const returningItem = (person, price) => {
    console.log(`Processing refund for ${person}, they will get back ${price}`)
}

const parentFunction = (callback, person, price) => {
    //callback function
    console.log("Welcome to my store")
    callback(person, price)
}

// parentFunction(makingPurchase, "Laura", 1000)
// parentFunction(returningItem, "Laura", 1000)

// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    { id: 3, itemName: "dogFood", price: 1.29, shops: ["petco", "Trader Joes"] },
    { id: 5, itemName: "Logitech gamer chair", price: 1500, shops: ["amazon", "Best Buy"]},
    { id: 9, itemName: "soup dumplings", price: 3.29, shops: ["Trader Joes"] },
    { id: 2, itemName: "Air ticket to Japan", price: 1400, shops: ["expedia"] },
    { id: 10, itemName: "custard tart", price: 3.99, shops: ["Trader Joes"] },
]);

// ------ .map & .filter -------
//.map()

const prices = shoppingList.map((item) => {
    return item.shops
})
// console.log(prices);

const elements = shoppingList.map((item, p) => `${p} - ${item.id}: ${item.itemName}`)
// console.log(elements)


const cheapItems = shoppingList.filter((item) => item.price > 50 )
// console.log(cheapItems)

const cheapItemNames = shoppingList.filter((item) => item.price > 100).map((item) => {
    return item.itemName
} )
console.log(cheapItemNames)