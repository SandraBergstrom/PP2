# Tic tac toe! 

[View live project here!](https://sandrabergstrom.github.io/PP2/)

Welcome to Tic Tac Toe, a simple and fun game designed for kids aged 4 and up. Our game aims to provide a delightful gaming experience for children while enhancing their strategic and critical thinking skills. With intuitive gameplay and colorful graphics, Tic Tac Toe is an excellent way for kids to learn the basics of the game and develop their cognitive abilities.

Tic Tac Toe is not only an entertaining game but also a valuable educational tool. It teaches kids how to think ahead, make decisions, and solve problems in a fun and engaging way. Whether you're a parent looking for a way to keep your child entertained and educated, or a teacher seeking a classroom activity, Tic Tac Toe is an excellent choice. 
Design

![Responsive](/assets/images/readme/responsive.jpg)

## Table of Contents
- [Tic tac toe!](#tic-tac-toe-)
  * [User Experience (UX)](#user-experience--ux-)
    + [User Stories](#user-stories)
    + [Design](#design)
    + [Wireframes](#wireframes)
  * [Technologies used](#technologies-used)
    + [Languages](#languages)
    + [Programs used](#programs-used)
  * [Features](#features)
    + [Existing Features](#existing-features)
      - [Logo](#logo)
      - [Name area](#name-area)
      - [Character area](#character-area)
      - [Game board](#game-board)
  * [Testing](#testing)
    + [Validator Testing](#validator-testing)
    + [User Stories Testing (Approved)](#user-stories-testing--approved-)
  * [Bugs](#bugs)
    + [Fixed bugs:](#fixed-bugs-)
  * [Deployment](#deployment)
  * [Credits](#credits)

## User Experience (UX)
### User Stories
- As a young child, I want to be able to choose my own character and see my own name, so that I can feel a connection with the game.
- As a parent, I want the game to be easy to use, so that my child can play it without my help.
- As a player, I want to be notified on who wins and see the final result.
- As a player, I want to be able to start a new game, so that I can play again and improve my skills.
- As a player, I want to be able to play the game on different devices and screen sizes, so that I can play anywhere and anytime.

### Design
The user experience design for the tic tac toe game is optimized for young users, with a focus on ease of use and visual appeal. The design features a clean and intuitive layout, with colorful contrasts that draw the user's attention to important elements. To further enhance the playful experience, a unique font has been chosen to appeal to young children, while three playful icons featuring a unicorn, teddy bear, and dragon have been added to the character selection screen.

The colorscheme has been carefully selected to be light and pastel, with shades of pink, yellow, blue, and orange that create a cohesive and inviting atmosphere for young players. The design has been tested to ensure that it is both engaging and intuitive, and feedback has been positive in terms of both ease of use and visual appeal.

### Wireframes
![Wireframe welcome page](/assets/images/readme/wf-welcome.jpg) <br>
![Wireframe of game area](/assets/images/readme/wf-game.jpg) <br>

[Back up](#table-of-content)

## Technologies used

### Languages
- HTML
- CSS
- JavaScript

### Programs used
The following technologies were used in the development of this project:

- Gitpod: A cloud-based integrated development environment (IDE) that was used for version control and writing code. The Gitpod terminal was utilized to commit changes to Git and push them to GitHub.
- GitHub: A web-based hosting service used for version control and storing the project's code after being pushed from Gitpod.
- Photoshop: A raster graphics editor used for resizing and editing icons for the project.
- Balsamiq: A wireframing tool that was used to create wireframes during the design process.

[Back up](#table-of-content)

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

[Back up](#table-of-content)

## Testing
To demonstrate the thoroughness of the testing conducted on the Tic Tac Toe game for kids, the following validation tests were carried out:

### Validator Testing

- HTML
    - The official W3C validator was used to test the HTML, and no errors or warnings were returned.
- CSS
    - The official Jigsaw validator was used to test the CSS, and no errors were found.
- JavaScript
    - The code was passed through JSHint for testing, and no errors were found. Additionally, various metrics were returned, including the number of functions, the size of the largest function, and the complexity of the most complex function.
- Lighthouse 
    - See result in below image <br>
![Lighthouse Test](/assets/images/readme/lighthouse.jpg)

In addition to these validation tests, the game was also extensively tested by a diverse group of individuals ranging from 4 to 65 years old. All characters were tested, and the name validation function was thoroughly evaluated. Despite the comprehensive testing, no errors or issues were found, leading us to believe that the Tic Tac Toe game for kids is a reliable and functional product.

### User Stories Testing (Approved)

-  As a young child, I want to be able to choose my own character and see my own name, so that I can feel a connection with the game.
    - The game's character selection feature allows the user to choose from a list of characters and displays the chosen character on the game board.
    - The user's name is displayed on the game board.

- As a parent, I want the game to be easy to use, so that my child can play it without my help.
    - Clear instructions and an intuitive user interface are provided.
    - Observations of children playing the game indicate that there are no significant difficulties unless they need help writing their name. 

- As a player, I want to be notified on who wins and see the final result.
    - The game has a win/loss notification feature that displays the winner and the final result.

- As a player, I want to be able to start a new game, so that I can play again and improve my skills.
    - The game has a new game feature that allows the user to start a new game after the current game has ended.

- As a player, I want to be able to play the game on different devices and screen sizes, so that I can play anywhere and anytime.
    - The game is responsive and works well on different devices and screen sizes.

All user stories have been tested and approved.

[Back up](#table-of-content)

## Bugs
| **Bug** | **Status** |
| ----------- | ----------- |
| Last box is still clickable when there has been a draw declared. | |
|||

### Fixed bugs:
| **Bug** | **Status** |
| ----------- | ----------- |
|After draw it only playes with "O". | I had to reset currentPlayer to "X" after draw. |
|Last box is not clickable and crashes the game. |After debugging it turned out to be the robotosTurn() that was causing problems. I had to create a turn tracker and make robotosTurn if the counter is left than 9.|
|Draw function is not working. |Had to re-write it all and made a new function to call within the checkIfWin().|
|When chosen character is picked and moved to game board the size will not change.|I had to use ` instaead of ".|
|Time out to name validation is not working. |I placed it inside of the displayName() instaed of ouytside.|
|Roboto steels turn after a win.|Remove the playAgain() from checkIfWin(). |
|Last box needs to be clicked to show draw. |In the isFilled variable I changed from checking if all boxes where filled to check if 8 boxes are filled to be able to check for a draw after 8th turn.|
|Player can click boxes even when it's Robotos turn.|Removed the click eventlistener after the player has clicked an empty box. Then I add the eventlistener again when Roboto has played its turn|
|||

[Back up](#table-of-content)

## Deployment
To deploy the site on Github Pages, the following steps were taken:

1. Navigated to the Settings tab of the Github repository
2. Navigated to the Pages option on the left-hand side
3. Selected the Master Branch as the source from the dropdown list in the source section
4. The page was automatically updated, providing a link with the latest deployment information.
5. This process ensured the seamless deployment of the site on Github Pages for public access.

[Back up](#table-of-content)

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

Icons in the footer is from [Fontawesome](https://fontawesome.com/)

Fonts is taken from [Google Fonts](https://fonts.google.com/)

[Back up](#table-of-content)