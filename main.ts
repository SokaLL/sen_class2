function doMotor () {
    if (true) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (false) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
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
