# Setup virtrual environment `venv` and install `Flask` and `gunicorn`
- Status: Completed!!Check the sceenshot
- ![venv](https://github.com/AdeleYidanZhang/Yidan_heroku/blob/26deda2806e5ed4d12eb787ad7fcd75cd655b8e5/img/venv.PNG)

## About my server&`app.py`
what it does, what it uses, how it is different than anything we;ve done; and your statement is about why you did what you did, who is it designed for, why is it interesting? or sad? or why did you decide to make it do what it does? who cares? does it? hurt? block? encourage? reflect?
1. This is a server made by cats, they are cats from another planet, and they made a server for human to visit, click the button to sign in
- ![first_page](https://github.com/AdeleYidanZhang/Yidan_heroku/blob/de3371d74bae0fa853a51f1c858a94c99c449aa5/img/site1.PNG)
2. In this server, human can see how many human have visited the site(after you sign in)
3. The cats also prepared a photo album for human, to see cat's photo album, you also have to sign in first.
4. Click the `sign in` button to sign in
5. They already set a username and password for human, type them to sign in!
 - username: `human`
 - password: `iamhuman`
 - ![login_page](https://github.com/AdeleYidanZhang/Yidan_heroku/blob/c4b6d9c19732ebedf4811c073bfd7f7816cdf46f/img/site2.PNG)
6. If the username and password are correct, you will see:(if they are not correct, it will show "Wrong user name and password")
 - ![visit_numbers](https://github.com/AdeleYidanZhang/Yidan_heroku/blob/5af436b03851872557869109246f5bc089b8ec1e/img/site3.PNG)
7. Then, click the button, you will see cat's photo album (8 pictures)
 - ![album_page](https://github.com/AdeleYidanZhang/Yidan_heroku/blob/a64a7b06241f4afe9171edc89ffe5de59cea4132/img/site4.PNG)

## HEROKU

1. make an account at [heroku.com](https://www.heroku.com/) (verify the account with the email account you used to setup)
2. login to Heroku and at your dashboard you want to`Create New App` - click this button
3. on the next page, give the app a name and then click `Create app`
4. Be sure that your app repo has the `requirements.txt` and the `Procfile`
5. Be sure that your app is _its own repo_ (this can be a public repo on your personal `GitHub`)
   - to submit `Lab 3` for marking: you must copy the content of your repo into your `firstname_lastname` repo at `Robots` and include your `Heroku` `URL`
6. This will let you connect Heroku to your GitHub repo of your app (right now it could be called `sample_site` if you copied the example from class contained here)
7. So select the `connect to GitHub` option and link your repo (probably you will have to login to `GitHub` if you haven't already)
8. Select `Manual Deploy` and the `branch` (probably it is `main`)
9. If the build is successful you can now `View App` (get the `URL` to share!)


---

## Test the app

1. To check the visual content of the `index.html` file we just drag the file from our folder to a browser (or `open with` and select a browser)
2. To check the app itself with the local server we do the following:
   - run the app with (use your python version same as before): 
     - python3 app.py 
   - open a browser window and type the following as a `URL` (both options do the same thing so only need to use one):
     - localhost:5000
     - 127.0.0.1:5000
     - (localhost _is_ 127.0.0.1)
3. To check the app after deploying on `Heroku`:
   - type the `URL` you are given from `Heroku`
   - in my case I named the app `eecsweb` so I use the `URL`:
     - [https://eecsweb.herokuapp.com/](https://eecsweb.herokuapp.com/)
