/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on:March 2026
 * This program will make an if... then statement 
*/

input.onButtonPressed(Button.A, function () {
    let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)

    input.onButtonPressed(Button.A, function () {
       
        let distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

        if (distance < 10 && distance > 0) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }

        strip.show()
    })

    input.onButtonPressed(Button.B, function () {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
    })})