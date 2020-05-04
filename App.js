import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // const [state, setState] = useState(); 
  const [task, setTask] = useState('Understand the useEffect');
  const [taskList, setTaskList] = useState([]);
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      {taskList.map((item) => {
        return <Text>{item}</Text>
      })}
      <Text>You have to: {task}</Text>
      <TextInput
        value={task}
        style={{ borderWidth: 0.5, borderColor: 'gray', width: '50%', marginTop: 10 }}
        onChangeText={(value) => { setTask(value) }}
      />
      <Button
        title={"Add task"}
        onPress={() => {
          setTaskList([...taskList, task])
          setTask(undefined);
          setCounter(counter + 1);
        }}
      />
      <Text>You have added {counter} tasks into the list.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
