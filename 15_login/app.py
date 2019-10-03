#Team Flag - Brandon Chen, Tammy Chen. Grace Mao
#SoftDev1 pd9
#K15 -- Do I Know You?
#2019-10-02

from flask import Flask, render_template, request, redirect, url_for, session
import os
app = Flask(__name__)

#hardcoded username and passwords
user = "flag"
pword = "jamaica"
app.secret_key = os.urandom(32)

@app.route("/")
def home():
    if "in" in session:
        return redirect("/welcome")
    else:
        return redirect("/login")

@app.route("/welcome")
def welcome():
    if "in" in session:
        return render_template('welcome.html')
    return redirect("/login")

@app.route("/auth")
def auth():
    if (user == request.args['username']):
        if (pword == request.args['password']):
            session["in"] = True
            return redirect("/welcome")
        return render_template("error.html", reason = "Wrong password")
    else:
        return render_template("error.html", reason = "Wrong username")
    return render_template("error.html", reason = "bad juju") #never happens

@app.route("/logout")
def logout():
    if "in" in session:
        session.pop("in")
    return render_template('logout.html')

@app.route("/login")
def login():
    if "in" in session:
        return redirect('/welcome')
    return render_template('login.html')

if __name__ == "__main__":
    app.debug = True
    app.run()
