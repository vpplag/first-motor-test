input.onButtonPressed(Button.A, function () {
    if (speed > 0) {
        speed += -10
    }
    basic.showNumber(speed / 10)
})
input.onButtonPressed(Button.B, function () {
    if (speed < 100) {
        speed += 10
    }
    basic.showNumber(speed / 10)
})
let speed = 0
speed = 0
basic.showNumber(speed)
basic.forever(function () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
})
