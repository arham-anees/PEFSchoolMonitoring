import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import Loading from "../Screens/Loading";
import MonitorHome from "../Screens/Monitor/MonitorHome";
import AssignRoles from "../Screens/Admin/AssignRoles";
import AdminHome from "../Screens/Admin/AdminHome";

let screens = {
  AssignRoles: {
    screen: AssignRoles,
  },
  Loading: {
    screen: Loading,
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  MonitorHome: {
    screen: MonitorHome,
  },
  AdminHome: {
    screen: AdminHome,
  },
};
// screens.forEach(element => {
//   //replace header here
// });
const stack = createStackNavigator(screens);

export default createAppContainer(stack);
