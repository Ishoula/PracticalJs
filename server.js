const express=require('express')
const app=express()
const students=[]

//add middleware to parse JSON request bodies
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

//create a student class with a getDetails method
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Grade: ${this.grade}`;
    }
}

//use the class in the post route
app.post('/students', (req, res) => {
    const { name, grade } = req.body;
    const student = new Student(name, grade);
    students.push(student);
    res.status(201).json(student);
});

//use the class in the get route
app.get('/students', (req, res) => {
    const studentList = students.map(student => new Student(student.name, student.grade));
    res.json(studentList);
});
