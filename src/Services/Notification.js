import PushNotification from "react-native-push-notification"

  let navegator;
 
  class Notification {

      setNavegator(newContent)
      {
          navegator = newContent
      }
      newChanel = () => {
        PushNotification.createChannel(
            {
            channelId: "channel-id",
            channelName: "My channel",
            channelDescription: "A channel to categorise your notifications",
            playSound: false,
            soundName: "default",
            vibrate: true,
            },
            (created) => console.log(`createChannel returned '${created}'`)
        );
      }
      configuration = () => {
          PushNotification.configure({
              onRegister: function (token) {
                  console.log("[NotificationManager] onRegister token:", token);
                },
              onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                navegator.navigate("Destination")
              },
              onAction: function(notification){
                  console.log("ACTION:", notification.action)
              }
          })
      }
      buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
          return {
              id: id,
              autoCancel: true,
              channelId: "channel-id",
              largeIcon: options.largeIcon || "ic_launcher",
              smallIcon: options.smallIcon || "ic_launcher",
              bigText: message || '',
              subText: title || '',
              vibrate: options.vibrate || false,
              vibration: options.vibration || 300,
              priority: options.priority || "high",
              importance: options.importance || "high",
              data: data            
          }
      }
      showNotification = (id, title, message, data = {}, options = {}) => {
          PushNotification.localNotification({
              ...this.buildAndroidNotification(id, title, message, data, options),

              title: title || "",
              message: message || "",
              playSound: options.playSound || false,
              soundName: options.soundName || 'default',
              userInteraction: false
          })
      }
      agendNotification() {
        PushNotification.localNotificationSchedule({
            id:2,
            channelId: 'channel-id',
            title: 'Você ganhou um CUPOM de desconto! ',
            message: "Garanta já aquele lanche gostoso com um descontão! ",
            date: new Date(Date.now() + 300 * 1000),//5min
            allowWhileIdle: false,
            repeatTime: 900*1000, //15min
            repeatType: 'time'
          });

          PushNotification.localNotificationSchedule({
            id:3,
            channelId: 'channel-id',
            title: 'Saco vazio não para em pé!',
            message: "Está na hora de comer, garanta já aquele lanchão para aguentar o dia!",
            date: new Date(Date.now() + 600 * 1000), //10min
            allowWhileIdle: false,
            repeatTime: 900*1000,//15min
            repeatType: 'time'
          });
          PushNotification.localNotificationSchedule({
            id:4,
            channelId: 'channel-id',
            title: 'Cozinhar pra que?',
            message: "Esfihas Blaibor com desconto de 30% até a meia noite! ",
            date: new Date(Date.now() + 900 * 1000), //15min
            allowWhileIdle: false,
            repeatTime: 900*1000,//15min
            repeatType: 'time'
          });
      }

  }

  export const notificationManager = new Notification();