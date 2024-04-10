function IRreading () {
    if (CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.WhiteLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.WhiteLine)) {
        IRstate = 11
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.WhiteLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.BlackLine)) {
        IRstate = 10
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.BlackLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.WhiteLine)) {
        IRstate = 1
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else {
        IRstate = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
}
function wheelAction (state: number) {
	
}
let IRstate = 0
IRstate = 0
basic.forever(function () {
    if (0 == 0) {
        CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 30)
        basic.pause(200)
    } else if ((0 as any) == (1 as any)) {
        CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.TurnLeft, 30)
    } else if ((0 as any) == (10 as any)) {
        CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.TurnRight, 30)
    } else {
        for (let index = 0; index < 5; index++) {
            CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.SpinLeft, 20)
            IRreading()
            if ((0 as any) != (11 as any)) {
                break;
            }
        }
        for (let index = 0; index < 10; index++) {
            CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.SpinRight, 20)
            IRreading()
            if ((0 as any) != (11 as any)) {
                break;
            }
        }
    }
})
