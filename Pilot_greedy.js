//Greedy approach
function minimumPlanes(arr) {
    let fuel = [arr[0]];
    let N = arr.length;
    let distance = 1;
    for (let i = 1; i < N; i++) {
        if (arr[i - 1] >= distance) {
            fuel.push(arr[i - 1]);
            distance = 1;
        } else {
            fuel.push(distance);
            distance++;
        }
    }
    return fuel;
}

let arr= [2,1,2,3,1];
let result = minimumPlanes(arr);
console.log(result);

let arre = [1,6,3,4,5,0,0,0,6];
let result2 = minimumPlanes(arre);
console.log(result2);

//this doesnt works for the latter case! because it doesnt takes in the fact that 
//planes at each airport can be used just about once hence wont always give the minimum path!