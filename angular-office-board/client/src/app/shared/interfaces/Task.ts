import { Comment } from "./Comments";

export interface Task {
    _id: string | undefined,
    title: string,
    description: string,
    status: number,
    createdAt: string | number,
    userId: string | number,
    userName: string,
    comments: [Comment]
}