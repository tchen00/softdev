<<<<<<< HEAD
# Team sleep - Tammy Chen & Alice Ni
# SoftDev pd9
# K11: Ay Mon Go Git It From Yer Flask
#2020-03-16

'''
The dataset contains all nobel prize winners & their research. It includes information such as the year & category of the award.
LINK: http://api.nobelprize.org/v1/prize.json
For our import mechanism, we read the dataset into a list and then used the imported json library to convert the dataset into a dictionary, which is then inserted into the database. We also imported pprint, which makes the information easier to read when printed.
'''

import pymongo, urllib.request, json
from flask import Flask, render_template, request, url_for, redirect

connection = pymongo.MongoClient("localhost:27017")
db = connection.prize
collection = db.nobel_prize

f = open("nobel.json")
data = json.load(f)
collection.remove()
collection.insert_many(data["prizes"])

app = Flask(__name__)
@app.route('/')
def home():
    return render_template("/index.html",
                            subject = findCategory("chemistry"),
    )

def findCategory(category):
    output = []
    for i in collection.find({"category" : category}):
        output.append(i)
    return output

def findYear(year):
    output = []
    for i in collection.find({"year" : year}):
        output.append(i)
    return output

def findSurname(surname):
    output = []
    for i in collection.find({"laureates.surname" : surname}):
        output.append(i)
    return output

@app.route("/year", methods = ["POST"])
def year():
    try:
        year = request.form.get("year")
        return render_template("/index.html",
                                subject = findCategory("chemistry"),
                                year = findYear(year))
    except:
        return redirect(url_for("home"))

if __name__=="__main__":
    app.debug = True
    app.run()
=======
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
>>>>>>> 3b9aa0a74c41f984bc43370acf37cfdf12747a77
