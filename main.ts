function doMotor () {
	
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    connect = true
    basic.clearScreen()
    while (connect) {
        uartData += 1
        basic.showArrow(ArrowNames.North)
        basic.clearScreen()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connect = false
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(uartData)
    if (uartData == "A") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (uartData == "B") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    } else if (uartData == "C") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    } else if (uartData == "D") {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
let uartData = ""
let connect = false
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
connect = false
basic.forever(function () {
	
})
