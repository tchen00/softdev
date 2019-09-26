from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/")
def home():
    #return "hello"
    #return render_template(
    #    'request.html'
    #)
    #return "hello"
    return render_template("request.html")

@app.route("/auth")
def authenticate():
    print("//////////////|\\\\\\\\\\\\\\")
    print("****DIAG: request obj ****")
    print(request)
    #print(app)
    print("****DIAG: request args obj ****")
    print(request.args)


    #if request.method == 'POST':
    #    return redirect
    return render_template(
        'response.html',
        username = request.args['username'],
        method = request.method
    )

if __name__ == "__main__":
    app.debug = True
    app.run()
