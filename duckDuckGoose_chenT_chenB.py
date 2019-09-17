# Duck Duck Goose -- Tammy Chen and Brandon Chen
# SoftDev1 pd9
# K #03: StI/O: Divine your Destiny
# 2019-09-16

# Importing random
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

# print occupations

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


#print random_average()
#print random_average()
#print random_average()
