//https://www.hackerrank.com/challenges/js10-inheritance/problem

Rectangle.prototype.area = function () {
    return (this.w * this.h);
}

class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.w = s;
        this.h = s;
    }
}