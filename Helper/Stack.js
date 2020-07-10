import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

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

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="AdminHome" component={AdminHome} />*/}
        <Stack.Screen name="MonitorHome" component={MonitorHome} />
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
}

export default Navigator;
