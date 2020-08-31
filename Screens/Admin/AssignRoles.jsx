import React from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { ListItem } from "react-native-elements";
import { GetProfiles, SetOrUpdateProfile } from "../../Services/Profile";
import eApprovalStatus from "../../Helper/eApprovalStatus";
import ActivityIndicatorModal from "../../Components/ActivityIndicatorModal";
import { ScrollView } from "react-native-gesture-handler";

class AssignRoles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      updatedUsers: [],
      showIndicator: true,
    };
  }
  getProfile = () => {
    GetProfiles()
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.profiles,
          updatedUsers: res.updatedProfiles,
          showIndicator: false,
        });
      })
      .catch((err) => this.setState({ error: err, showIndicator: false }));
  };
  componentDidMount() {
    this.getProfile();
  }
  // handleClick = () => {
  //   this.props.navigation.navigate("AssignRoleDetail", {
  //     profile: item,
  //     accept: this.handleAccept,
  //     reject: this.handleReject,
  //   });
  // };

  handleAccept = (profile) => {
    this.setState({ showIndicator: true });
    profile.approvalStatus = eApprovalStatus.Accepted;

    SetOrUpdateProfile(profile)
      .then((res) => {
        this.setState({
          accepted: true,
          user: profile.name,
          role: profile.role,
        });
        this.props.navigation.goBack();
        this.getProfile();
        this.setState({ showIndicator: false });
        alert("user status has been updated.");
      })
      .catch((err) => this.setState({ error: err }));
  };

  handleReject = (profile) => {
    profile.approvalStatus = eApprovalStatus.Rejected;
    SetOrUpdateProfile(profile)
      .then((res) => {
        this.setState({
          accepted: false,
          user: profile.name,
          role: profile.role,
          showIndicator: false,
        });
        alert("error updating user");
      })
      .catch((err) => this.setState({ error: err, showIndicator: false }));
  };

  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        {this.state.showIndicator ? (
          <ActivityIndicator />
        ) : this.state.users.length > 0 ? (
          this.state.users.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              onPress={() => {
                this.props.navigation.navigate("AssignRoleDetail", {
                  profile: l,
                  accept: this.handleAccept,
                  reject: this.handleReject,
                });
              }}
              bottomDivider
            />
          ))
        ) : (
          <Text style={{ marginTop: 20, marginBottom: 10 }}>
            No New Profile
          </Text>
        )}
        {this.state.updatedUsers.length > 0 ? (
          <React.Fragment>
            <Text style={{ marginTop: 20, fontSize: 18 }}>
              Approved/Rejected Users
            </Text>
            {this.state.updatedUsers.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                rightSubtitle={l.approvalStatus}
                bottomDivider
                onPress={() => {
                  this.props.navigation.navigate("AssignRoleDetail", {
                    profile: l,
                    accept: this.handleAccept,
                    reject: this.handleReject,
                  });
                }}
              />
            ))}
          </React.Fragment>
        ) : null}
      </ScrollView>
    );
  }
}

export default AssignRoles;
