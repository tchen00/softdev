# Team hallo - Tammy Chen & Grace Mao
# SoftDev pd9
# K18: Come Up For Air
# 2020-04-21

from flask import Flask, render_template
import csv

app = Flask(__name__)

def parse():
    dict = {}
    with open('covid.csv', 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            if (row[0][0] != 'D'): # not the first row
                # date: <string>, values: <array> [new cases, hospitalized, deaths]
                #print(row)
                #print('DONE')
                #print(type(row[0]))
                dict[row[0]] = [int(row[1]), int(row[2]), int(row[3])]
        #print(dict)
    return dict

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
