from flask import Flask, render_template
import os

app = Flask(__name__)

picFolder = os.path.join('static', 'images')

app.config['UPLOAD_FOLDER'] = picFolder

@app.route('/')

def homepage():
    effects = os.path.join(app.config['UPLOAD_FOLDER'], 'magic-wand.png')
    color = os.path.join(app.config['UPLOAD_FOLDER'], 'palette.png')
    light = os.path.join(app.config['UPLOAD_FOLDER'], 'idea.png')
    shapes = os.path.join(app.config['UPLOAD_FOLDER'], 'play.png')
    text = os.path.join(app.config['UPLOAD_FOLDER'], 'text.png')
    canvas = os.path.join(app.config['UPLOAD_FOLDER'], 'canvas1.png')
    save = os.path.join(app.config['UPLOAD_FOLDER'], 'download.png')
    upload = os.path.join(app.config['UPLOAD_FOLDER'], 'upload.png')
    undo = os.path.join(app.config['UPLOAD_FOLDER'], 'undo.png')
    redo = os.path.join(app.config['UPLOAD_FOLDER'], 'redo.png')
    back = os.path.join(app.config['UPLOAD_FOLDER'], 'backward.png')
    front = os.path.join(app.config['UPLOAD_FOLDER'], 'forward.png')
    crop = os.path.join(app.config['UPLOAD_FOLDER'], 'crop.png')
    background = os.path.join(app.config['UPLOAD_FOLDER'], 'background.png')
    return render_template("editor.html", upload1=upload, effects1=effects, color1=color, light1=light, shapes1=shapes, text1=text, canvas1=canvas, save1=save, undo1=undo, redo1=redo, back1=back, front1=front, crop1=crop, background1=background)

# @app.route('/favicon.ico')
# def favicon():
#     return app.send_static_file('favicon.ico')

if __name__ == '__main__':
    app.run(debug=True,host='3.91.47.59',port=82)

