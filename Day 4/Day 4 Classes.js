//https://www.hackerrank.com/challenges/js10-class/problem 

class Polygon {
    constructor(heights) {
        var perimeter = 0;
        for (let i = 0; i < heights.length; i++) {
            perimeter += heights[i];
        }

        this.res = perimeter;
    }

    perimeter() {
        return this.res;
    }
}