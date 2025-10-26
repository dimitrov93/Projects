export interface Comment {
    _id: string,
    content: string,
    taskId: number,
    taskTitle: string,
    createdOn: Date,
    userId: string,
    userName: string,
    date: string
}