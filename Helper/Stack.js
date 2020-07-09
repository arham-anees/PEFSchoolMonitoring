import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import Loading from "../Screens/Loading";
import Home from "../Screens/Monitor/Home";

let screens = {
  Loading: {
    screen: Loading,
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
};

const stack = createStackNavigator(screens);

export default createAppContainer(stack);
