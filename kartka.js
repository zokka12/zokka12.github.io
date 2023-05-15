import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("scena","kartka.png")
loadSprite("balwan","balwan.png")
loadSound("muzyka","pasterze.mp3")

add([
    sprite("scena"),
    pos(0,0)
])


const balwan = add([
    sprite("balwan"),
    pos(0,210)
])

let wprawo = true


balwan.onUpdate(() => {
    if(wprawo && balwan.pos.x < 390)
        balwan.pos.x += 1
    
    else if(!wprawo && balwan.pos.x > 170)
        balwan.pos.x -= 1

else wprawo ^= true

})

onMouseRelease(()=> play("muzyka"))