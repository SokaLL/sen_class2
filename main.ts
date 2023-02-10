function doMotor () {
    if (true) {
    	
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    connect = true
    basic.clearScreen()
    while (connect) {
        basic.showArrow(ArrowNames.North)
        basic.clearScreen()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connect = false
})
let connect = false
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
connect = false
basic.forever(function () {
	
})
