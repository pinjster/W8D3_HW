import { createItem } from "./Item/ItemFunctions";
import { addToCart, cartTotal, createUser, printCart, removeFromCart, removeQuantityFromCart } from "./User/UserFunctions";

const user = createUser('pinj', 22);
const itemA = createItem('Steel Cut Oats', 3.67, "20oz.");
const itemB = createItem('Sharp Cheddar', 3.20, "not even wensleydale?");
const itemC = createItem('birch beer', 1, "Muy Delicioso!");

addToCart(itemA, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

addToCart(itemB, user);
addToCart(itemB, user);
addToCart(itemB, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

addToCart(itemC, user);
addToCart(itemC, user);
addToCart(itemC, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

removeFromCart(itemB, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

removeQuantityFromCart(itemC, user, 2);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);