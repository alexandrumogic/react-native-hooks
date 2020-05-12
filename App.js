import React, { useState, useEffect, createContext, useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export const TaskListContext = createContext();

export function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        taskList: [...state.taskList, { id: state.lastId, description: action.payload }],
        counter: state.counter + 1,
        lastId: state.lastId + 1,
      }
    case 'remove':
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload.id),
        counter: state.counter - 1,
        lastId: state.lastId + 1,
      }
  }
}

const list = [
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
];

const initialState = {
  taskList: list,
  counter: list.length,
  lastId: list.length
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <TaskListContext.Provider value={[state, dispatch]}>
      <TaskList />
    </TaskListContext.Provider>
  );
}

// App
// TaskList
// TaskInput
