def doMotor():
    if 0 == 0:
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_RUN)
    elif False:
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_LEFT)
    else:
        mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)

def on_bluetooth_connected():
    global connect
    basic.show_icon(IconNames.HAPPY)
    basic.pause(1000)
    connect = True
    basic.clear_screen()
    while connect:
        basic.show_arrow(ArrowNames.NORTH)
        basic.clear_screen()
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global connect
    basic.show_icon(IconNames.SAD)
    connect = False
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

connect = False
bluetooth.set_transmit_power(7)
bluetooth.start_uart_service()
basic.show_icon(IconNames.HEART)
connect = False

def on_forever():
    pass
basic.forever(on_forever)
