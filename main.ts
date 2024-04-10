basic.forever(function () {
    if (CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.BlackLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.BlackLine)) {
        CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 60)
        CUHK_JC_iCar.setHeadColor(0x00ff00)
    } else if (CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.BlackLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.WhiteLine)) {
        CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.SpinLeft, 60)
        CUHK_JC_iCar.setHeadColor(0xff0000)
    } else if (CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.WhiteLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.BlackLine)) {
        CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.SpinRight, 60)
        CUHK_JC_iCar.setHeadColor(0x0000ff)
    } else {
        for (let index = 0; index < 20; index++) {
            CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.SpinLeft, 80)
            CUHK_JC_iCar.setHeadColor(0xff0000)
            basic.pause(50)
            if (!(CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.WhiteLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.WhiteLine))) {
                break;
            }
        }
        for (let index = 0; index < 40; index++) {
            CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.SpinRight, 60)
            CUHK_JC_iCar.setHeadColor(0x0000ff)
            basic.pause(50)
            if (!(CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Left, CUHK_JC_iCar.enLineState.WhiteLine) && CUHK_JC_iCar.Line_Sensor(CUHK_JC_iCar.enPos.Right, CUHK_JC_iCar.enLineState.WhiteLine))) {
                break;
            }
        }
    }
})
