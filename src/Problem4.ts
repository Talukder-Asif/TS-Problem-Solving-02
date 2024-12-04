{
    // Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
    function reverseArray<T>(arr : T[]): T[] {
        return arr.reverse();
    }

    const arr : number[] = [12,23,32,2,5,4,23,13,3,21,22,1,3,32,21,32,3,12,43,3,24];

    console.log(reverseArray<number>(arr))



}