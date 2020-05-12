import React, { useState, useEffect, createContext, useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export const TaskListContext = createContext();

export default function App() {

  // const [state, dispatch] = useReducer((state, action) => newState)

  const [state, setState] = useState({
    taskList: [
      {
        id: 0,
        description: 'Task 1'
      },
      {
        id: 1,
        description: 'Task 2'
      },
      {
        id: 2,
        description: 'Task 3'
      },
    ],
    counter: 0
  })
  
  return (
    <TaskListContext.Provider value={[state, setState]}>
      <TaskList />
    </TaskListContext.Provider>
  );
}

// App
// TaskList
// TaskInput
