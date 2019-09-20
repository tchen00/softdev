from flask import Flask, render_template

app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign following fxn to run when roo route requested
def hello_word():
    return "Hello World"

coll = {0,1,1,2,3,5,8}
@app.route("/stub.html")
    #return "hello"
def test_tmplt():
    return render_template(
    'stub.html',
    foo = "fun",
    collection = coll)


if __name__ == "__main__":
    # will automatically update without running again
    app.debug = True
    app.run()
