const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const space = screenWidth / 46;
const rectLength = space * 9;

export default class Sprite {
  constructor(ctx,index) {
    this.index = index
    this.num = 0
    this.x = 19 + space + (index % 4) * (space + rectLength)
    this.y = 200 + space + (Math.floor(index / 4)) * (space + rectLength)
    // this.update(ctx)
  }

  update(ctx){
    ctx.fillStyle = 'yellow'
    ctx.fillRect(this.x, this.y, rectLength, rectLength)
    if(this.num > 0){
      ctx.font = "bold 40px Arial"
      ctx.fillStyle = '#696969'
      ctx.fillText(
        this.num,
        this.x + rectLength / 3,
        this.y + rectLength / 2 + 10
      )
    }
  }
}