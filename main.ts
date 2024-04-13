let _4digit: grove.TM1637 = null
basic.forever(function () {
    _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
    _4digit.show(input.soundLevel())
    if (input.soundLevel() <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (input.soundLevel() <= 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (input.soundLevel() <= 60) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (input.soundLevel() <= 80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.soundLevel() <= 100) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    control.waitMicros(6000)
})
