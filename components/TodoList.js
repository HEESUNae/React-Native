import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onToggle}) => {
  return (
    <FlatList
      style={styles.list}
      // 리스트에 border-bottom 주기
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      // 데이터를 props로 전달해준다.
      data={todos}
      // props data를 화면에 그려준다.
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
        />
      )}
      // 고유한 key값 (꼭 문자열이여야한다.)
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
