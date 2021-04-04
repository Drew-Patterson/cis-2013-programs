var $ = function (id) 
{
    return document.getElementById(id);
};

var calcRectArea = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectArea = floatRectWidth_par * floatRectHeight_par;
    return floatRectArea.toFixed(2);
}

var calcRectPerim = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert("The rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(floatRectWidth_par, floatRectHeight_par)
{
    var floatRectPerim = 2 * floatRectWidth_par + 2 * floatRectHeight_par;
    return floatRectPerim.toFixed(2);
}

var calcTriangleArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    alert("The triangle area is " + triangleArea(floatTriSide1, floatTriSide2, floatTriSide3));
};

function triangleArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatS = (floatTriSide1_par + floatTriSide2_par + floatTriSide3_par)/2;
    var floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1_par)*(floatS-floatTriSide2_par)*(floatS-floatTriSide3_par)));
    return floatTriangleArea.toFixed(2);
}

var calcTrianglePerim = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    alert("The triangle perimeter is " + trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function trianglePerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatTrianglePerim = floatTriSide1_par + floatTriSide2_par + floatTriSide3_par;
    return floatTrianglePerim.toFixed(2);
}

var calcCircleArea = function()
{
    var floatRadius = parseFloat($("radius").value);
    alert("The circle area is " + circleArea(floatRadius));
};

function circleArea(floatRadius_par)
{
    var floatCircleArea = Math.PI * Math.pow(floatRadius_par, 2);
    return floatCircleArea.toFixed(2);
}

var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);
	alert ("The circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircleCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircleCircum.toFixed(2);
}

var do_it = function () 
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);             
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);         
    var floatTriSide3 = parseFloat($("tri_side3").value);
    var floatRadius = parseFloat($("radius").value);
    
    alert("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight) + " and the perimeter is " + rectPerim(floatRectWidth, floatRectHeight) + "\n\n" +
          "The Triangle area is " + triangleArea(floatTriSide1, floatTriSide2, floatTriSide3) + " and the perimeter is " + trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3) + "\n\n" +
          "The Circle area is " + circleArea(floatRadius) + " and the circumference is " + circleCircum(floatRadius));
};

window.onload = function () 
{
    $("rect_width").value = "";
    $("rect_height").value = "";
    $("tri_side1").value = "";
    $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    $("rect_width").focus();
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
    $("calc_tri_area").onclick = calcTriangleArea;
    $("calc_tri_perim").onclick = calcTrianglePerim;
    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_circle_circum").onclick = calcCircleCircum;
    $("calc_all").onclick = do_it;
    
};