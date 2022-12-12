export interface Task {
    _id: number,
    title: string,
    description: string,
    status: number,
    createdAt: Date,
    userId: string,
    userName: string,
    commentsCount: number,
}