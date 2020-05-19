import React, { useState, useEffect, useContext, useCallback, useMemo, useRef, useImperativeHandle, forwardRef } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { TaskListContext } from './App';

const set = new Set();

function TaskInput(props, ref) {
  // const [state, setState] = useState(); 
  const [task, setTask] = useState('');
  const [state, dispatch] = useContext(TaskListContext);
  const [warning, setWarning] = useState(false);

  const intervalRef = useRef();

  const textInputRef = useRef();

  useImperativeHandle(ref, () => textInputRef.current);

  const [isTimeActive, setTimeActive] = useState(false);
  const [miliseconds, setMiliseconds] = useState(0);
  const [timeRec, setTimeRec] = useState(0);

  useEffect(() => {
    if (task.length > 0 && !isTimeActive) {
      setTimeActive(true);

      intervalRef.current = setInterval(() => {
        setMiliseconds(miliseconds => miliseconds + 100);
      }, 100);
    }
  }, [task, isTimeActive]);

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

                  setTask('');
                  clearInterval(intervalRef.current);
                  setTimeActive(false);

                  setTimeRec(miliseconds);
                  setMiliseconds(0);

                }}
            />
            {warning && <Text style={{ color: 'orange' }}>You have exceeded the limit</Text>}
            <Text>You have added {state.counter} tasks into the list.</Text>
            <Text>Last time it took you {timeRec / 1000} seconds to enter a task.</Text>
        </View>
    )
}

export default forwardRef(TaskInput);