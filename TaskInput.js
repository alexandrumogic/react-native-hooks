import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TaskListContext } from './App';

const set = new Set();

export default function TaskInput() {
  // const [state, setState] = useState(); 
  const [task, setTask] = useState('Understand the useEffect');
  const [state, setState] = useContext(TaskListContext);
  const [warning, setWarning] = useState(false);

  const callMeCallback = useCallback(() => {

  }, []);

  function callMe() {

  }

  const memoValue = useMemo(() => {
    console.log("memoValue");
    return Math.pow(state.counter, 3);
  }, [state.counter]);

  set.add(callMeCallback);
  set.add(callMe);

  // console.log(set);

  const onTaskListChange = useCallback(() => {
    setState({...state, counter: state.counter + 1});
    setTask('');
  }, [state])

  useEffect(onTaskListChange, [state.taskList])

  const onTaskChange = useCallback(() => {
    console.log("onTaskChange");
    if (task.length > 25) {
      setWarning(true);
    } else {
      if (warning) {
        setWarning(false);
      }
    }
  }, [task])

  useEffect(onTaskChange, [task]);

  const onChangeText = useCallback((value) => {
    setTask(value);
  }, []);

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TextInput
                value={task}
                style={{ borderWidth: 0.5, borderColor: 'gray', width: '50%', marginTop: 10 }}
                onChangeText={onChangeText}
            />
            <Button
                title={"Add task"}
                onPress={() => {
                setState({...state, taskList: [...state.taskList, task]})
                }}
            />
            {warning && <Text style={{ color: 'orange' }}>You have exceeded the limit</Text>}
            <Text>You have added {memoValue} tasks into the list.</Text>
        </View>
    )
}