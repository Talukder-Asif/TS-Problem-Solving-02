{
    // Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

    function logString(input: unknown) {
        if (typeof input ==='string') {
            console.log(input);
        } else {
            console.error("Input must be a string");
        }
    }

    // Example usage:
    logString("Hello, TypeScript!");
    logString(123);
    logString(true);
    logString({ name: "Alice" });
    logString(123);
    logString(true);
    logString({ name: "Alice" });
    logString("Hello, TypeScript!");
    logString(new Date());


}