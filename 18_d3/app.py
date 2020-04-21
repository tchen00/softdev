# Team hallo - Tammy Chen & Grace Mao
# SoftDev pd9
# K18: Come Up For Air
# 2020-04-21

from flask import Flask, render_template
from utl.parse import parse

app = Flask(__name__)

@app.route("/")
def root():
    d = parse()
    #print(d)
    dates = list(d.keys())
    nums = list(d.values())
    print(dates)
    print(nums)
    return render_template('index.html', dates=dates, csv=nums)

if __name__ == "__main__":
    app.debug = True
    app.run()
