//https://www.hackerrank.com/challenges/js10-template-literals/problem

function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    let aux = Math.sqrt(perimeter * perimeter - (16 * area));
    let s1 = (perimeter + aux) / 4;
    let s2 = (perimeter - aux) / 4;
    let arr = [s2, s1];
    return arr;
}