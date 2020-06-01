import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandeler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uid: Math.random().toString(), value: enteredGoal },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          width="80%"
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandeler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <View>
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1,
  },
});
