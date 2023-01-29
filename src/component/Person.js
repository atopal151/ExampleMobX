import React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';
import { observer } from 'mobx-react'
import personStore from '../store/PersonStore'

const componentName = () => (
    <View>
        <Button
            style={styles.buttonStyle}
            title="Change Name"
            onPress={() => personStore.changeName()} />
        <Text
            style={styles.text}>
            {personStore.fullName}
        </Text>
    </View> 
);

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 38,
        textAlign: 'center'

    }
})

export default observer(componentName);
