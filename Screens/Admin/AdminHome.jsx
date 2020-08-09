import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  BackHandler,
} from "react-native";

BackHandler.addEventListener("hardwareBackPress", () => BackHandler.exitApp());
function AdminHome(props) {
  let data = [
    {
      id: 1,
      title: "Approve Users",
      color: "#FF4500",
      image: "https://img.icons8.com/dusk/64/000000/user-male.png",
      page: "AssignRoles",
    },
    {
      id: 3,
      title: "Schools",
      color: "#4682B4",
      image: "https://img.icons8.com/fluent/48/000000/picture.png",
      page: "PictureSearch",
    },
    {
      id: 2,
      title: "View  Reports",
      color: "#87CEEB",
      image: "https://img.icons8.com/plasticine/100/000000/business-report.png",
      page: "ReportsList",
    },
    {
      id: 3,
      title: "Schools",
      color: "#4682B4",
      image: "https://img.icons8.com/office/70/000000/home-page.png",
      page: "SchoolsList",
    },
  ];

  let clickEventListener = (item) => {
    alert(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => {
                  props.navigation.navigate(item.page, { isMonitor: false });
                }}
              >
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </TouchableOpacity>

              <View style={styles.cardHeader}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={[styles.title, { color: item.color }]}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#474747",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
