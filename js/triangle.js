/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 * 
 **/

function calculateTriangleArea(){
    // get triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue);
    // console.log(base);

    // get triangle height value 
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeight.value;
    const height = parseFloat(triangleHeightValue);
    // console.log(height);

    // calculate the triangle area 
    const area = 0.5 * base * height;
    // console.log("Area of the Triangle is: ", area);

    // Displaying the Triangle Area 
    const triangleAreaDisplay = document.getElementById('triangle-area');
    triangleAreaDisplay.innerText = area;
}
