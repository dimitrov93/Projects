export interface Message {
    _id: number,
    title: string,
    content: string,
    createdAt: Date,
    userId: string | number,
    userName: string,
}