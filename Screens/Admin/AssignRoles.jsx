import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { GetProfiles, SetOrUpdateProfile } from "../../Services/Profile";
import eApprovalStatus from "../../Helper/eApprovalStatus";

class AssignRoles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      updatedUsers: [],
    };
  }
  componentDidMount() {
    GetProfiles()
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.profiles,
          updatedUsers: res.updatedProfiles,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }
  // handleClick = () => {
  //   this.props.navigation.navigate("AssignRoleDetail", {
  //     profile: item,
  //     accept: this.handleAccept,
  //     reject: this.handleReject,
  //   });
  // };

  handleAccept = (profile) => {
    profile.approvalStatus = eApprovalStatus.Accepted;
    SetOrUpdateProfile(profile)
      .then((res) => {
        this.setState({
          accepted: true,
          user: profile.name,
          role: profile.role,
        });
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
        });
      })
      .catch((err) => this.setState({ error: err }));
  };

  render() {
    return (
      <View style={{ margin: 10 }}>
        <View>
          {this.state.accepted != null ? (
            <Text>
              {this.state.user} is{" "}
              {this.state.accepted ? "accepted " : "rejected "}
              as {this.state.role}
            </Text>
          ) : null}
        </View>
        {this.state.users.length > 0 ? (
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
                disabled={true}
                bottomDivider
              />
            ))}
          </React.Fragment>
        ) : null}
      </View>
    );
  }
}

export default AssignRoles;
