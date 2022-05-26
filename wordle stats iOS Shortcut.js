/*
* Credit to Keving Chung for original version, this one works with NYT Wordle
*
* https://blog.kchung.co/how-to-save-your-wordle-scores/amp/
*
*/

wordleState = JSON.stringify(localStorage.getItem('nyt-wordle-state'));
wordleStats = JSON.stringify(localStorage.getItem('nyt-wordle-statistics'));

window.prompt("Copy state", `var data = ${wordleState}; localStorage.setItem('nyt-wordle-state', data);`);
window.prompt("Copy stats", `var data = ${wordleStats}; localStorage.setItem('nyt-wordle-statistics', data);`);

completion(true);

/*
* Copy each (state & stats) to notes or wherever then run the resulting javascript on your new device
*
* If you want to go iOS to iOS don't forget to add completion(true); 
*/
