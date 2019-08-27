//https://www.hackerrank.com/challenges/js10-count-objects/problem

function getCount(objects) {
    let cant = 0;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            cant++;
        }
    }
    return cant;
}