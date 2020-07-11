import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { SignOut } from "../Services/Auth";

import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import Loading from "../Screens/Loading";
import MonitorHome from "../Screens/Monitor/MonitorHome";
import AssignRoles from "../Screens/Admin/AssignRoles";
import AssignRoleDetail from "../Screens/Admin/AssignRoleDetail";
import AdminHome from "../Screens/Admin/AdminHome";
import School from "../Screens/Shared/School";
import Reports from "../Screens/Shared/Reports";
import ReportDetail from "../Screens/Shared/ReportDetail";
import UploadPictures from "../Screens/Monitor/UploadPictures";
import SchoolsList from "../Screens/Shared/SchoolsList";
import Profile from "../Screens/Shared/Profile";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const withLogOut = {
  headerLeft: () => null,
  headerRight: () => (
    <Button
      icon={<Icon name="sign-out" size={30} color="blue" />}
      onPress={() => SignOut()}
      type={"clear"}
    />
  ),
};

function Navigator() {
  try {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerLeft: () => null }}
          />
          <Stack.Screen
            name="AdminHome"
            component={AdminHome}
            options={withLogOut}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerLeft: () => null }}
          />
          <Stack.Screen
            name="MonitorHome"
            component={MonitorHome}
            options={withLogOut}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AssignRoles" component={AssignRoles} />
          <Stack.Screen name="AssignRoleDetail" component={AssignRoleDetail} />
          <Stack.Screen name="SchoolsList" component={SchoolsList} />
          <Stack.Screen name="School" component={School} />
          <Stack.Screen name="Reports" component={Reports} />
          <Stack.Screen name="ReportDetail" component={ReportDetail} />
          <Stack.Screen name="UploadPictures" component={UploadPictures} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } catch (er) {
    console.log(er);
  }
}

export default Navigator;
