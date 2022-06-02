# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### 📚 User Stories
- As a user, I can see a 3x3 grid game board on the page.
    - render a square within the square component.
    - map over the square to nine total squares.
    - customize the squares in the .css folder. 
        - align the squares in the middle of the app and change the size to our liking.

- As a user, I can click on a square to mark it.
    - create an onClick
    - In our squares component create an alert that will pop up once the square is clicked on letting us know the squares are working.
    - assign our squares index's and then pass a value such as "X" as our output that the user sees.

- As a user, my partner can click on a square after me and see their mark.
    - create a function called handleGamePlay to decide whether the output inside the square is going to be "o" or "x"
    - add function to are onClick 

- As a user, I can't click on a square that has already been marked.
    - create a conditional statement to handleGamePlay that does not allow user to click on a square that is already used

- As a user, when either my partner or I win the game (3 squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    - create a function called calculateWinner that iterates through each square index 
        - if "x" or "o" met the winning criteria alert users that someone has won.

- As a user, I can't continue playing the game after the game has been won.
    - add a conditional statement that stops game once calculateWinner alerts us that somebody won.
    
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 🛠 Resources
- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
