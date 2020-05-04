export const url = `${'192.168.0.14'}:${process.env.VUE_APP_SOCKET_PORT || '3000'}`

export const STORE_ACTIONS = {
    joinRoom: 'joinRoom',
    setRooms: 'setRooms',
    changeRoom: 'changeRoom',
    leaveChat:'leaveChat',
    changeStatus: 'changeStatus',
    distanceChanged: 'distanceChanged'
}
export const WS_EVENTS = {
    joinPrivateRoom: 'joinPrivateRoom',
    joinRoom: 'joinRoom',
    leaveRoom: 'leaveRoom',
    publicMessage: 'publicMessage',
    leavePrivateRoom: 'leavePrivateRoom',
    leaveChat: 'leaveChat',
    changeStatus: 'changeStatus',
    privateMessage: 'privateMessage'
}

export const STATUS_OPTIONS = {
    available: 'available',
    absent: 'absent',
    unavailable: 'unavailable'
}
