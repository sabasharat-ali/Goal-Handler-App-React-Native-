import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    // <TouchableHighlight underlayColor="green" onPress={props.onDelete}>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onDelete.bind(this, props.goalId)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
