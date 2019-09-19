from flask import Flask

app = Flask(__name__) #create instance of class Flask
#app2 = Flask(__name2__)

# 1
@app.route("/static/pair") #assign following fxn to run when roo route requested
def hello_word():
    print(__name__)
    coll = {0,1,1,2,3,5,8}
    return {{coll}}
    # print(__name2__)

    #return {{coll}} #HTML




# Run!
if __name__ == "__main__":
    # will automatically update without running again
    app.debug = True
    app.run()
