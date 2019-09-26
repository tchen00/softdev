from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/")
def home():
    #return "hello"
    #return render_template(
    #    'request.html'
    #)
    #return "hello"
    return render_template("request.html") #displays the form

@app.route("/auth")
def authenticate():
    '''
    print("//////////////|\\\\\\\\\\\\\\")
    print("****DIAG: request obj ****")
    print(request)
    print(app)
    print("****DIAG: request args obj ****")
    print(request.args)
    '''
    #redirect to the response.html & input the parameters
    return render_template(
        'response.html',
        username = request.args['username'],
        method = request.method
    )

if __name__ == "__main__":
    app.debug = True
    app.run()
