# https://blog.kchung.co/how-to-save-your-wordle-scores/amp/

wordleState = JSON.stringify(localStorage.getItem('nyt-wordle-state'));
wordleStats = JSON.stringify(localStorage.getItem('nyt-wordle-statistics'));

window.prompt("Copy state", `var data = ${wordleState}; localStorage.setItem('nyt-wordle-state', data);`);
window.prompt("Copy stats", `var data = ${wordleStats}; localStorage.setItem('nyt-wordle-statistics', data);`);

completion(true);
