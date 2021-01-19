
 let words = [];
        for(let i = 0; i < 3; i++) {
            let word = prompt("Enter Your 3 Words");
            words[i] = word;
        }
        //looping through each word
        let ul = document.createElement("ul");
        for(let word of words) {
            let li = document.createElement("li");
            li.innerText = word;
            ul.appendChild(li)
        }
        //adding the un-ordered list and button on page1
        document.getElementById("page1").appendChild(ul);
        let button = document.createElement("button");
        button.innerHTML  = "Click";
        button.id = "button1";
        document.getElementById("page1").appendChild(button);


        //creating the second array and its ui elements
        let changedArray = words.map(function(word){
                //splitting character array and swapping the first and last character in the array
                let wordsInArray = word.split("");
                let firstLetter = wordsInArray[0];
                wordsInArray[0] = wordsInArray[wordsInArray.length - 1];
                wordsInArray[word.length - 1] = firstLetter;
                return wordsInArray.join("");

        });
        
        //looping through each newly created list
        ul = document.createElement("ul");
        for(let word of changedArray) {
            let li = document.createElement("li");
            li.innerText = word;
            ul.appendChild(li)
        }
        document.getElementById("page2").appendChild(ul);
        button = document.createElement("button");
        button.innerHTML  = "Go back";
        button.id = "button2";
        document.getElementById("page2").appendChild(button);


        //listener for state 1 button
        document.getElementById("button1").addEventListener("click" , function(){           
            //hiding the first section
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "block";

        });

        //listener for State 2 Button 
        document.getElementById("button2").addEventListener("click" , function(){
            document.getElementById("page2").style.display = "none";
            document.getElementById("page1").style.display = "block";
        });