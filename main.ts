let steps = 0
basic.showNumber(steps)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        steps += 1
        basic.showNumber(steps)
    }
})
