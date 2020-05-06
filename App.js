import React, { useState, useEffect, createContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export const TaskListContext = createContext();

export default function App() {

  const [state, setState] = useState({
    taskList: [
      'Task1',
      'Task2',
      'Task3'
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
