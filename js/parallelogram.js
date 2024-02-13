function calcParaArea() {
    // get base value 
    const paraBaseInput = document.getElementById('para-base');
    const paraBaseValue = paraBaseInput.value;
    const paraBase = parseFloat(paraBaseValue);

    // get heigth value 
    const paraHeightInput = document.getElementById('para-height');
    const paraHeightValue = paraHeightInput.value;
    const paraHeight = parseFloat(paraHeightValue);

    // Calculation 
    const paraArea = paraBase * paraHeight;

    // Display the value 
    const paraAreaDisplay = document.getElementById('para-area-display');
    paraAreaDisplay.innerText = paraArea;
}