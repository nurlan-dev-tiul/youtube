import { IVideo } from './video.interface';
import { IUser } from './user.interface';
import { IBase } from "./base.interface";

export interface IComment extends IBase {
    user: IUser;
    video: IVideo;
    message: string;
}

//! Для добавления
export interface ICommentDto extends Pick<IComment, 'message'>{
    videoId: number
}