/* 
Problem Description:
You will be provided with an array containing five six-sided dice values. Your task is to calculate the score for a given roll according to the following rules:
Three 1's => 1000 points
Three 6's => 600 points
Three 5's => 500 points
Three 4's => 400 points
Three 3's => 300 points
Three 2's => 200 points
One 1 => 100 points
One 5 => 50 points
Rules and Constraints:
A single die can only be counted once in each roll.
For example, if a “5” appears three times, it contributes to the 500 points rule. But if it appears as a single die, it contributes to the 50 points rule.
Example Scoring:
Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Important Note:
Mutating the input to the scoring function is strictly prohibited. Any attempt to mutate the input will result in the failure of test cases. Make sure your function is non-destructive to the original array.
 */

function score(arr){
    let points = 0;
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            one++;
        }
        else if(arr[i] === 2){
            two++;
        }
        else if(arr[i] === 3){
            three++;
        }
        else if(arr[i] === 4){
            four++;
        }
        else if(arr[i] === 5){
            five++;
        } else {
            six++;
        }
    }
    if(Math.floor(one / 3) === 1){
        points += 1000;
        one -= 3;
    }
    if(one % 3 > 0){
        points += (one * 100);
    }
    if(Math.floor(five / 3) === 1){
        points += 500;
        five -= 3;
    }
    if(five % 3 > 0){
        points += (five * 50);
    }
    if(Math.floor(two / 3) === 1){
        points += 200;
    }
    if(Math.floor(three / 3) === 1){
        points += 300;
    }
    if(Math.floor(four / 3) === 1){
        points += 400;
    }
    if(Math.floor(six / 3) === 1){
        points += 600;
    }
    return points
}

console.log(score([5, 1, 3, 4, 1]));
console.log(score([1, 1, 1, 3, 1]));
console.log(score([2, 4, 4, 5, 4]));
console.log(score([5, 5, 5, 5, 1]));