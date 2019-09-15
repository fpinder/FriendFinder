# FriendFinder

**Object**

*This App FriendFinder is compatibility-based application. The user can conect form the home survey page. This application will take in results from your users' surveys, page then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.*

`Home Page`

<a href="#"><img src="https://github.com/fpinder/FriendFinder/blob/master/app/public/images/home.jpg" alt="Home Page"></a>

`Survey Page`

<a href="#"><img src="https://github.com/fpinder/FriendFinder/blob/master/app/public/images/survey.jpg" alt="Survey Page"></a>

*The application also has an error checking process to ensure the all required fills are fields out before the page is submitted  customer as enter the correct information, check if the store has enough of the product to meet the customer's request. If not, the app provides a phrase like Insufficient quantity!, and then prevent the order from going through.*

`Error Checking`

<a href="#"><img src="https://github.com/fpinder/FriendFinder/blob/master/app/public/images/erroChecking.jpg" alt="error checking"></a>

*The application FriendFinder is organized with the following struiture:* 

FriendFinder
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


**_Technology used_**
This app uses JavaScript, Node.js and 5 NPM packages: MySql, Inquirer, Cli-table2, Chalk, and Dotenv

| Files Used   |  Role in the App                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| node_modules | node modules includes the  NPM packages |
| express         | use Express to handle routing |
| .gitignore   | This will tell git not to track these files, and thus they won't be committed to Github |
| package.json | JSON Source file the has all the dependencies.                    |
| bodyParser  | Used to sets up the Express app to handle data parsing. |
| htmlRoutes.js  | Used for the routing and displaying the survey page | 
| apiRoutes.js   | The sql file to create the database and contents. |

**_Code excerpts_**

*I used a switch with "cases" to create four separate functions for the manager request (including a case to exit the menu):*

 ```switch (answer.action) {
                case "View Products for Sale":
                    products();
                    break;

                case "View Low Inventory":
                    lowInventory();
                    break;

                case "Add to Inventory":
                    addInventory();
                    break;

                case "Add New Product":
                    addProducts();
                    break;
                case "Exit":
                    console.log(chalk.blueBright.bold("Good Bye"));
                    connection.end();
                    break;
```

#
Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
