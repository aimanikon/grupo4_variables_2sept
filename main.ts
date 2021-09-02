input.onButtonPressed(Button.A, function () {
    Stop_cinco += 5
    basic.showNumber(Stop_cinco)
})
input.onButtonPressed(Button.AB, function () {
    Pasos = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Pasos += 1
    basic.showNumber(Pasos)
})
input.onGesture(Gesture.TiltRight, function () {
    Pantalla_arriba += 2
    basic.showNumber(Pantalla_arriba)
})
let Stop_cinco = 0
let Pantalla_arriba = 0
let Pasos = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
Pasos = 0
Pantalla_arriba = 0
Stop_cinco = 0
