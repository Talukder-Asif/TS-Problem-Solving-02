{
    // You are given an object called "student" representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
// Hints: Use a reduce() method to sum the grades. average total grades/ total length


function calculateAverageGrade (student: Student): number {
    const totalSubject = student.grades.length;
    var totalGrade = 0;
    student.grades.map(grade=> totalGrade += grade);
    return totalGrade / totalSubject;
}


    interface Student {
        name: string,
        age: number,
        grades: number[]
    }

    const student : Student = {
        name: "John Doe",
        age: 18,
        grades: [85, 90, 92, 88, 95]
    }

    console.log(calculateAverageGrade(student))
}