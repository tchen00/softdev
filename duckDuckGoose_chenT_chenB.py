from random import random

list = open('occupations.csv', 'r')
list = list.read()
list = list.split('\n')

list.pop(0)
total = float(list.pop(-2).split(',')[1])
