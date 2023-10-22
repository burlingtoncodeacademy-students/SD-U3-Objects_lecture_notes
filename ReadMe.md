# Notes
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

## Files in this Lesson
- `index.js`

## Resources
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [w3 Schools](https://www.w3schools.com/js/js_objects.asp)

## Challenges
*All challenge solutions will be up to the instructor as to how they are provided.*

---

Adding to an array within an Object.
```js
/* 
    - Use an array method to add another character to the the character array.
    - console.log just the characters from theSimpson object.
*/
```
---

Changing data within the object. The date currently noted is incorrect and needs to be updated. 
```js
/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/
```
---

Creating a more complex object.
```js
/*
!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/
```