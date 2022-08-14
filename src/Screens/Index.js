import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

export default function Index(props)
{
    return(
        <View style={styles.container}>
            <Button title="Testar notificação" onPress={ () => props.sendNotification()}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})