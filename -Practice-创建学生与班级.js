/* ** 1\. 创建一个学生管理系统**

在这个系统中，我们将处理两种类型的对象：`Student`和`Classroom`。

首先，创建一个`Student`类，每个学生有以下属性：

- `name`：学生的名字。
- `age`：学生的年龄。
- `grades`：一个数组，存储学生的成绩。

`Student`类应该有以下方法：

- `addGrade(grade)`：向`grades`数组添加一个新的成绩。
- `getAverageGrade()`：返回学生的平均成绩。

接下来，创建一个`Classroom`类，每个教室有以下属性：

- `name`：教室的名字。
- `students`：一个数组，存储在这个教室里的学生。

`Classroom`类应该有以下方法：

- `addStudent(student)`：向`students`数组添加一个新的学生。
- `getAverageGrade()`：返回教室里所有学生的平均成绩。 */
/* **2\. 添加异常处理**

为`Student`和`Classroom`类添加适当的错误处理。例如，如果试图将一个非`Student`对象添加到`Classroom`，或者试图给`Student`添加一个不是数字的成绩，应该抛出一个错误。*/
/*  **3\. 使用你的类**

创建几个`Student`和`Classroom`对象，并用它们来展示你的类如何工作。尝试添加新的学生和成绩，计算平均成绩，等等。*/

/*  **4\. 附加任务：添加更多功能**

如果你觉得上述任务太简单，可以考虑添加更多的功能。例如，你可以添加以下的方法：

- 在`Classroom`类中，添加一个`getTopStudent()`方法，返回平均成绩最高的学生。
- 在`Student`类中，添加一个`getGradeReport()`方法，返回一个字符串，描述学生的所有成绩。

记住，这是一个开放性的项目，你可以根据自己的想法添加任何你认为有趣的功能。 */

class Student {
    constructor(name, age, grades = []) {
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade = (grade) => {
        if (grade < 0) {
            throw new Error("Grade cannot be negative");
        }
        this.grades.push(grade);
    }

    getAverageGrade = () => {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }

    getGradeReport = () => {
        return this.grades.join(", ");
    }
}

class Classroom {
    constructor(name, students = []) {
        this.name = name;
        this.students = students;
    }

    addStudent = (student) => {
        if (!(student instanceof Student)) {
            throw new Error("Student is not a Student");
        }
        this.students.push(student);
    }

    getAverageGrade = () => {
        let sum = this.students.reduce((a, b) => a + b.getAverageGrade(), 0);
        return sum / this.students.length;
    }

    getTopStudent = () => {
        let topStudent = this.students[0];
        for (let i = 1; i < this.students.length; i++) {
            if (this.students[i].getAverageGrade() > topStudent.getAverageGrade()) {
                topStudent = this.students[i];
            }
        }
        return topStudent;
    }
}

let student1 = new Student("John", 20, [80, 90, 100]);
let student2 = new Student("Jane", 21, [85, 95, 100]);
let classroom = new Classroom("Math", [student1]);

classroom.addStudent(student2);
console.log(classroom.getAverageGrade());
console.log(classroom.getTopStudent().name);
