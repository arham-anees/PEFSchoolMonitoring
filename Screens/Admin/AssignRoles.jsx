import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { GetProfiles } from "../../Services/Profile";
const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  //... // more items
];

class AssignRoles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    GetProfiles()
      .then((res) => this.setState({ users: res }))
      .catch((err) => this.setState({ error: err }));
  }
  handleClick = () => {
    this.props.navigation.navigate("AssignRoleDetail");
  };
  render() {
    return (
      <View>
        {this.state.users.length > 0 ? (
          this.state.users.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              onPress={this.handleClick}
              bottomDivider
            />
          ))
        ) : (
          <Text style={{ marginTop: 20 }}>No New Profile</Text>
        )}
      </View>
    );
  }
}

export default AssignRoles;
