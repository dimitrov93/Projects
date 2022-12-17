# OfficeBoard
Application for office communications via messages and tasks board


:dart:  My project for the Angular course at SoftUni. (Novermber 2022) 

Web application for office communication: 
- Messages board for sharing important messages with team members. 
- Tasks board for keeping track of tasks which should be done inside the team.
- Comments option for the tasks.


## :warning: Prerequisites
- [ExpressJs](https://expressjs.com/en/starter/installing.html)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)


### 1. Server
- You can download the server from the "Server" folder
- Run `npm install` to get the needed packages
- Run `npm start` to start the server

### 2. Client  
- You should be running the server in order to use the Client.
- Run `npm install` in the `Client` directory.
- Run `ng s` (in the `Client` directory) for a dev server. 
- You should see OfficeBoard's client-side open in your browser on `http://localhost:4200/`.
- You can also check the deployed version on `https://office-board.web.app/`.

## :information_source: Structure
#### Public part (visible without authentication): 
- Dashboard - shows the count of messages, tasks and comments for the day, for the month and for the year;
- Login page - user login form;
- Register page - user registration form; 
#### Only for Logged Users:
- Profile
  - view and edit own profile info;
- Messages
  - messages board - all messages with search bar;
  - create messages with title and content;
  - edit or delete own messages;
- Tasks
  - tasks board - all tasks in three columns - "To do", "Doing" and "Done";
  - change task's status by moving the task across the three columns - drag/drop;
  - create tasks with title and description; 
  - edit or delete own tasks;
  - view task's details with comments;
- Comments
  - shown in task's details page; 
  - create comments for existing tasks;
  - edit or delete own comments;


## :eyes: Screenshots
#### :arrow_right: Dashboard
![OfficeBoard-MessagesBoard-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/dashboard.png)
#### Messages Board
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/msgBoard.png)
#### Messages Create
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/createMgs.png)
#### Tasks Board
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/tasks.png)
#### Tasks Edit
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/taskEdit.png)
#### Task Details Non creator
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/taskDetailsNonCreator.png)
#### Task Details Creator
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/taskDetailsCreator.png)
#### Task Comment Create
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/createNewTask.png)
#### Profile
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/profile.png)
#### Edit Profile
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/profileEdit.png)
#### 404
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/dimitrov93/OfficeBoard/main/screenshots/404.png)