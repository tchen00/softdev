# Team quacks - Tammy Chen & Biraj Chowdhury
# SoftDev pd9
# K10: Import/Export Bank
# 2020-03-04

import pprint
from json import loads
from pymongo import MongoClient

client  = MongoClient()  # sets up clients
db = client.test # sets up database
nobel = db.history # restaurants database

# reading json file into database
if (nobel.count() == 0):
    file = open("nobel.json", "r")
    content = file.readlines()
    for line in content:
        nobel.insert_one(loads(line))

def event_date(date):
    print(date)
    #pprint.pprint(nobel.result)
    #for i in history.result.find({"event.date": date}):
    #    pprint.pprint(i)
    #    print("hello")

event_date("-300")
