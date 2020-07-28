import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native-elements";

import { SignOut } from "../Services/Auth";

import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
import Loading from "../Screens/Loading";
import MonitorHome from "../Screens/Monitor/MonitorHome";
import AssignRoles from "../Screens/Admin/AssignRoles";
import AssignRoleDetail from "../Screens/Admin/AssignRoleDetail";
import AdminHome from "../Screens/Admin/AdminHome";
import Reports from "../Screens/Shared/Reports";
import ReportDetail from "../Screens/Shared/ReportDetail";
import UploadPictures from "../Screens/Monitor/UploadPictures";
import SchoolsList from "../Screens/Shared/School/SchoolsList";
import School from "../Screens/Shared/School/School";
import Profile from "../Screens/Shared/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import ClassesList from "../Screens/Shared/Class/ClassesList";
import Class from "../Screens/Shared/Class/Class";
import NewClass from "../Screens/Shared/Class/NewClass";
import TeachersList from "../Screens/Shared/Teacher/TeachersList";
import Teacher from "../Screens/Shared/Teacher/Teacher";
import NewTeacher from "../Screens/Shared/Teacher/NewTeacher";
import ReportsList from "../Screens/Shared/Reports/ReportsList";
import Report from "../Screens/Shared/Reports/Report";
import PictureSearch from "../Screens/Shared/Pictures/PictureSearch";
import Pictures from "../Screens/Shared/Pictures/Pictures";

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
            options={withLogOut}
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
          <Stack.Screen name="ClassesList" component={ClassesList} />
          <Stack.Screen name="Class" component={Class} />
          <Stack.Screen name="NewClass" component={NewClass} />
          <Stack.Screen name="TeachersList" component={TeachersList} />
          <Stack.Screen name="Teacher" component={Teacher} />
          <Stack.Screen name="NewTeacher" component={NewTeacher} />
          <Stack.Screen name="ReportsList" component={ReportsList} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="PictureSearch" component={PictureSearch} />
          <Stack.Screen name="Pictures" component={Pictures} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } catch (er) {
    console.log(er);
  }
}

export default Navigator;
