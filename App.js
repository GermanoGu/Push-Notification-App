import React, {Component} from 'react'
import {notificationManager} from './src/Services/Notification'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from './src/Screens/Index'
import Destination from './src/Screens/Destination'

const Stack = createStackNavigator()
const notificator = notificationManager;

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    notificator.agendNotification()
    notificator.newChanel()
    notificator.configuration()
  }

  sendNotify = () => {
    notificator.showNotification(
      1,
      "As notificações estão funcionando!",
      "As agendadas vão começar daqui 5 minutos",
      {}, // data
      {} // options
    )
  }
  render() {
    
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{title: 'Fominha'}}>
            {
              ({navigation}) => {notificator.setNavegator(navigation); 
              return(<Index navegator={navigation} sendNotification={this.sendNotify}/>)}
            }
          </Stack.Screen>

          <Stack.Screen name="Destination" options={{title: 'Detalhes'}}>
            {({navigation}) => {return(<Destination navegator={navigation} />)}}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}