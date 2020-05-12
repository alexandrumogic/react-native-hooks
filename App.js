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
        taskList: [...state.taskList, { id: state.lastId, description: action.payload, done: false }],
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

    case 'update': {
      const newTaskList = state.taskList.map(
        task => (
          task.id === action.payload.id ?
          { ...action.payload, done: !action.payload.done } :
          task
        )
      );

      return {
        ...state,
        taskList: newTaskList
      }
    }
  }
}

const list = [
  {
    id: 0,
    description: 'Task 1',
    done: false
  },
  {
    id: 1,
    description: 'Task 2',
    done: false
  },
  {
    id: 2,
    description: 'Task 3',
    done: false
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
