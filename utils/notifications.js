import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import { askAsync, NOTIFICATIONS } from 'expo-permissions'

const notification_key = 'flashcards:reminder'

const createNotification = () => {

    return {
        title: 'study reminder',
        body: "you haven't taken any quiz today",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}


export const clearLocalNotifications = () => {
    return AsyncStorage.removeItem(notification_key)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const setLocalNotification = () => {
    return AsyncStorage.getItem(notification_key)
        .then((data) => {
            const res = JSON.parse(data)
            if (!res) {
                askAsync(NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                                .then(() => {
                                    let tomorrow = new Date()
                                    tomorrow.setDate(tomorrow + 1)
                                    tomorrow.setHours(20)
                                    tomorrow.setMinutes(0)

                                    Notifications.scheduleLocalNotificationAsync(
                                        createNotification(),
                                        {
                                            time: tomorrow,
                                            repeat: 'day',
                                        }
                                    )
                                })
                            AsyncStorage.setItem(notification_key, JSON.stringify(true))
                        }
                    })
                    .catch((err) => { throw new Error(err) })
            }
        })
}
