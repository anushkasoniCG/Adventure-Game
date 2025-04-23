const prompt = require('prompt-sync')();
const Name = prompt('What is your name? ');
console.log('Hello ' + Name + '!');

const firstQues = prompt('Do you want to play? (yes/no) ');
const firstAns = firstQues.toLowerCase() === 'yes' ? true : false;

if (firstAns) {
    console.log("Let's play!");
    console.log("You find yourself at the edge of the Enchanted Forest, a mystical place filled with magical creatures and hidden treasures.");
    console.log("In front of you, there are two distinct paths: one to the left and one to the right.");
    
    const direction = prompt("Do you want to turn left or right? ");
    
    if (direction.toLowerCase() === 'left') {
        console.log("You turn left and enter a Mysterious Maze. The walls are covered in ivy, and the air is thick with the scent of adventure.");
        console.log("Inside the Maze, you encounter three doors: the Door of Whispers, the Door of Shadows, and the Door of Light.");
        
        const option1 = prompt("Which door do you choose? (whispers/shadows/light) ");
        
        if (option1.toLowerCase() === 'whispers') {
            console.log("You chose the Door of Whispers. You hear the secrets of the forest, but first, you must answer a riddle to pass.");
            // Add riddle logic here
        } else if (option1.toLowerCase() === 'shadows') {
            console.log("You chose the Door of Shadows. You enter a dark room filled with shadowy figures. If you can outsmart them, you gain a magical item!");
            // Add shadow logic here
        } else if (option1.toLowerCase() === 'light') {
            console.log("You chose the Door of Light. You find a beautiful garden where you can rest and regain your strength, but you must leave behind one of your possessions.");
            // Add light logic here
        } else {
            console.log("Oops! That's not a valid option.");
        }
        
    } else if (direction.toLowerCase() === 'right') {
        console.log("You turn right and find yourself in a Sunny Meadow filled with vibrant flowers and friendly creatures.");
        console.log("You meet three magical beings: The Wise Owl, The Playful Fairy, and The Grumpy Troll.");
        
        const option2 = prompt("Who do you want to interact with? (owl/fairy/troll) ");
        
        if (option2.toLowerCase() === 'owl') {
            console.log("You approach the Wise Owl. He offers you knowledge about the forest but requires you to share a secret of your own.");
            // Add owl logic here
        } else if (option2.toLowerCase() === 'fairy') {
            console.log("You play a game of tag with the Playful Fairy. If you win, she grants you a charm that allows you to fly for a short time!");
            // Add fairy logic here
        } else if (option2.toLowerCase() === 'troll') {
            console.log("The Grumpy Troll blocks your path and demands a toll. You can either pay him with shiny stones or try to negotiate a trade.");
            // Add troll logic here
        } else {
            console.log("Oops! That's not a valid option.");
        }
        
    } else {
        console.log("Oops! That's not a valid direction.");
    }
} else {
    console.log("Maybe next time! Goodbye!");
}