// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

export function Position(x=0,y=0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function (newX,newY) {
  this.x = newX
  this.y = newY
}


export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.max(1, Math.min(newSize.width, maxWidth));
    this.size.height = Math.max(1, Math.min(newSize.height, maxHeight));
  }

  move(newPosition) {
                        // 800-80 === 720
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
                        // 600-60 === 540
                       //0,50 == 50 is max         // 50,720=== min is 50
    this.position.x = Math.max(0, Math.min(newPosition.x, maxX));
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
                                                  //100,540 == min is 100
  }
}

// export function changeWindow(programWindow) {
//   const newSize = new Size(400, 300)
//   const newPosition = new Position(100, 150)

//   programWindow.resize(newSize)
//   programWindow.move(newPosition)

//   return programWindow
// }

export const changeWindow = (window) => {
  window.resize(new Size(400, 300))
  window.move(new Position(100, 150))
  return window
}













