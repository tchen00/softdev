# Team red - Tammy Chen & Kiran Vuksanaj
# SoftDev pd9
# K09: Yummy Mongo Py
# 2020-02-28

from json import loads
from pymongo import MongoClient

client  = MongoClient()  # sets up clients
db = client.test # sets up database
restaurants = db.restaurants # restaurants database

# reading json file into database
if (restaurants.count() == 0):
    file = open("primer-dataset.json", "r")
    content = file.readlines()
    for line in content:
        restaurants.insert_one(loads(line))

def select_borough(borough):
    """ Returns all restaurants in a specified borough. """
    return restaurants.find({"borough" : borough})

def select_zipCode(zipCode):
    """ Returns all restaurants in a specified zip code. """
    return restaurants.find({"address.zipcode" : zipCode})

def select_zip_grade(zipcode, grade):
    ''' Returns all restaurants in a specified zip code and with a specified grade.'''
    return restaurants.find({"address.zipcode" : zipcode, "grades.grade" : grade})

def select_zip_score(zipcode, score):
    '''Returns all restaurants in a specified zip code with a score below a specified threshold.'''
    return restaurants.find({"address.zipcode": zipcode, "grades.score" : {"$lt" : score}})

def select_num_zip(zipcode, number):
    '''Returns specified number of restaurants in given zip code.'''
    return restaurants.find({"address.zipcode": zipcode}).limit(number)

print("--------------TESTING------------------")

select_borough("Staten Island")
select_zipCode("10282")
select_zip_grade("10282", 'A')
select_zip_score("10282", 200)
select_num_zip("10282","50")
