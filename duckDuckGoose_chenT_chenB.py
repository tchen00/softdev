from random import random

data = open('occupations.csv', 'r')
data = data.read()
data = data.split('\n')

# Removing first row!
data.pop(0)
total = float(data.pop(-2).split(',')[1])

for i in range(len(data)):
    if data[i] == '':
        data.pop(i)
    elif data[i].count(',') > 1:
        data[i] = data[i].split('",')
    else:
        data[i] = data[i].split(',')

occupations = {}
for l in data:
    occupations[l[0]] = float(l[1])

print occupations

def random_average():
    # generate random number
    bar = 0 # interval of the total that the weighted percentage holds for each occupation
    randvalue = random() * total #random float value from the interval [0,99.8)
    keys = list(occupations.keys())
    #print(occupations.values())
    for key in keys:
        value = occupations[key]
        bar += value
        if (randvalue <= bar):
            #print(key, occupations[key])
            return key


print random_average()
print random_average()
