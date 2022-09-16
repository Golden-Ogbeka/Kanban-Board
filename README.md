# Kanban Board

## Environment

- React Version: 16.13.1
- Node Version: ^12.18.3
- Default Port: 8000

## Application Demo:

[https://kanban-board-golden-ogbeka.vercel.app/](https://kanban-board-golden-ogbeka.vercel.app/)

## Application Functionalities

- The board contains 4 stages of tasks in sequence - 'Backlog', 'To Do', 'Ongoing' and 'Done'.

- The 'New Task Name' input should initially be empty. The user can type a task name in this input box and clicking on 'Create task' button should add a new task with this task name. This newly created task should be added to the Backlog stage (the first stage). Post this, clear the input field.

- If 'Create Task' button is clicked with input being empty, nothing should happen.

- In every individual stage, the tasks are rendered as a list `<ul>` where each task is a single list item `<li>` which displays the name of the task.
- Each task list item has 3 icon buttons at the right -

  1. Back button - This moves the task to the previous stage in sequence, if any. This button is disabled if the task is in the first stage.
  2. Forward button - This moves the task to the next stage in sequence, if any. This button is disabled if the task is in the last stage.
  3. Delete button - This removes the task from the board.

- Each task has 2 properties -
  1. name - name of task. This is the unique identification for every task. [STRING]
  2. stage - stage of task [NUMBER] (0 represents Backlog stage, 1 represents To Do stage, 2 represents Ongoing stage, 3 represents Done stage).

**Read Only Files**

- src/App.test.js

**Commands**

- install:
  npm install

- run:
  npm start

- test:
  npm test
