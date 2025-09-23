basic.showString("FDMH 2025")
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.showIcon(IconNames.Sad)
})
