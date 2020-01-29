#Tammy Chen and Albert Wan
#SoftDev1 pd9
#K#25: Getting More REST
#2019-11-13

from flask import Flask, render_template
import urllib.request as request
import json

app = Flask(__name__)

@app.route("/")
def root():
   #print(data['url'])
   return render_template("index.html")

@app.route("/countries")
def countries():
    url = "https://restcountries.eu/rest/v2/alpha/col?fields=name;capital;region;population;latlng;flag"
    response = request.urlopen(url)
    response = response.read()
    data = json.loads(response)
    return render_template("countries.html", name=data['name'],capital=data['capital'],population=data['population'],flag=data['flag'])

@app.route("/omdb")
def omdb():
    url = "http://www.omdbapi.com/?i=tt3896198&apikey=58ce8363"
    response = request.urlopen(url)
    response = response.read()
    data = json.loads(response)
    return render_template("omdb.html",title=data['Title'],year=data['Year'],plot=data['Plot'])

@app.route("/agify")
def agify():
    url = "https://api.agify.io/?name=fluffy&country_id=US"
    response = request.urlopen(url)
    response = response.read()
    data = json.loads(response)
    return render_template("agify.html", name = data['name'], age = data['age'], country = data['country_id'])

if __name__ == "__main__":
    app.debug = True
    app.run()
