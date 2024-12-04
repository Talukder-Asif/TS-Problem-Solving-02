{
    // Design a TypeScript function findLargest Number that takes an array of numbers and returns the largest number in the array.
    function findMax (Arr : number[]): number{
        return Math.max(...Arr);
    }

    const arr : number[] = [12,23,32,2,5,4,23,13,3,21,22,1,3,32,21,32,3,12,43,3,24];
    console.log(findMax(arr));
}