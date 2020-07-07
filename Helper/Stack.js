import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";

const screens = {
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
};

const stack = createStackNavigator(screens);

export default createAppContainer(stack);
