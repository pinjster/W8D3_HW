import { v4 as uuidv4 } from "uuid";

export function createItem(name: string, price: number, description: string):Item {
    const newItem: Item = {
        id: uuidv4(),
        name: name,
        price: price,
        description: description
    }
    return newItem
}
