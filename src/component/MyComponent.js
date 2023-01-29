
import React, {Component} from "react";
import { observer, inject } from 'mobx-react'
import { Button, Text, View, StyleSheet } from "react-native";
import CounterStore from "../store/CounterStore";
import PersonStore from "../store/PersonStore";

inject("CounterStore", "PersonStore")
class Counter extends Component {

    render() {
        const {counterStore,personStore}=this.props;
        return (
            <View>
                <Button style={styles.buttonStyle} title="Arttir" onPress={() => CounterStore.increment()} />
                <Text style={styles.text}>{CounterStore.counter}</Text>
                <Button style={styles.buttonStyle} title="Azalt" onPress={() => CounterStore.decrement()} />
                <Text style={styles.text}>{PersonStore.fullName}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 38,
        textAlign: 'center'

    }
})

export default observer(Counter);