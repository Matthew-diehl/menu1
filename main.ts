scene.screenWidth
scene.setBackgroundImage(assets.image`menu`)
let level = 0

let position = 0

let arrow = sprites.create(assets.image`Arrow`,SpriteKind.Player)
arrow.setPosition(80, 65)

timer.background(function(){
    while(true){
        arrow.setFlag(SpriteFlag.Invisible, false)
        pause(300)
        arrow.setFlag(SpriteFlag.Invisible, true)
        pause(300)
    }
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function(){
    if(position == 0) {
        arrow.setPosition(78, 95)
        position = 1
    }
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (position == 1) {
        arrow.setPosition(80, 65)
        position = 0
    }
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (position == 1) {
        arrow.setPosition(5, 95)
        position = 2
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (position == 2) {
        arrow.setPosition(78, 95)
        position = 1
    }
})