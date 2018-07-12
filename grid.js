const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const space = screenWidth / 21;
const rectLength = space * 4;

export default class Sprite {
  constructor(ctx,index) {
    this.index = index
    this.num = index
    this.x = space + (index % 4) * (space + rectLength)
    this.y = 150 + space + (Math.floor(index / 4)) * (space + rectLength)
    this.update(ctx)
  }

  update(ctx){
    ctx.fillStyle = 'yellow'
    ctx.fillRect(this.x, this.y, rectLength, rectLength)
    if(this.num > 0){
      ctx.fillStyle = 'blue'
      ctx.fillText(
        this.num,
        this.x + rectLength / 3,
        this.y + rectLength / 2
      )
    }
  }
}