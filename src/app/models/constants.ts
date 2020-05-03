export interface Gender{
    value: string,
    viewValue: string
}
export interface quizList {
    id: string,
    questionNo: string,
    questionTitle: string,
    questionOption:Array<any>,
    correctAns: string
}