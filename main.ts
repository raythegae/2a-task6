let calcium = 0
let fahrenheit = 0
input.onButtonPressed(Button.A, function () {
    calcium = input.temperature()
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    fahrenheit = calcium * 1.8 + 32
    basic.showString("" + (fahrenheit))
})
