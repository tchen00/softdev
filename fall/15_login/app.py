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

@app.route("/") #redirects depending on...
def home():
    if "in" in session: #if you're logged in or...
        return redirect("/welcome")
    else: #if you're not logged in
        return redirect("/login")

@app.route("/welcome") #woah you're logged in, welcome to the welcome page
def welcome():
    if "in" in session:
        return render_template('welcome.html')
    return redirect("/login") #unless you're lying, then you have to go login

@app.route("/auth") #will check the username and password
def auth():
    if (user == request.args['username']):
        if (pword == request.args['password']): #perfect you are now logged in
            session["in"] = True
            return redirect("/welcome")
        return render_template("error.html", reason = "Wrong password") #the username is right but the password is wrong
    else:
        return render_template("error.html", reason = "Wrong username") #the username is wrong
    return render_template("error.html", reason = "bad juju") #never happens

@app.route("/logout") #after you logout
def logout():
    if "in" in session:
        session.pop("in") #session modified
    return render_template('logout.html')

@app.route("/login") #login page
def login():
    if "in" in session: #if you're already logged in
        return redirect('/welcome')
    return render_template('login.html') #else load the login template

if __name__ == "__main__":
    app.debug = True
    app.run()
