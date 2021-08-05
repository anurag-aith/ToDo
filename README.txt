This MEAN Stack application can be served frontend and backend separately or
the Node Backend can serve frontend.

Running the application:-
1. Run "npm i" in *ToDo* and *ToDo/backend* folder by cmd.
2. Replace database connection URL in *ToDo/backend/index.js* file. 
:-- Must pass the Database name (Default connection will be established to my MongoDB Atlas)
3. Run "node index.js" in *ToDo/backend* folder.
4. Run "ng serve -o" in the *ToDo* folder.
5. Go to browser, in URL section type "http://localhost:4200/".