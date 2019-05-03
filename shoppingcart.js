let shoppingCart = [];

let itemList = [{
    name: "Air Force 1",
    price: 100
},
{
    name: "Ultraboost",
    price: 180
},
{
    name: "NMD",
    price: 160
},
{
    name: "Converse",
    price: 80
},
{
    name: "Air Max 97",
    Price: 170
}];

function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, { name: itemName, price: itemPrice }];
}

function removeItem(itemName) {
    let index = shoppingCart.findIndex(item => item.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
}

// If we're only changing item name and keeping old price
function editItem(oldItemName, newItemName) {
    let index = shoppingCart.findIndex(item => item.name === oldItemName);
    shoppingCart = [...shoppingCart.slice(0, index), { name: newItemName, price: shoppingCart[index].price }, ...shoppingCart.slice(index + 1)];
}

// // If edit item name and item price
// function editItem(oldItemName, newItemName, newItemPrice) {
//     let index = shoppingCart.findIndex(item => item.name === oldItemName);
//     shoppingCart = [...shoppingCart.slice(0, index), { name: newItemName, price: newItemPrice }, ...shoppingCart.slice(index + 1)];
// }

function printTotal() {
    let total = 0;
    for (let cartItem of shoppingCart) {
        total += cartItem.price;
    }
    console.log(`Total Price: $${total * 1.06}`);
}

addItem("Air Force 1", 100); // AF1 $100 in cart Total: $100
addItem("NMD", 160); // AF1 $100 + NMD $160 in cart Total: $260
addItem("Air Max 97", 170); // AF1 $100 + NMD $160 + Air Max 97 $170 in cart Total: $430
editItem("NMD", "NMD v2"); // AF1 $100 + NMD v2 $160 + Air Max 97 $170 in cart Total: $430
// editItem("NMD", "NMD v2", 200); // AF1 $100 + NMD Version 2 $200 + Air Max 97 $170 in cart Total: $470
// removeItem("Air Max 97"); // AF1 $100 + NMD v2 $200 in cart Total: $300
// printTotal(); // Total * 1.06 = $300 * 1.06 = $318
removeItem("Air Max 97"); // AF1 $100 + NMD v2 $160 in cart Total: $260
printTotal(); //Total * 1.06 = $260 * 1.06 = $275.6