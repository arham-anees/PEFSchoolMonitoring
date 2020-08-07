import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

function ActivityIndicatorModal(props) {
  return (
    <Modal isVisible={props.show} hasBackdrop={true} transparent={true}>
      <View style={styles.modalContentContainer}>
        <ActivityIndicator size={"large"} color={"#fff"} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContentContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default ActivityIndicatorModal;
