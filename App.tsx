/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

function App(): JSX.Element {
  const today = new Date();
  // console.log(today);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.black}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  black: {
    flex: 1,
  },
});

export default App;
