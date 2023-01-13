
function minimumPlanes(arr) {
    let dp = new Array(arr.length).fill(Infinity);
    dp[0] = 0;
    let path = new Array(arr.length).fill(-1);
    path[0] = 0;
    for (let i = 0; i < arr.length; i++) {   // Iterate through the arr toCheck all the airports that can be reached with the fuel available at the current airport
        for (let j = i + 1; j <= i + arr[i] && j < arr.length; j++) {
            if (dp[i] + 1 < dp[j]) {
                dp[j] = dp[i] + 1;
                path[j] = i;
            }
        }
    }
     // If the last airport can't be reached, return -1
    if (dp[arr.length - 1] === Infinity) {
        return -1;
    }

   
    let current = arr.length - 1;
    let fuel = [arr[arr.length - 1]];
   
    while (current !== 0) {
         current = path[current];
        fuel.unshift(arr[current]);
    }
    return {
       
        "Fuel at each airport": fuel
    };
}

let arr= [2,1,2,3,1];
let result = minimumPlanes(arr);
console.log(result);

let arre = [1,6,3,4,5,0,0,0,6];
let result2 = minimumPlanes(arre);
console.log(result2);