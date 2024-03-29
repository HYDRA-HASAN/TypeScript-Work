export class StudentData {
    private Student_Name: string;
    private student_UniqueID: number;
    private Student_Enrolled_Courses: string[];
    private View_Balance: number;
    private Show_Status: string;
    private Pay_tuition_Fees: boolean;

    constructor(
        Student_Name: string,
        student_UniqueID: number,
        Student_Enrolled_Courses: string[],
        View_Balance: number,
        Show_Status: string,
        Pay_tuition_Fees: boolean
    ) {
        this.Student_Name = Student_Name;
        this.student_UniqueID = student_UniqueID;
        this.Student_Enrolled_Courses = Student_Enrolled_Courses;
        this.View_Balance = View_Balance;
        this.Show_Status = Show_Status;
        this.Pay_tuition_Fees = Pay_tuition_Fees;
    }

    get StudentName(): string {
        return this.Student_Name;
    }

    get StudentID(): number {
        return this.student_UniqueID;
    }

    get EnrolledCourses(): string[] {
        return this.Student_Enrolled_Courses;
    }

    get ViewBalance(): number {
        return this.View_Balance;
    }

    get ShowStatus(): string {
        return this.Show_Status;
    }

    get PayTuitionFees(): boolean {
        return this.Pay_tuition_Fees;
    }
}

export type Data = {
    Studentlist: string,
    Student_Name: string,
    student_UniqueID: number,
    Continue: string,
    Pay_tuition_Fees: string,
}
