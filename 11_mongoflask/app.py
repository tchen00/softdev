from flask import Flask, render_template
import pymongo, urllib.request, json, pprint
from bson.json_util import loads
import os 
from script import *

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods = ['GET', 'POST'])
def home():
    return render_template('form.html')
