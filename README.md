# FriendFinder

[FriendFinder](https://secret-shelf-96318.herokuapp.com/) 

**Object**

*The Application [FriendFinder](https://secret-shelf-96318.herokuapp.com/) is a compatibility-based application hosted on Heroku. The user can connect form the home to the survey page. This application will take in results from your users' surveys page then compare their answers with those from other users. The application will then display the name and picture of the user with the best overall match.*

`Home Page`

<a href="#"><img src="https://github.com/fpinder/FriendFinder/blob/master/app/public/images/home.jpg" alt="Home Page"></a>

`Survey Page`

<a href="#"><img src="https://github.com/fpinder/FriendFinder/blob/master/app/public/images/survey.jpg" alt="Survey Page"></a>

*The application also has an error checking process to ensure the all required fills are fields out before the page is submitted*

`Error Checking`

<a href="#"><img src="https://github.com/fpinder/FriendFinder/blob/master/app/public/images/erroChecking.jpg" alt="error checking"></a>

*The application FriendFinder is organized with the following struiture:* 

```FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
```


**_Technology used_**
This app uses JavaScript, Node.js and 3 NPM packages: Express, Body-parser, and Path

 Files Used   |  Role in the App                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| node_modules | node modules includes the  NPM packages |
| express         | use Express to handle routing |
| .gitignore   | This will tell git not to track these files, and thus they won't be committed to Github |
| package.json | JSON Source file the has all the dependencies.                    |
| bodyParser  | Used to sets up the Express app to handle data parsing. |
| htmlRoutes.js  | Used for the routing and displaying the survey page | 
| apiRoutes.js   | The sql file to create the database and contents. |

**_Data excerpts_**

*The application's data isvstored nside of app/data/friends.js as an array of objects.:*

 ```[{
        name: "Taylor Swift",
        photo: "https://s2.r29static.com/bin/entry/6e5/720x864,85/2201206/image.webp",
        scores: [3, 4, 5, 2, 1, 3, 4, 5, 2, 1, ]
    }, {
        name: "Tyson Beckford",
        photo: "http://liverampup.com/uploads/celebrity/tyson-beckford.jpg",
        scores: [1, 5, 4, 2, 3, 1, 5, 4, 2, 3]
    }, {
        name: "Margot Robbie",
        photo: "https://pixel.nymag.com/imgs/fashion/daily/2016/07/30/30-margot-robbie.w700.h700.jpg",
        scores: [3, 5, 1, 2, 4, 3, 5, 1, 2, 4]
    },
    {
        name: "Jennifer Lopez",
        photo: "http://www.gstatic.com/tv/thumb/persons/68580/68580_v9_bb.jpg",
        scores: [1, 2, 5, 3, 4, 1, 2, 5, 3, 4]
    },
    {
        name: "AJourdan Dunn",
        photo: "https://i.ytimg.com/vi/ix-hoezkBUo/maxresdefault.jpg",
        scores: [5, 1, 3, 2, 4, 5, 1, 3, 2, 4]
    },
    {
        name: "Naomi Campbell",
        photo: "https://secure.i.telegraph.co.uk/multimedia/archive/01921/naomi-campbell-fas_1921624i.jpg",
        scores: [1, 2, 5, 4, 3, 1, 2, 5, 4, 3]
    },
    {
        name: "Miranda Kerr",
        photo: "http://www.gstatic.com/tv/thumb/persons/510886/510886_v9_ba.jpg",
        scores: [3, 2, 4, 1, 5, 3, 2, 4, 1, 5]
    },
]
```

#
Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
