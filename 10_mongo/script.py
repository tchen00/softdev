# Team quacks - Tammy Chen & Biraj Chowdhury
# SoftDev pd9
# K10: Import/Export Bank
# 2020-03-04

from json import loads
from pymongo import MongoClient

client  = MongoClient()  # sets up clients
db = client.test # sets up database
history = db.history # restaurants database

# reading json file into database
if (history.count() == 0):
    file = open("history.json", "r")
    content = file.readlines()
    for line in content:
        history.insert_one(loads(line))
