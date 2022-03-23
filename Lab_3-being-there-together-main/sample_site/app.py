from itertools import count
from flask import Flask, render_template
from flask import request

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    f = open("count.txt", "r")
    global count
    count = int(f.read())
    f.close()
    count +=1
    f = open("count.txt",'w')
    f.write(str(count))
    # Render HTML with count variable
    return render_template("index.html", count=count)

@app.route('/signin', methods=['GET'])
def signin_form():
    return '''<form action="/signin" method="post">
              <p><input name="username"></p>
              <p><input name="password" type="password"></p>
              <p><button type="submit">Sign In</button></p>
              </form>'''

@app.route('/signin', methods=['POST'])
def signin():
    if request.form['username']=='human' and request.form['password']=='iamhuman':
        return render_template("cat.html", count=count)
    return '<h3>Wrong username or password.</h3>'

@app.route('/catpics', methods=['GET', 'POST'])
def cat_album():
    return render_template("pics.html", count=count)

if __name__ == "__main__":
    app.run()

