function calculateTriangleArea(){

// get triangle base value

const baseField = document.getElementById("triangle-base");
const baseValueText = baseField.value;
const base = parseFloat(baseValueText);


const heightField = document.getElementById("triangle-height");
const heightValueText = heightField.value;
const height = parseFloat(heightValueText);


const area = 0.5*base*height;
console.log(area);


// show trianglearea


const areaSpan = document.getElementById("triangle-area");
areaSpan.innerText = area;







    
}


function calculateRectangleArea(){


    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText  = lengthField.value;
    const length = parseFloat(lengthValueText);
    
    const widthField = document.getElementById("rectangle-width");
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);


    const areaRect = length*width;

    const areaRectSpan = document.getElementById("rectangle-area");
    areaRectSpan.innerText = areaRect;
    


}


function calculateParallelogramArea(){



    const base2Field = document.getElementById("parallelogram-base");
    const parallelogramBaseValueText = base2Field.value;
    const base2 = parseFloat(parallelogramBaseValueText) ;
    
    
    const height2Field = document.getElementById("parallelogram-height");
    const parallelogramHeightValueText = height2Field.value;
    const height2 = parseFloat(parallelogramHeightValueText);
    


    const areaPara = base2*height2;


    const areaParaSpan = document.getElementById("parallelogram-area");
    areaParaSpan.innerText = areaPara;


}