/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on:March 2026
 * This program will make a statement ìf
*/

let distance: number = 0
let neopixelStrip: neopixel.Strip = null

// 
neopixelStrip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {
    //
    distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    // 
    if (distance < 10) {
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        neopixelStrip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})