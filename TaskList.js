import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskInput from './TaskInput';
import { TaskListContext } from './App';

export default function TaskList() {
    const [state, setState] = useContext(TaskListContext);

    return (
        <View style={styles.container}>
            {state.taskList.map((item) => {
            return <Text>{item}</Text>
            })}
            <TaskInput />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });