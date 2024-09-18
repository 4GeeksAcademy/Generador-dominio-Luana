/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = ["com", "uy"];

  for (let i = 0; i < pronoun.length; i++) {
    // console.log(pronoun[i]);
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < ext.length; e++) {
          console.log(`${pronoun[i]}.${adj[a]}${noun[n]}.${ext[e]}`);
        }
      }
    }
  }
};
