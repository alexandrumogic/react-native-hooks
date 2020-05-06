import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TaskListContext } from './App';

export default function TaskInput() {
  // const [state, setState] = useState(); 
  const [task, setTask] = useState('Understand the useEffect');
  const [state, setState] = useContext(TaskListContext);
  const [warning, setWarning] = useState(false);

  // componentDidUpdate
  useEffect(() => {
    setState({...state, counter: state.counter + 1});
    setTask('');
  }, [state.taskList])

  useEffect(() => {
    if (task.length > 25) {
      setWarning(true);
    } else {
      if (warning) {
        setWarning(false);
      }
    }
  }, [task])

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TextInput
                value={task}
                style={{ borderWidth: 0.5, borderColor: 'gray', width: '50%', marginTop: 10 }}
                onChangeText={(value) => { setTask(value) }}
            />
            <Button
                title={"Add task"}
                onPress={() => {
                setState({...state, taskList: [...state.taskList, task]})
                }}
            />
            {warning && <Text style={{ color: 'orange' }}>You have exceeded the limit</Text>}
            <Text>You have added {state.counter} tasks into the list.</Text>
        </View>
    )
}