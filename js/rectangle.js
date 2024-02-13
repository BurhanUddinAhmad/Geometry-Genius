function calcRectArea() {
    // get rectangle width 
    const rectWidth = document.getElementById('rect-width');
    const rectWidthValue = rectWidth.value;
    const width = parseFloat(rectWidthValue);
    
    // get rectangle height 
    const rectHeight = document.getElementById('rect-length');
    const rectHeightValue = rectHeight.value;
    const length = parseFloat(rectHeightValue);

    // Calculation of Rectangle
    const rectArea = width * length;

    // Displaying the Rectangle Value
    const rectAreaDisplay = document.getElementById('rect-area');
    rectAreaDisplay.innerText = rectArea;
}