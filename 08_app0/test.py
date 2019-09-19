#Tammy Chen
#SoftDev1 pd9
#K08 -- Lemme Flask You Sump'n/Three App Routes
#2019-09-18

from flask import Flask

app = Flask(__name__) #create instance of class Flask
#app2 = Flask(__name2__)

# 1
@app.route("/") #assign following fxn to run when roo route requested
def hello_word():
    print(__name__)
    # print(__name2__)
    return "<h1> No hablo queso! </h1>" #HTML

# 2
@app.route("/cookies")
def bake_cookie():
    print(__name__)
    return "yum"

# 3
@app.route("/tea")
def brew_tea():
    print(__name__)
    return "delish"

# Run!
if __name__ == "__main__":
    # will automatically update without running again
    app.debug = True
    app.run()
