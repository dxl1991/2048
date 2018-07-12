import grid from 'grid'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
var canvas = wx.createCanvas()
console.log(canvas.width,canvas.height)
var colorIndex = 0
var color = new Array("#0F0", "#0F2", "#0F4", "#0F6", "#0F8", "#0FA", "#0FC", "#0FE", "#0FF", "#0FE", "#0FC", "#0FA", "#0F8", "#0F6", "#0F4", "#0F2");
let context = canvas.getContext('2d')
context.fillStyle = 'red'
context.fillRect(0, 0, 100, 100)
context.fillStyle = 'white'
context.fillRect(20, 20, 60, 60)
var startX = 0
var startY = 0

// var image = wx.createImage()
// image.src = "images/exp1.png"
// image.onload = function(){
//   console.log(image.width, image.height)
//   context.drawImage(image, 0, 0, screenWidth, screenHeight)
// }
context.fillStyle = 'yellow'
context.font = "20px Arial"
context.fillText(
  '2048',
  screenWidth / 2 - 40,
  50
)
function touchEventHandler(e) {
  // console.log("点击")
  // console.log(e)
  startX = e.touches[0].clientX
  startY = e.touches[0].clientY
}
wx.onTouchStart(touchEventHandler)
// wx.onTouchMove(touchEventHandler)
// var touchHandler = touchEventHandler.bind(this)
// canvas.addEventListener('touchstart', touchHandler)

function touchEndEventHandler(e) {
  // console.log("点击结束")
  // console.log(e)

  context.clearRect(0, 0, canvas.width, canvas.height)

  let x = e.changedTouches[0].clientX
  let y = e.changedTouches[0].clientY
  var spaceX = x - startX
  var spaceY = y - startY
  var direction = "无效"
  if (Math.abs(spaceX) <= 20 && Math.abs(spaceY) <= 20){
     
  }else{
    if (Math.abs(spaceX) > Math.abs(spaceY)) {
      if (spaceX > 0) {
        direction = "右"
      } else {
        direction = "左"
      }
    } else {
      if (spaceY > 0) {
        direction = "下"
      } else {
        direction = "上"
      }
    }
  }
  for (var i = 0; i < grids.length; i++) {
    for(var j=0;j<grids[i].length;j++){
        grids[i][j].update(context)
    }
  }
  context.fillStyle = color[colorIndex++]
  context.fillText(
    direction,
    x,
    y
  )

}
wx.onTouchEnd(touchEndEventHandler)
var grids = [[new grid(context, 0), new grid(context, 1), new grid(context, 2), new grid(context, 3)],
  [new grid(context, 4), new grid(context, 5), new grid(context, 6), new grid(context, 7)],
  [new grid(context, 8), new grid(context, 9), new grid(context, 10), new grid(context, 11)],
  [new grid(context, 12), new grid(context, 13), new grid(context, 14), new grid(context, 15)]]


function update(direction){
  Math.floor(Math.random() * (15 - 0 + 1) + 0);
}

