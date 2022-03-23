console.log(testing);
console.log("hello");

var canvas = new fabric.Canvas('canvas');

let currentImage;

addImage(canvas);
addImage(canvas);
createMaskForCrop(canvas);
crop(canvas);
hideItems();

canvas.preserveObjectStacking = true;

canvas.set('backgroundColor', 'transparent').requestRenderAll();

//Function to add user uploaded image
document.getElementById('file').addEventListener("change", function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
        var data = f.target.result;
        fabric.Image.fromURL(data, function (img) {
            var oImg = img.set({left: 50, top: 100, angle: 00}).scale(0.9);
            currentImage = oImg;
            oImg.filters.push(filters.brightness);
            oImg.filters.push(filters.saturation);
            oImg.filters.push(filters.contrast);
            oImg.filters.push(filters.hue);
            oImg.filters.push(filters.blur);
            canvas.add(oImg).renderAll();
        //     var a = canvas.setActiveObject(oImg);
        //     var dataURL = canvas.toDataURL({ format: 'jpeg', quality: 0.8 });
        // console.log("Canvas Image " + dataURL);
        // document.getElementById('txt').href=dataURL;
        });
    };
    reader.readAsDataURL(file);
});

function addImage(canvas) {
    var dogImg = new Image();
    dogImg.crossOrigin = "anonymous";
    // dogImg.setAttribute('crossOrigin', 'anonymous');
    dogImg.src = "https://neilpatel.com/wp-content/uploads/2017/08/url.jpg";
    dogImg.onload = function () {
        var img = new fabric.Image(dogImg);
        img.filters.push(new fabric.Image.filters.Brightness());
        img.filters.push(new fabric.Image.filters.Saturation());
        img.filters.push(new fabric.Image.filters.Contrast());
        img.filters.push(new fabric.Image.filters.HueRotation());
        img.filters.push(new fabric.Image.filters.Blur());
        canvas.add(img);
        canvas.centerObject(img);
        canvas.setActiveObject(img);
        currentImage = img;
        canvas.renderAll();
    };
}

// fabric.Image.fromURL('https://images2.alphacoders.com/147/147320.png', function(img) {
//     var oImg = img.set({
//         left: 0,
//         top: 0,
//         angle: 00,
//         width: canvas.width,
//         height: canvas.height
//     });
//     canvas.setBackgroundImage(oImg).renderAll();
// });

// canvas.add(new fabric.Circle({
//     left: 50,
//     top: 50,
//     radius: 50,
//     stroke: 'red',
//     fill: 'yellow'
// }))

// canvas.add(new fabric.Rect({
//     left: 50,
//     top: 50,
//     height: 150,
//     width:150,
//     stroke: 'red',
//     fill: 'green'
// }))

var sendSelectedObjectBack = function() {
    selectedObject = canvas.getActiveObject();
    if(selectedObject)
        canvas.sendToBack(selectedObject);
        save();
    canvas.discardActiveObject();
    canvas.renderAll();
}


var sendSelectedObjectToFront = function() {
    selectedObject = canvas.getActiveObject();
    if(selectedObject)
        canvas.bringToFront(selectedObject);
        save();
        canvas.discardActiveObject();
    canvas.renderAll();
}


//Function to create mask for crop
function createMaskForCrop(canvas) {
    //  After click start crop add the mask to canvas
    document.querySelector("#startCrop").addEventListener("click", function () {
        // Create mask layer and show to canvas
        addSelectionRect();
        canvas.setActiveObject(selectionRect);
        canvas.renderAll();
        document.querySelector("#crop").style.display = "block";
    });
}

function addSelectionRect() {
    selectionRect = new fabric.Rect({
        fill: "rgba(0,0,0,0.3)",
        originX: "left",
        originY: "top",
        stroke: "black",
        opacity: 1,
        width: currentImage.width,
        height: currentImage.height,
        hasRotatingPoint: false,
        transparentCorners: false,
        cornerColor: "white",
        cornerStrokeColor: "black",
        borderColor: "black",
        cornerSize: 12,
        padding: 0,
        cornerStyle: "circle",
        borderDashArray: [5, 5],
        borderScaleFactor: 1.3,
    });

    selectionRect.scaleToWidth(300);
    canvas.centerObject(selectionRect);
    canvas.add(selectionRect);
}

