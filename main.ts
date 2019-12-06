enum SpriteKindLegacy {
    Player,
    Food,
    Enemy,
    Projectile
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
})
let mySprite2: Sprite = null
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
// when turned on, player cannot move to this color.
// there is a color texture to add to the orange
scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 e e e e e 
4 4 e 4 4 4 4 4 4 4 4 e 4 4 4 e 
4 4 e 4 4 4 4 4 4 4 4 e 4 4 4 e 
4 4 4 4 e e 4 4 4 4 4 e e 4 4 e 
4 4 4 4 4 4 4 e e 4 4 4 e 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 e e e 4 4 4 4 4 4 4 e 
4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 
4 4 4 4 4 4 4 e e 4 4 4 e 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e 4 4 4 4 4 4 4 4 4 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 7 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 5 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 5 5 7 7 7 7 7 7 7 7 5 5 7 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 
8 8 8 8 8 6 8 8 6 6 6 6 6 8 8 8 
6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 
6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 6 8 8 8 8 8 8 8 6 6 8 8 8 8 
8 8 8 8 8 8 8 8 6 8 6 6 6 8 8 8 
8 8 8 6 6 8 8 6 8 8 6 6 8 6 8 8 
8 8 8 6 8 8 8 6 8 8 8 6 6 8 8 8 
8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 8 
8 8 8 6 6 6 6 6 6 6 8 6 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 
8 8 8 8 8 6 6 6 6 6 6 6 6 8 8 8 
8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(10, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a 5 5 5 5 a a a a a 5 5 a a a a 
a 5 a a a a a a a a a a 5 a a a 
a 5 a a a a a a a a a a 5 a a a 
a a a a a a a a a a a a 5 a a a 
a a a a a a a a a a a 5 5 a a a 
a a a a 5 5 5 a a a 5 a a a a a 
a 5 5 5 5 a a a a a a a a a a a 
a 5 a a a a a a a a a a a a a a 
5 a a a a a a 5 a a a a a a a a 
5 a a a a a a a 5 5 a a a 5 5 a 
5 a a 5 a a a a a a 5 5 5 5 a a 
a a a a 5 a a a a a a a a a a a 
a a a a a 5 5 5 a a a a a a a a 
a a a a a a a a a a a a a a a a 
`, true)
let mySprite = sprites.create(img`
. . . . . f f 1 1 1 f . . . . . 
. . . . f 1 1 1 1 1 1 1 . . . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . 
. . f 1 1 1 1 1 1 1 1 1 1 f . . 
. f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
. f 1 1 f f 1 1 1 1 f f 1 1 f . 
. f 1 1 f 1 f 1 1 f 1 f 1 1 f . 
. f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
f f 1 1 f 1 1 1 1 1 1 f 1 1 f f 
f 1 1 1 f f 1 1 1 1 f f f 1 1 f 
. f 1 1 f 1 1 1 1 1 1 f 1 1 f . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 f 1 1 1 1 1 1 1 1 f 1 . . 
. . . f f 1 1 1 1 1 1 f f . . . 
. . . . . f f 1 1 f f . . . . . 
`, SpriteKindLegacy.Player)
// controls the sprite
controller.moveSprite(mySprite)
// camera follows sprite throughout game
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 1; index++) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . f d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f b b f f . . . . . . . . . . . . f f f 
. . . . f f f f f f f f f f f f f f . . . . . . . . . f f b b f 
. . f f 1 1 1 1 b b b b b b b b b f f f f . . . . . f d b b f f 
f f 1 1 1 1 1 1 b b b f b f b b b b c c c f f . . f d d b b f . 
f 1 1 1 1 1 1 1 f f b b f b f b b b c c c c c f f f d b b f . . 
f 1 1 1 1 1 1 1 f f 1 b f b f b b b c c c c c c c b b b f f . . 
. f 1 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b f f f . . 
. . f 1 1 1 1 1 c c 1 1 b b b b c c c c c c c c f f f b b f f . 
. . . f 1 1 1 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 1 1 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    mySprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
}
info.startCountdown(10)
