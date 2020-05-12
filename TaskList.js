import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TaskInput from './TaskInput';
import { TaskListContext } from './App';

export default function TaskList() {
    const [state, setState] = useContext(TaskListContext);

    return (
        <View style={styles.container}>
            {state.taskList.map((item) => {
            return (
              <View key={item.id} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20
              }}>
                <Text style={{ alignSelf: 'center'}}>{item.description}</Text>
                <MaterialIcons.Button
                  name="close"
                  color="red"
                  backgroundColor="transparent"
                  iconStyle={{ marginRight: 0}}
                  onPress={() => { }}
                />
              </View>
            )
            })}
            <TaskInput />
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