export class StudentData {
    Student_Name;
    student_UniqueID;
    Student_Enrolled_Courses;
    View_Balance;
    Show_Status;
    Pay_tuition_Fees;
    constructor(Student_Name, student_UniqueID, Student_Enrolled_Courses, View_Balance, Show_Status, Pay_tuition_Fees) {
        this.Student_Name = Student_Name;
        this.student_UniqueID = student_UniqueID;
        this.Student_Enrolled_Courses = Student_Enrolled_Courses;
        this.View_Balance = View_Balance;
        this.Show_Status = Show_Status;
        this.Pay_tuition_Fees = Pay_tuition_Fees;
    }
    get StudentName() {
        return this.Student_Name;
    }
    get StudentID() {
        return this.student_UniqueID;
    }
    get EnrolledCourses() {
        return this.Student_Enrolled_Courses;
    }
    get ViewBalance() {
        return this.View_Balance;
    }
    get ShowStatus() {
        return this.Show_Status;
    }
    get PayTuitionFees() {
        return this.Pay_tuition_Fees;
    }
}
