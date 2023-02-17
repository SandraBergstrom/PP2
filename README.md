# Tic tac toe! 
## About the project
Welcome to Tic Tac Toe, a simple and fun game designed for kids aged 4 and up. Our game aims to provide a delightful gaming experience for children while enhancing their strategic and critical thinking skills. With intuitive gameplay and colorful graphics, Tic Tac Toe is an excellent way for kids to learn the basics of the game and develop their cognitive abilities.

Tic Tac Toe is not only an entertaining game but also a valuable educational tool. It teaches kids how to think ahead, make decisions, and solve problems in a fun and engaging way. Whether you're a parent looking for a way to keep your child entertained and educated, or a teacher seeking a classroom activity, Tic Tac Toe is an excellent choice. 
Design

![Responsive](/assets/images/readme/responsive.jpg)

## Features
### Existing Features
#### Logo
The game page features a clean logo prominently displaying the name "Tic Tac Toe" at the top. The logo design is visually appealing and provides an appropriate introduction to the game. A sample image of the logo is shown below:<br>
![logo](/assets/images/readme/header.jpg)

#### Name area
The name area is thoughtfully designed to introduce the user to the game and welcome them to the platform. In this section, the user is prompted to enter their name via a text input field. If the user does not provide their name, a message will be displayed, asking them to do so. Once the user enters their name, they can proceed by pressing the enter key or a designated button. The Name Area section is illustrated below:<br>
![Name area](/assets/images/readme/name.jpg) <br>
In addition, the design includes validation to ensure that the user provides a valid name. If the user inputs an invalid name, an error message will be displayed, prompting them to enter a valid name. The name validation process is depicted below: <br>
![Name validation](/assets/images/readme/namevalidation.jpg)

#### Character area
In this section, the user can select their preferred character by clicking on the respective button. Each character button leads the user to the game board section, where they can begin playing the game. The character selection area is visually engaging and offers a simple, user-friendly interface. The character area section is depicted below: <br>
![character area](/assets/images/readme/character.jpg)

#### Game board
The game board section is the core of the Tic Tac Toe game. It features a scorecard on the left-hand side (top on smaller screens) that displays the username entered in the beginning, along with the character the user has chosen. Additionally, the user's number of wins is shown. The center of the board comprises of nine boxes where the game is played, and on the right-hand side, Roboto's scorecard is displayed. The game board section is illustrated below: <br>
![Game board](/assets/images/readme/game-section.jpg)<br>
Message appear to announce the winner. <br>
![Winner User](/assets/images/readme/winnerplayer.jpg) <br>
![Winner Roboto](/assets/images/readme/winnerroboto.jpg) <br>
Or if it's a draw. <br>
![Draw](/assets/images/readme/draw.jpg) <br>

## Testing

### Validator Testing
- HTML 
    - No errors or warnings were returned when passing through [the official W3C validator](https://validator.w3.org/)
- CSS
    - No errors were found when passing through [the official (Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

- JavaScript
    - No errors were found when passing it through [JSHint] and it returned the following metrics:
        - There are 18 functions in this file.
        - Function with the largest signature take 1 arguments, while the median is 0.
        - Largest function has 17 statements in it, while the median is 2. 
        - The most complex function has a cyclomatic complexity value of 5 while the median is 1.

## Bugs


### Fixed bugs:
- After draw it only playes with "O". 
    - I had to reset currentPlayer to "X" after draw. 
- Last box is not clickable and crashes the game. 
    - After debugging it turned out to be the robotosTurn() that was causing problems. I had to create a turn tracker and make robotosTurn if the counter is left than 9.
- Draw function is not working.  
    - 
- When chosen character is picked and moved to game board the size will not change. 
    - I had to use ` instaead of ". 
- Time out to name validation is not working. 
    - I placed it inside of the displayName() instaed of ouytside. 
- Roboto steels turn after a win. 
    - Remove the playAgain() from checkIfWin(). 

## Deployment

## Credits
Special thanks to my mentor, who encouraged gave me some tips and tricks to get my head around Javascript. 
Thank you, Code Institute and my mentor, for all your support and guidance!

The following videos have inspired me strongly: 
- https://www.youtube.com/watch?v=hdI2bqOjy3c
- https://www.youtube.com/watch?v=oZrp3Atkz18&t=822s 
- https://www.youtube.com/watch?v=GTLLnF30up4

The following websites have inspired me and helped me solve some issues:
- https://www.w3schools.com/
- https://stackoverflow.com/
- https://www.geeksforgeeks.org/
- https://www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/
- https://www.webtips.dev/tic-tac-toe-in-javascript


## Other General Project Advice