function crop(canvas) {
    // Click the crop button croped the masked area
    document.querySelector("#crop").addEventListener("click", function (event) {
        document.querySelector("button#crop").style.display = "none";

        // create mask rectabgle for crop
        let rect = new fabric.Rect({
            left: selectionRect.left,
            top: selectionRect.top,
            width: selectionRect.getScaledWidth(),
            height: selectionRect.getScaledHeight(),
            absolutePositioned: true,
        });

        // add to the current image clicpPath property
        currentImage.clipPath = rect;

        // remove the mask layer
        canvas.remove(selectionRect);

        // init new image instance
        var cropped = new Image();

        // set src value of canvas croped area as toDataURL
        cropped.src = canvas.toDataURL({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
        });

        // after onload clear the canvas and add cropped image to the canvas
        cropped.onload = function () {
            canvas.clear();
            image = new fabric.Image(cropped);
            image.left = rect.left;
            image.top = rect.top;
            image.setCoords();
            canvas.add(image);
            canvas.renderAll();
        };
    });
}

//Function to save

var imageSaver = document.getElementById('lnkDownload');
imageSaver.addEventListener('click', saveImage, false);

function saveImage(e) {
    this.href = canvas.toDataURL({
        format: 'png',
        quality: 0.8
    });
    this.download = 'canvas.png'
}

//Setting visibility of the options

//function to set visibility of the options
function hideItems() {
    document.getElementById('effects').style.display = "none";
    document.getElementById('color').style.display = "none";
    document.getElementById('light').style.display = "none";
    document.getElementById('shapes').style.display = "none";
    document.getElementById('draw').style.display = "none";
    document.getElementById('canvas1').style.display = "none";
    document.getElementById('background').style.display = "none";
    document.getElementById('filters').style.display = "none";
}

function effectsFunction() {
    hideItems();
    document.getElementById('effects').style.display = "block";
}

function colorFunction() {
    hideItems();
    document.getElementById('color').style.display = "block";
}

function lightFunction() {
    hideItems();
    document.getElementById('light').style.display = "block";
}

function shapesFunction() {
    hideItems();
    document.getElementById('shapes').style.display = "block";
}

function drawFunction() {
    hideItems();
    document.getElementById('draw').style.display = "block";
}

function canvasFunction() {
    hideItems();
    document.getElementById('canvas1').style.display = "block";
}

function backgroundFunction() {
    hideItems();
    document.getElementById('background').style.display = "block";
}

function filtersFunction() {
    hideItems();
    document.getElementById('filters').style.display = "block";
}

// UNDO REDO CLEAR

var state;
         // past states
        var undo = [];
         // reverted states
        var redo = [];

        /**
         * Push the current state into the undo stack and then capture the current state
         */
        function save() {
          // clear the redo stack
          redo = [];
          $('#redo').prop('disabled', true);
          // initial call won't have a state
          if (state) {
            undo.push(state);
            $('#undo').prop('disabled', false);
          }
          state = JSON.stringify(canvas);
          console.clear();
          console.log(state);
        }

        /**
         * Save the current state in the redo stack, reset to a state in the undo stack, and enable the buttons accordingly.
         * Or, do the opposite (redo vs. undo)
         * @param playStack which stack to get the last state from and to then render the canvas as
         * @param saveStack which stack to push current state into
         * @param buttonsOn jQuery selector. Enable these buttons.
         * @param buttonsOff jQuery selector. Disable these buttons.
         */
        function replay(playStack, saveStack, buttonsOn, buttonsOff) {
          saveStack.push(state);
          state = playStack.pop();
          var on = $(buttonsOn);
          var off = $(buttonsOff);
          // turn both buttons off for the moment to prevent rapid clicking
          on.prop('disabled', true);
          off.prop('disabled', true);
          canvas.clear();
          canvas.loadFromJSON(state, function() {
            canvas.renderAll();
            // now turn the buttons back on if applicable
            on.prop('disabled', false);
            if (playStack.length) {
              off.prop('disabled', false);
            }
          });
        }

        $(function() {
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Set up the canvas
          save();
          // register event listener for user's actions
          canvas.on('object:modified', function() {
            save();
          });
          // draw button
        //   $('#draw').click(function() {
        //     var imgObj = new fabric.Circle({
        //       fill: '#' + Math.floor(Math.random() * 16777215).toString(16),
        //       radius: Math.random() * 250,
        //       left: Math.random() * 250,
        //       top: Math.random() * 250
        //     });
        //     canvas.add(imgObj);
        //     canvas.renderAll();
        //     save();
        //   });
          // undo and redo buttons
          $('#undo').click(function() {
            replay(undo, redo, '#redo', this);
          });
          $('#redo').click(function() {
            replay(redo, undo, '#undo', this);
          })
        });