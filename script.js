//complete this code
class Rectangle {
	width
	height
	constructor(width,height){
		this.width = width
		this.height = height
	}
	get width(){
		return width;
	}
	get height(){
		return height;
	}
	getArea(){
		return width*height;
	}
}

class Square extends Rectangle {

	constructor(side){
	  super(side,side)
	}
	getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
