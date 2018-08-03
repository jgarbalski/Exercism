var Triangle = function(a,b,c) { this.triangle = [a,b,c].sort() }

Triangle.prototype.kind = function() {

    var a = this.triangle[0];
    var b = this.triangle[1];
    var c = this.triangle[2];

    if (a < 0)
    throw "is not a triangle";
    if (a+b < c)
    throw "not a valid triangle";
    if (a*b*c == 0)
    throw "triangle cannot have 0 area";

    if (a == b && b == c)
    return "equilateral";
    if (a == b || b == c)
    return "isosceles";
    else return "scalene";


};
module.exports = Triangle;
