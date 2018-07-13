import 'weapp-adapter'
import grid from 'grid'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
// var canvas = wx.createCanvas()
// console.log(canvas.width,canvas.height)
var colorIndex = 0
var color = new Array("#0F0", "#0F2", "#0F4", "#0F6", "#0F8", "#0FA", "#0FC", "#0FE", "#0FF", "#0FE", "#0FC", "#0FA", "#0F8", "#0F6", "#0F4", "#0F2")
let context = canvas.getContext('2d')
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

  let x = e.changedTouches[0].clientX
  let y = e.changedTouches[0].clientY
  var spaceX = x - startX
  var spaceY = y - startY
  var direction = "无效"
  if (Math.abs(spaceX) <= 20 && Math.abs(spaceY) <= 20){
     return
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
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawBg()
  calculate(direction)
  randomNum()
  for (var i = 0; i < grids.length; i++) {
    for(var j=0;j<grids[i].length;j++){
        grids[i][j].update(context)
    }
  }
  // context.fillStyle = color[colorIndex++]
  // context.fillText(
  //   direction,
  //   x,
  //   y
  // )

}
wx.onTouchEnd(touchEndEventHandler)
var grids = [[new grid(context, 0), new grid(context, 1), new grid(context, 2), new grid(context, 3)],
  [new grid(context, 4), new grid(context, 5), new grid(context, 6), new grid(context, 7)],
  [new grid(context, 8), new grid(context, 9), new grid(context, 10), new grid(context, 11)],
  [new grid(context, 12), new grid(context, 13), new grid(context, 14), new grid(context, 15)]]
initGrid()

function initGrid(){
  drawBg()
  randomNum()
  randomNum()
  for (var i = 0; i < grids.length; i++) {
    for (var j = 0; j < grids[i].length; j++) {
      grids[i][j].update(context)
    }
  }
}

function calculate(direction){
  if(direction == "上"){
    for (var i = 1; i < grids.length; i++) {
      for (var j = 0; j < grids[i].length; j++) {
        if (grids[i][j].num == 0){
           continue
        }
        for(var m = i - 1;m >= 0; m--){
          if (grids[i][j].num == grids[m][j].num){
            grids[m][j].num = grids[m][j].num * 2
            grids[i][j].num = 0
          }else{
            if (grids[m][j].num != 0){
               break
            }
            if (m == 0 || (grids[m - 1][j].num != 0 && grids[m - 1][j].num != grids[i][j].num)){
              grids[m][j].num = grids[i][j].num
              grids[i][j].num = 0
            }
          }
        }
      }
    }
  }
  if (direction == "左") {
    for (var i = 0; i < grids.length; i++) {
      for (var j = 1; j < grids[i].length; j++) {
        if (grids[i][j].num == 0) {
          continue
        }
        for (var m = j - 1; m >= 0; m--) {
          if (grids[i][j].num == grids[i][m].num) {
            grids[i][m].num = grids[i][m].num * 2
            grids[i][j].num = 0
          } else {
            if (grids[i][m].num != 0) {
              break
            }
            if (m == 0 || (grids[i][m-1].num != 0 && grids[i][m-1].num != grids[i][j].num)) {
              grids[i][m].num = grids[i][j].num
              grids[i][j].num = 0
            }
          }
        }
      }
    }
  }
  if (direction == "下") {
    for (var i = grids.length - 2; i >= 0; i--) {
      for (var j = 0; j < grids[i].length; j++) {
        if (grids[i][j].num == 0) {
          continue
        }
        for (var m = i + 1; m < grids.length; m++) {
          if (grids[i][j].num == grids[m][j].num) {
            grids[m][j].num = grids[m][j].num * 2
            grids[i][j].num = 0
          } else {
            if (grids[m][j].num != 0) {
              break
            }
            if (m == grids.length - 1 || (grids[m + 1][j].num != 0 && grids[m + 1][j].num != grids[i][j].num)) {
              grids[m][j].num = grids[i][j].num
              grids[i][j].num = 0
            }
          }
        }
      }
    }
  }
  if (direction == "右") {
    for (var i = grids.length - 1; i >= 0; i--) {
      for (var j = grids[i].length - 2; j >= 0; j--) {
        if (grids[i][j].num == 0) {
          continue
        }
        for (var m = j + 1; m < grids[i].length; m++) {
          if (grids[i][j].num == grids[i][m].num) {
            grids[i][m].num = grids[i][m].num * 2
            grids[i][j].num = 0
          } else {
            if (grids[i][m].num != 0) {
              break
            }
            if (m == grids[i].length - 1 || (grids[i][m + 1].num != 0 && grids[i][m + 1].num != grids[i][j].num)) {
              grids[i][m].num = grids[i][j].num
              grids[i][j].num = 0
            }
          }
        }
      }
    }
  }
}

function randomNum(){
  var temp = new Array()
  var index = 0
  for (var i = 0; i < grids.length; i++) {
    for (var j = 0; j < grids[i].length; j++) {
      if (grids[i][j].num == 0) {
        temp[index++] = grids[i][j]
      }
    }
  }
  if (temp.length > 0) {
    var i = Math.floor(Math.random() * temp.length);
    temp[i].num = 2
  }
}

function drawBg() {
context.fillStyle = '#DAA520'
context.fillRect(0, 0, screenWidth, screenHeight)
}

