import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            {uid: Math.random().toString(), value: goalTitle}
        ]); // Spread syntax takes an existing array and combines it with new elements
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.uid !== goalId); // Return a new array where we only keep the goals with an id that is not equal to the goalId parameter
        });
    }

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    }

    return (
        <View style={styles.screen}>
            <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)}/>
            <GoalInput
                visible={isAddMode}
                onAddGoal={addGoalHandler}
                onCancel={cancelGoalAdditionHandler}
            />
            <FlatList
                keyExtractor={(item, index) => item.uid} // How to extract the key from each item
                data={courseGoals}
                renderItem={itemData => <GoalItem id={itemData.item.uid} onDelete={removeGoalHandler}
                                                  title={itemData.item.value}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});
