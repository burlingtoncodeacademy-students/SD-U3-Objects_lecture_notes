//! Objects
/* 
    Object Literal
        - "Hard Coded": When data has been written within the program by the developer.
            - Data that is not dynamic.
        
*   Structure:

    keyword objectName = {
        key: value,
        key: value
    };
*/

let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Man",
    age: 25,
    active: true
};

/* 
    - Objects are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        "season two" : [/*... */],
        "season three" : [/*... */]
    },
    currently_running: true
}

/* 
!   Dot Notation and Square Brackets
    - Keys are considered "strings"
        - not required to have quote

*   Dot Notation
        - Most commonly used
    object.keyName

*   Square Bracket
        - Used primarily to target a multi-word key
    object["key name"]
*/

// console.log(theSimpsons.genre);
// console.log(theSimpsons["genre"]);

// console.log(theSimpsons.seasons["season one"]);

theSimpsons.characters = [
    'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
];

// console.log(theSimpsons);

theSimpsons.currently_running = false;
// console.log(theSimpsons);
