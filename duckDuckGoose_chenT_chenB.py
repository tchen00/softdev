from random import random

list = open('occupations.csv', 'r')
list = list.read()
list = list.split('\n')

# Removing first row!
list.pop(0)
total = float(list.pop(-2).split(',')[1])

for i in range(len(list)):
    if list[i] == '':
        list.pop(i)
    elif list[i].count(',') > 1:
        list[i] = list[i].split('",')
    else:
        list[i] = list[i].split(',')

occupations = {}
for l in list:
    occupations[l[0]] = float(l[1])

print occupations
