
 let firstArray = [];
        for(let i = 0; i < 3; i++) {
            let word = prompt("Enter 3 Words, I'll swap the first & last character");
            firstArray[i] = word;
        }
        //looping through each word
        let ul = document.createElement("ul");
        for(let word of firstArray) {
            let li = document.createElement("li");
            li.innerText = word;
            ul.appendChild(li)
        }
        //ul and button on page1
        document.getElementById("page1").appendChild(ul);
        let button = document.createElement("button");
        button.innerHTML  = "Click";
        button.id = "button1";
        document.getElementById("page1").appendChild(button);


        //creating 2nd array and ui elements
        let changedArray = firstArray.map(function(word){
                //splitting character array and swapping the first and last character in the array
                let charInArray = word.split("");
                let firstLetter = charInArray[0];
                charInArray[0] = charInArray[charInArray.length - 1];
                charInArray[word.length - 1] = firstLetter;
                return charInArray.join("");

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


        //listener for 1st button
        document.getElementById("button1").addEventListener("click" , function(){           
            //hiding page1
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "block";

        });

        //listener for 2nd Button 
        document.getElementById("button2").addEventListener("click" , function(){
            //hiding page2
            document.getElementById("page2").style.display = "none";
            document.getElementById("page1").style.display = "block";
        });