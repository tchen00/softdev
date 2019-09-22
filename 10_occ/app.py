from flask import Flask, render_template
# HENRY'S CODE!
import csv
import random

workersAndPercent = {}
with open('occupations.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',')
    for row in readCSV: #for each row in the csv file
        if row[0] != 'Job Class': #as long as it's not the first row
            workersAndPercent[row[0]] = [float(row[1]),row[2]] #turn value into a float
            #workersAndPercent[row[0]] = row[2]
    workersAndPercent.pop('Total',99) #pop off the last row

def randomO(d):
    bigL = list()
    for key,value in d.items():
        bigL += [key] * int(value[0] * 10) #add each job to the list value*10 many times
    return random.choice(bigL) #weighted random choice based on how many times a job is in the list

# ASSIGNMENT
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when roo route requested
def hello_word():
    return "Hello World"

@app.route("/occupyflaskst")

def test_tmplt():
    return render_template(
    'table_tmplt.html',
    randOcc = randomO(workersAndPercent),
    collection = workersAndPercent)


if __name__ == "__main__":
    # will automatically update without running again
    app.debug = True
    app.run()
