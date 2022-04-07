import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Dispatch, SetStateAction } from "react";


export interface IUser {
  _id?: string,
  avatar?: string,
  name?: string,
}
export interface IMessage {
  user:IUser
  message:string
}
export interface IPost{
  author:{
    _id?: string,
    avatar?: string,
    name: string,},
  createdAt: string,
  content:string,
  images?: string[]
}

export interface IMenuItem {
  title: string,
  link: string,
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; },
}
export type TypeSetState<T> = Dispatch<SetStateAction<T>>