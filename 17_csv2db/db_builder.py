#Tammy Chen
#SoftDev1 pd9
#K17: No Trouble
#2019-10-10

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="data.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

with open('courses.csv','r',newline="") as course:
    reader = csv.DictReader(course)

    command = "CREATE TABLE courses (code TEXT, mark INTEGER, id INTEGER);"
    c.execute(command)

    for row in reader:
        instr = "INSERT INTO courses VALUES ('{}', {}, {});".format(row['code'], row['mark'], row['id'])
        c.execute(instr)

with open('students.csv','r',newline="") as student:
    reader = csv.DictReader(student)

    command = "CREATE TABLE students (name TEXT, age INTEGER, id INTEGER);"
    c.execute(command)

    for row in reader:
        instr = "INSERT INTO students VALUES ('{}', {}, {});".format(row['name'], row['age'], row['id'])
        c.execute(instr)

"""
command = ""          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement
"""

"""
# TESTING CODE!!!
c.execute("SELECT * FROM students;")
c.execute("SELECT * FROM courses;")
rows = c.fetchall()
for row in rows:
    print(row)
"""
#==========================================================

db.commit() #save changes
db.close()  #close database
