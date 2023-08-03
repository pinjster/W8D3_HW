import { v4 as uuidv4 } from "uuid";

function createUser(name: string, age: number): User {
    const newUser: User = {
        id: uuidv4(),
        name: name,
        age: age,
        cart: []
    }
    return newUser;
}

function addToCart(item: Item, user: User): void {
    user.cart.push(item);
}

function removeFromCart(item: Item, user: User):void {
    user.cart = user.cart.filter((i: Item) => i.id !== item.id);
}

function removeQuantityFromCart(item: Item, user: User, amount: number):void {
    for(let i = 0; i < amount; i++){
        let f:number = user.cart.findIndex((x: Item) => x.id === item.id);
        if(f === -1){
            break;
        } else {
            user.cart.splice(f, 1);
        }
    }
}

function cartTotal(user: User):number {
    let total = 0;
    for(let item of user.cart){
        total += item.price;
    }
    return total;
}

function printCart(user: User):void {
    console.log('');
    for(let item of user.cart){
        console.log(`${item.name}:${' '.repeat(29 - item.name.length)} $${(Math.round(item.price * 100) / 100).toFixed(2)}    "${item.description}"`);
    }
}

export {
    createUser,
    addToCart,
    removeFromCart,
    removeQuantityFromCart,
    cartTotal,
    printCart
}