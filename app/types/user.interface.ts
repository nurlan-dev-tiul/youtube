import { IBase } from "./base.interface";
import { IVideo } from "./video.interface";

export interface IUser extends IBase {
    email: string
    name: string
    isVerified?: boolean
    avatarPath: string
    description: string
    subscribersCount?: number
    videos?: IVideo[]
    subscriptions: ISubscription[]
}

export interface ISubscription extends IBase {
    toChannel: IUser
}

