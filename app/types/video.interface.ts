import { IComment } from './comment.interface';
import { IUser } from './user.interface';
import { IBase } from "./base.interface";

export interface IVideo extends IBase {
    name: string
    isPublic: boolean
    views: number
    likes: number
    duration: number
    videoPath: string
    thumnailPath: string
    description: string
    user?: IUser
    comments: IComment[];
}

//! Для добавления
export interface IVideoDto 
    extends Pick<
        IVideo, 
        'id' |
        'thumnailPath' |
        'description' |
        'name' |
        'videoPath' |
        'isPublic' 
    > {}