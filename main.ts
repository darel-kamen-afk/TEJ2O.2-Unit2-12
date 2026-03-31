/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on:March 2026
 * This program will make an if... then statement 
*/

let distanceToObject = 0
let neopixelStrip: neopixel.Strip = null


//
neopixelStrip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)


input.onButtonPressed(Button.A, function () {
    basic.clearScreen()


    //
    distanceToObject = randint(1, 100)
    basic.showNumber(distanceToObject)


    //
    if (distanceToObject > 10) {
        //
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        //
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showIcon(IconNames.No)
    }


    //
    neopixelStrip.show()
    basic.pause(2000)


    // 4. turn all lights off (Black) and show Happy face
    neopixelStrip.clear()
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
