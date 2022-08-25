document.querySelector("#domain").addEventListener("click", () => {
  document.querySelector("#names").innerHTML = domainName();
});

let pronoun = ['the','our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
    

function domainName (){
    let a=0;
    let b=0;
    let c=0;
    
    let temp = "";
    
    for (let a=0;a<pronoun.length;a++)
    {
        for (let b=0;b<adj.length;b++)
        {
            for (let c=0;c<noun.length;c++)
            {
                temp += pronoun[a] + adj[b] + noun[c] + ".com <br>";
                temp += pronoun[a] + adj[b] + noun[c] + ".net <br>";
                temp += pronoun[a] + adj[b] + noun[c] + ".us <br>";
                temp += pronoun[a] + adj[b] + noun[c] + ".io <br>";
            }
        }
    }
    return temp;
}