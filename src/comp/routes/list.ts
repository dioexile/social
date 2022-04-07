import Auth from "../auth/Auth";
import Messages from "../messages/Messages";
import Home from "../pages/home/Home";
import Profile from "../profile/Profile";

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    auth: true
  },
  {
    path: '/profile',
    exact: false,
    component: Profile,
    auth: true
  },
  {
    path: '/messages',
    exact: true,
    component: Messages,
    auth: true
  },
  {
    path: '/message/:id',
    exact: false,
    component: Home,
    auth: true
  },
  {
    path: '/friends/:id',
    exact: false,
    component: Home,
    auth: true
  },
  {
    path: '/auth',
    exact: true,
    component: Auth,
    auth: false
  }
]