# Football Statistics

Working app snaps shared below:

## Home

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/Home.png)


## League Stats

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/League_Stats(1).png)

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/League_Stats(2).png)


## Live Score

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/Live_Scores.png)


## ML Model

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/ML_Model.png)


## Player Similarity

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/Player_Similarity.png)


## Player Stats

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/Player_Stats(1).png)

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/Player_Stats(2).png)


## World Cup

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/WC(1).png)

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/WC(2).png)


## XG

![](https://raw.githubusercontent.com/shauryarawat1/footstats/master/screenshots/XG.png)


## Description
-A football analysis and prediction app, created using ReactJS and Flask.
-The application uses ML and AI to predict predict team and player statistics as well as attributes.


## Server :
- The server for the app is created using Flask.
- Data scraping is performed on the server, after which we use our own API's to create/fetch JSON data sets.
- Using these data sets we have created the machine learning models to predict player similarity, market value, expected goals etc using python.
- We have deployed the developed models on the server.


## Client :
- The front-end was created using react. This interactive react app is displayed to the end user.
- The app includes 5 modules including home, live scores, news, stats and coaches center.
- Live scores from matches across the world are displayed to user in the live scores modules. These scores can be filtered by leagues.
- Latest football news is displayed under the news module and various live league and player stats are shown in the stats module.
- These modules use the data fetched/received from the server through api calls.
- The coaches center module shows the results from the prediction models developed using machine learning on the server.
