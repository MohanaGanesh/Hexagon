from flask import Flask,render_template
from flask.templating import render_template
app = Flask(__name__)

@app.route('/')
def index():
     return render_template('base.html')

app.run(host='0.0.0.0', port=81)