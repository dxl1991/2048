const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
window.space = screenWidth / 46;
window.rectLength = space * 9;

export default class Sprite {
  constructor(ctx,index) {
    this.index = index
    this.num = 0
    this.x = 19 + space + (index % 4) * (space + rectLength)
    this.y = 200 + space + (Math.floor(index / 4)) * (space + rectLength)
    // this.update(ctx)
  }

  update(ctx){
    this.setColor(ctx)
    ctx.fillRect(this.x, this.y, rectLength, rectLength)
    if(this.num > 0){
      var image = wx.createImage()
      image.src = "images/"+this.num+".png"
      ctx.drawImage(image, this.x, this.y, rectLength, rectLength)
    }
  }

  // update(ctx){
  //   this.setColor(ctx)
  //   ctx.fillRect(this.x, this.y, rectLength, rectLength)
  //   ctx.font = "bold 40px Arial"
  //   ctx.fillStyle = '#696969'
  //   if(this.num > 0){
  //     var tempx = this.x + rectLength / 3
  //     if(this.num > 10){
  //       tempx = this.x + rectLength / 5
  //     }
  //     if (this.num > 100) {
  //       tempx = this.x + rectLength / 10
  //       ctx.font = "bold 35px Arial"
  //     }
  //     if (this.num > 1000) {
  //       tempx = this.x
  //       ctx.font = "bold 30px Arial"
  //     }
      
  //     ctx.fillText(
  //       this.num,
  //       tempx,
  //       this.y + rectLength / 2 + 15
  //     )
  //   }
  // }

  setColor(ctx){
    // if (this.num == 0) {
    //   ctx.fillStyle = '#D2B48C'
    //   return
    // }
    // if (this.num == 2) {
    //   ctx.fillStyle = '#EEDFCC'
    //   return
    // }
    // if (this.num == 4) {
    //   ctx.fillStyle = '#F5F5DC'
    //   return
    // }
    // if (this.num == 8) {
    //   ctx.fillStyle = '#EEC591'
    //   return
    // }
    // if (this.num == 16) {
    //   ctx.fillStyle = '#EEC591'
    //   return
    // }
    // if (this.num == 32) {
    //   ctx.fillStyle = '#EE9A00'
    //   return
    // }
    // if (this.num == 64) {
    //   ctx.fillStyle = '#FF4500'
    //   return
    // }
    ctx.fillStyle = '#D2B48C'
  }
}