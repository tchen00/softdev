from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/auth")
def authenticate():
    print(app)
    print(request.args)
    return render_template(
        'foo.html'
    )

if __name__ == "__main__":
    app.debug = True
    app.run()
