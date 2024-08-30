## Simple Blog App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To run
Install dependencies\
`npm install`

In the project directory, you can run: `npm start`\
This runs the app in the development mode
### To view
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes

## Create a local JSON server and perform CRUD operations

`Step 1`:\
    Create db.json file under src/data folder and write the code.\
        Refer src/data/db.json file

`Step 2`:\
    Install JSON Server under same project\
        npm install -g Json-server 

`Step 3`:\
    Open Command Prompt  under root folder and write following command\
    Please specify the port. Else it defaults to port 3000 where the react local dev is running already\
        npx json-server --watch src/data/db.json --port 8000

`Step 4`:\
    Use the endpoint given in the terminal\
        My Endpoint: http://localhost:8000/blogs

`Step 5`:\
    Perform GET, POST, DELETE operations using Fetch\
        Refer useFetch() custom hook for get request
