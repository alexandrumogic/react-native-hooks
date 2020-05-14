import React, { useState, useEffect, useContext, useCallback, useMemo, useRef } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TaskListContext } from './App';

const set = new Set();

export default function TaskInput() {
  // const [state, setState] = useState(); 
  const [task, setTask] = useState('Understand the useEffect');
  const [state, dispatch] = useContext(TaskListContext);
  const [warning, setWarning] = useState(false);

  const textInputRef = useRef();

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
                style={{ borderWidth: 0.5, borderColor: 'gray', width: '50%', marginTop: 10 }}
                onChangeText={onChangeText}
                ref={textInputRef}
            />
            <Button
                title={"Add task"}
                onPress={() => {
                  dispatch({type: 'add', payload: task})
                  textInputRef.current.clear();
                }}
            />
            {warning && <Text style={{ color: 'orange' }}>You have exceeded the limit</Text>}
            <Text>You have added {state.counter} tasks into the list.</Text>
        </View>
    )
}