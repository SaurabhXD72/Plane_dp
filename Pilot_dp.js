//dp approach
function minimumPlanes(arr) {
    //Creating an array with saem length as of our input filled with + Infinity
    let dp = new Array(arr.length).fill(Infinity);
    dp[0] = 0;
    //Create another array but this time filled with -1;
    let path = new Array(arr.length).fill(-1);
    path[0] = 0;
    for (let i = 0; i < arr.length; i++) {   // Iterate through the arr toCheck all the airports that can be reached with the fuel available at the current airport
        for (let j = i + 1; j <= i + arr[i] && j < arr.length; j++) {
           //if the number of planes needed to reach the current airport plus 1 is less than the number of planes needed to reach the next airport
            if (dp[i] + 1 < dp[j]) {
                //  Update the number of planes needed to reach the next airport
                dp[j] = dp[i] + 1;
                 // Update the path array to show that the current airport is the one used to reach the next airport
                path[j] = i;
            }
        }
    }
     // If the last airport can't be reached, return -1
    if (dp[arr.length - 1] === Infinity) {
        return -1;
    }

   
    let current = arr.length - 1;//sets the current airport to the last airport
    let fuel = [arr[arr.length - 1]];//creates an array "fuel" and adds the fuel available at the last airport.
   
    while (current !== 0) {//This while loop continues until the current airport is the first airport
         current = path[current];//updates the current airport to the airport that was used to reach the current airport, as stored in the "path" array.
        fuel.unshift(arr[current]);//It adds the fuel available at the current airport to the beginning of the "fuel" array.
    }
    return {
        "Minimum number of planes": dp[arr.length - 1],
        "Fuel at each airport": fuel
    };
}

let arr= [2,1,2,3,1];
let result = minimumPlanes(arr);
console.log(result);

let arre = [1,6,3,4,5,0,0,0,6];
let result2 = minimumPlanes(arre);
console.log(result2);