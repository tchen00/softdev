from flask import Flask

app = Flask(__name__)
#app2 = Flask(__name2__)

@app.route("/occupyflaskst")
def hello_word():
    print()
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
