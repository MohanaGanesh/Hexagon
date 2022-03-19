const filters = {
    brightness: new fabric.Image.filters.Brightness(),
    saturation: new fabric.Image.filters.Saturation(),
    contrast: new fabric.Image.filters.Contrast(),
    hue: new fabric.Image.filters.HueRotation()
  }
  
  // - Brightness
  // Attach the filter to the image
var image = canvas.getActiveObject();

  image.filters.push(filters.brightness);
  const brightnessInput = document.querySelector("#brightness");
  brightnessInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(brightnessInput.value);
    // Edit the filter value
    filters.brightness.brightness = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // - Saturation
  // Attach the filter to the image
  image.filters.push(filters.saturation);
  const saturationInput = document.querySelector("#saturation");
  saturationInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(saturationInput.value);
    // Edit the filter value
    filters.saturation.saturation = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }

  // - Contrast
  // Attach the filter to the image
  image.filters.push(filters.contrast);
  const contrastInput = document.querySelector("#contrast");
  contrastInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(contrastInput.value);
    // Edit the filter value
    filters.contrast.contrast = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }
  
  // - Hue
  // Attach the filter to the image
  image.filters.push(filters.hue);
  const hueInput = document.querySelector("#hue");
  hueInput.oninput = () => {
    image = canvas.getActiveObject();
    const value = parseFloat(hueInput.value);
    // Edit the filter value
    filters.hue.rotation = value;
    // Apply the changes
    image.applyFilters();
    // Display the result 
    canvas.renderAll();
  }
