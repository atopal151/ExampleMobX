import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Counter from './src/component/MyComponent'
import Person from './src/component/Person'
import { Provider } from 'mobx-react'
import stores from './src/store/index'
import Users from './src/component/Users'

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={styles.container}>
          <Users />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
