// filters = {
//     brightness: new fabric.Image.filters.Brightness(),
//     saturation: new fabric.Image.filters.Saturation(),
//     contrast: new fabric.Image.filters.Contrast(),
//     hue: new fabric.Image.filters.HueRotation(),
//     blur: new fabric.Image.filters.Blur(),
//   }
  
  // - Brightness
  // Attach the filter to the image
// var image = canvas.getActiveObject();
var image;

  // image.filters.push(filters.brightness);
  const brightnessInput = document.querySelector("#brightness");
  brightnessInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(brightnessInput.value);
    // Edit the filter value
    // filters.brightness.brightness = value;
    image.filters[0].brightness = value;
    // Apply the changes
    image.applyFilters();
    // Display the result
    canvas.renderAll();
    // save();
  }

  // - Saturation
  // Attach the filter to the image
  // image.filters.push(filters.saturation);
  const saturationInput = document.querySelector("#saturation");
  saturationInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(saturationInput.value);
    // Edit the filter value
    image.filters[1].saturation = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // - Contrast
  // Attach the filter to the image
  // image.filters.push(filters.contrast);
  const contrastInput = document.querySelector("#contrast");
  contrastInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(contrastInput.value);
    // Edit the filter value
    image.filters[2].contrast = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }
  
  // - Hue
  // Attach the filter to the image
  // image.filters.push(filters.hue);
  const hueInput = document.querySelector("#hue");
  hueInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(hueInput.value);
    // Edit the filter value
    image.filters[3].rotation = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // - Blur
  // Attach the filter to the image
  // image.filters.push(filters.blur);
  const blurInput = document.querySelector("#blur");
  blurInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(blurInput.value);
    // Edit the filter value
    image.filters[4].blur = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // - Gamma Red
  // Attach the filter to the image
  const gammaRedInput = document.querySelector("#gammaRed");
  gammaRedInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(gammaRedInput.value);
    // Edit the filter value
    image.filters[5].gamma = [value, image.filters[5].gamma[1], image.filters[5].gamma[2]];
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // - Gamma Green
  // Attach the filter to the image
  const gammaGreenInput = document.querySelector("#gammaGreen");
  gammaGreenInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(gammaGreenInput.value);
    // Edit the filter value
    image.filters[5].gamma = [image.filters[5].gamma[0], value, image.filters[5].gamma[2]];
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // - Gamma Blue
  // Attach the filter to the image
  const gammaBlueInput = document.querySelector("#gammaBlue");
  gammaBlueInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(gammaBlueInput.value);
    // Edit the filter value
    image.filters[5].gamma = [image.filters[5].gamma[0], image.filters[5].gamma[1], value];
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // // - Grayscale
  // // Attach the filter to the image
  // const grayscaleInput = document.querySelector("#grayscale");
  // grayscaleInput.oninput = () => {
  //   image = canvas.getActiveObject();
  //   const value = parseFloat(grayscaleInput.value);
  //   // Edit the filter value
  //   if(value == 3)
  //     image.filters[6].mode = "lightness";
  //   else if(value == 2)
  //     image.filters[6].mode = "average";
  //   else if(value == 1)
  //     image.filters[6].mode = "luminosity";
  //   // Apply the changes
  //   image.applyFilters();
  //   // Display the result 
  //   canvas.renderAll();
  // }

  // const invertInput = document.querySelector("#invert");
  // invertInput.oninput = () => {
  //   image = canvas.getActiveObject();
  //   const value = parseFloat(invertInput.value);
  //   // Edit the filter value
  //   if(value == 1)
  //     image.filters[6].invert = true;
  //   else if(value == 0)
  //     image.filters[6].invert = false;
  //   // Apply the changes
  //   image.applyFilters();
  //   // Display the result 
  //   canvas.renderAll();
  // }

  // const remColor = document.querySelector("#removeColor");
  // const remThres = document.querySelector("#removeThreshold");
  // function removeBackground() {
  //   image = canvas.getActiveObject();
  //   const value1 = parseFloat(remColor.value);
  //   const value2 = parseFloat(remThres.value);
  //   image.filters[6].color = [ 50, 50,50];
  //   image.filters[6].distance = value2;
  //   image.applyFilters();
  //   canvas.renderAll();
  // }

  // Adding Shapes
  // Add Rectangle
  const rectColor = document.querySelector("#rectangleColor");
  function addRectangle() {
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: rectColor.value,
      width: 100,
      height: 100,
      angle: 0,
      transparentCorners: false,
      hasRotatingPoint: true
    });
    canvas.add(rect);
  }

  // Add Circle
  const circleColor = document.querySelector("#circleColor");
  function addCircle() {
    var circle = new fabric.Circle({
      left: 100,
      top: 100,
      fill: circleColor.value,
      radius: 50,
      transparentCorners: false,
      hasRotatingPoint: true
    });
    canvas.add(circle);
  }

  // Add Triangle
  const triangleColor = document.querySelector("#triangleColor");
  function addTriangle() {
    var triangle = new fabric.Triangle({
      left: 100,
      top: 100,
      fill: triangleColor.value,
      width: 100,
      height: 100,
      transparentCorners: false,
      hasRotatingPoint: true
    });
    canvas.add(triangle);
  }

  // Add Text
  const textColor = document.querySelector("#textColor");
  const textSize = document.querySelector("#textSize");
  function addText() {
    // var text = new fabric.Text('Enter your Text', {
    //   left: 100,
    //   top: 100,
    //   fill: textColor.value,
    //   fontSize: 20,
    //   transparentCorners: false,
    //   hasRotatingPoint: true,
    //   hasControls: true
    // });
    //Create a new Textbox instance 
    var text = new fabric.Textbox(
      'Enter Text Here', {
      width: 20,
      height: 5,
      hasControls: true,
      fontSize: 50,
      fill: textColor.value,
  });

    canvas.add(text);
    canvas.centerObject(text);
  }

  //Updating Text

  textColor.oninput = () => {
    text = canvas.getActiveObject();
    text.fill = textColor.value;
    canvas.renderAll();
  }

  textSize.oninput = () => {
    text = canvas.getActiveObject();
    text.fontSize = textSize.value;
    canvas.renderAll();
  }

  // Updating Canvas
  var can = document.getElementById('canvas');
  
  const canWidth = document.querySelector("#canvasWidth");
  canWidth.oninput = () => {
    canvas.setWidth(canWidth.value);
    canvas.renderAll();
  }

  const canHeight = document.querySelector("#canvasHeight");
  canHeight.oninput = () => {
    canvas.setHeight(canHeight.value);
    canvas.renderAll();
  }
  
