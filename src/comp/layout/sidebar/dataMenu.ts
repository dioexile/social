import * as Icons from "@mui/icons-material";
import { IMenuItem } from "../../../types";

export const menu:IMenuItem[] = [
  {
    title: 'My page',
    link: '/profile',
    icon: Icons.Home
  },
  {
    title: 'News',
    link: '/',
    icon: Icons.Article
  },
  {
    title: 'Messages',
    link: '/messages',
    icon: Icons.MessageRounded
  },
  {
    title: 'Friends',
    link: '/friends',
    icon: Icons.People
  },
]