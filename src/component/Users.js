import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import { observer } from 'mobx-react'
import UserStore from '../store/UserStore'

class Users extends Component {
    render() {
        return (
            <View>
                {UserStore.loading ? <ActivityIndicator size={'small'} /> :
                    <Button title='fetch Users'
                        onPress={() => { UserStore.fetchUsers() }} />
                }
                <View>
                    {
                        UserStore.error ? <Text>{UserStore.error}</Text> :
                            (
                                UserStore.users.map((user, key) => (
                                    <View key={key}>
                                        <Text>{user.name.first}</Text>
                                    </View>
                                ))
                            )
                    }
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default observer(Users);