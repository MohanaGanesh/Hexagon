console.log(testing);
console.log("hello");

var canvas = new fabric.Canvas('canvas');

let currentImage;

addImage(canvas)
createMaskForCrop(canvas);
crop(canvas);

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
            canvas.add(oImg).renderAll();
            var a = canvas.setActiveObject(oImg);
            var dataURL = canvas.toDataURL({ format: 'jpeg', quality: 0.8 });
        console.log("Canvas Image " + dataURL);
        document.getElementById('txt').href=dataURL;
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

canvas.add(new fabric.Circle({
    left: 50,
    top: 50,
    radius: 50,
    stroke: 'red',
    fill: 'yellow'
}))

canvas.add(new fabric.Rect({
    left: 50,
    top: 50,
    height: 150,
    width:150,
    stroke: 'red',
    fill: 'green'
}))

var sendSelectedObjectBack = function() {
    selectedObject = canvas.getActiveObject();
    if(selectedObject)
        canvas.sendToBack(selectedObject);
    canvas.discardActiveObject();
    canvas.renderAll();
}


var sendSelectedObjectToFront = function() {
    selectedObject = canvas.getActiveObject();
    if(selectedObject)
        canvas.bringToFront(selectedObject);
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

function download(url, name) {
    $("<a>")
      .attr({
        href: url,
        download: name
      })[0]
      .click();
}

function save() {
    canvas.deactivateAll().renderAll();
    var c = document.getElementById('c');
    var dataURL = c.toDataURL();
    var name = 'image';
    download(dataURL, name + ".png");
}
$("#save").click(save);




