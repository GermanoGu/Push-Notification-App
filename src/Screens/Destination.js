import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Destination()//props
{
    return(
        <View style={styles.container}>
            <Text>Tela destino da notificação</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
})