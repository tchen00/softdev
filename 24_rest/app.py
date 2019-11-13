#Tammy Chen
#SoftDev1 pd9
#
#2019-11-12

from flask import Flask, render_template
import urllib.request as request
import json

app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when root route requested
def root():
    response = request.urlopen("https://api.nasa.gov/planetary/apod?api_key=VLDCOQP6GcKTIqjBvRfwS8LvAAERQlx0n9f0Hwz5");
    # print(__name__) #where will this go?
    response = response.read()
    data = json.loads(response)
    print(data['url'])
    return render_template("index.html", pic = data['url'])

if __name__ == "__main__":
    app.debug = True
    app.run()
