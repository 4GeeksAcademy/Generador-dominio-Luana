


//write your code here
console.log("Hello Rigo from the console!");
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "puedes"];
let ext = ["com", "uy", "es"];

for (let i = 0; i < pronoun.length; i++) {
  // console.log(pronoun[i]);
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < ext.length; e++) { 
        if (noun[n].endsWith(ext[e])){
          console.log(`${pronoun[i]}${adj[a]}${noun[n].slice(0, -ext[e].length)}.${ext[e]}`);
        }
        console.log(`${pronoun[i]}.${adj[a]}${noun[n]}.${ext[e]}`);
      }
    }
  }
}
