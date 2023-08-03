/* 
write function takes an array of directions
create custom literal type for each direction
ensure func param is an array of custom type
*/

type direction = 'North' | 'South' | 'East' | 'West'

const array: direction[] = [ 'West','North', 'East', 'South']

function directions(arr: direction[]):void {
    for(let direct of arr){
        console.log(direct);
    }
}

directions(array);