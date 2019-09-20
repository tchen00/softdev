from flask import Flask, render_template
from random import random

# Reading CSV file + splitting by new line!
data = open('occupations.csv', 'r')
data = data.read()
data = data.split('\n')

# Removing first row!
data.pop(0)
total = float(data.pop(-2).split(',')[1]) #getting the total which is 99.8!

# Reading through the data
for i in range(len(data)):
    if data[i] == '':
        data.pop(i)
    elif data[i].count(',') > 1:
        data[i] = data[i].split('",')
    else:
        data[i] = data[i].split(',')

# Transferring everything into the dictionary
occupations = {}
for l in data:
    occupations[l[0]] = float(l[1])

def random_average():
    # generate random number
    bar = 0 # interval for each occupation
    randvalue = random() * total # INTERVAL [0,99.8)
    keys = list(occupations.keys())
    for key in keys:
        value = occupations[key]
        bar += value
        if (randvalue <= bar):
            return key


app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when roo route requested
def hello_word():
    return "Hello World"

@app.route("/occupyflaskst")

def test_tmplt():
    return render_template(
    'table_tmplt.html',
    foo = "fun",
    collection = occupations)


if __name__ == "__main__":
    # will automatically update without running again
    app.debug = True
    app.run()
