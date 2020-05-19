import React, { useContext, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TaskInput from './TaskInput';
import { TaskListContext } from './App';

export default function TaskList() {
    const [state, dispatch] = useContext(TaskListContext);
    const textInputRef = useRef();

    return (
        <View style={styles.container}>
            {state.taskList.map((item) => {
            return (
              <View key={item.id} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20
              }}>
                <View style={{ flexDirection: 'row' }}>
                  <MaterialIcons.Button
                    name={item.done ? "done" : "crop-square"}
                    color={item.done ? "green" : "blue"}
                    backgroundColor="transparent"
                    iconStyle={{ marginRight: 0}}
                    onPress={() => { dispatch({ type: 'update', payload: item })}}
                  />
                  <Text style={{ alignSelf: 'center'}}>{item.description}</Text>
                </View>
                <MaterialIcons.Button
                  name="close"
                  color="red"
                  backgroundColor="transparent"
                  iconStyle={{ marginRight: 0}}
                  onPress={() => {
                    dispatch({ type: 'remove', payload: item })
                    textInputRef.current.clear();
                  }}
                />
              </View>
            )
            })}
            <TaskInput ref={textInputRef}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignContent: 'center',
      justifyContent: 'center',
    },
  });