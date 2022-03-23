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
