{
    // Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

    function filterEvenNumbers(arr : number[]): number[]{
        return arr.filter(num => num % 2 === 0);
    }

    const arr : number[] = [12,23,32,2,5,4,23,13,3,21,22,1,3,32,21,32,3,12,43,3,24];

    console.log(filterEvenNumbers(arr));

}