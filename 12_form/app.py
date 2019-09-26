from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    #return "hello"
    return render_template(
        'request.html'
    )


@app.route("/auth")
def authenticate():
    print("//////////////|\\\\\\\\\\\\\\")
    print(app)
    print(request.args)

    #if request.method == 'POST':
    #    return redirect
    return render_template(
        'request.html'
    )

if __name__ == "__main__":
    app.debug = True
    app.run()
