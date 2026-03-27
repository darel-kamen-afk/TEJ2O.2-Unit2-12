/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on:March 2026
 * This program will make an if... then statement 
*/

let distance: number = 0
const Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

basic.clearScreen()
basic.showIcon (IconNames.Happy)

input.onButtonPressed(Button.A, function () {
 //measuring the distance...
 basic.clearScreen()
 distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
    
    basic.showNumber(distance)

    if (distance < 10) {
        basic.showString('< 10 cm')
        Strip.showColor(neopixel.colors(NeoPixelColors.Red))
        Strip.show()
    } else {
        //green if 10cm or further 
        basic.showString('>= 10 cm')
        Strip.showColor(neopixel.colors(NeoPixelColors.Green))
        Strip.show()
      }
    })

    input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showIcon(IconNames. Happy)
Strip.showColor(neopixel.colors(NeoPixelColors.Black))
Strip.show()
})
