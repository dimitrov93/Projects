import { Comment } from "./Comments";

export interface Task {
    _id: number,
    title: string,
    description: string,
    status: number,
    createdAt: Date,
    userId: string | number,
    userName: string,
    commentsCount: number,
    comments: [Comment]
}