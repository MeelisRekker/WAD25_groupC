window.onload = function() {
    //fetch('../../res/json/posts.json')
    fetch('https://api.jsonbin.io/v3/b/690a278b43b1c97be9988aed?meta=false')
        .then((response) => response.json())
        .then(json => {            
            console.log(json);
            
            for(i=0; i<json.length; i++){
                let defaultIcon = document.createElement("img");
                let likeIcon = document.createElement("img");
                let transportIcon = document.createElement("img");

                let post = document.createElement("div");
                let postHead = document.createElement("div");
                let nameAndAge = document.createElement("p");
                let date = document.createElement("p");
                let postMessage = document.createElement("p");
                let img = this.document.createElement("img");
                let designation = this.document.createElement("text");

                if (json[i].posterGender == "Female"){
                    defaultIcon.src = "../assets/img/female-icon-7893.png";
                } else if (json[i].posterGender == "Male") {
                    defaultIcon.src = "../assets/img/male-icon-7907.jpg";
                } else {
                    defaultIcon.src = "../assets/img/userLogo.png";
                }
                likeIcon.src = "../assets/img/likeIcon.png";
                transportIcon.src = "../assets/img/carIcon.png";

                nameAndAge.innerText = json[i].posterName +"("+json[i].posterAge+")";
                date.innerText = json[i].postDate;
                designation.innerText = json[i].posterDesignation;
                postMessage.innerText = json[i].postMessage;

                postHead.appendChild(defaultIcon);
                postHead.appendChild(nameAndAge);
                postHead.appendChild(date);
                post.appendChild(postHead);

                post.className = "post";
                likeIcon.className = "like";
                transportIcon.className = "transport";
                date.className = "date";
                postHead.className = "postHead";
                postMessage.className = "postMessage";

                if(json[i].image != null){
                    img.src = json[i].image
                    post.appendChild(img)
                }

                if(json[i].posterTransport == "yes"){
                    transportIcon.style.backgroundColor = "green";
                }else{
                    transportIcon.style.backgroundColor = "red";
                }

                post.appendChild(postMessage);
                post.appendChild(likeIcon);
                post.appendChild(transportIcon);
                post.appendChild(designation);

                document.getElementById("posts").appendChild(post)
            }
        })
        .catch(err => {
            let errorDiv = document.createElement("div");
            errorDiv.className = 'errorPost';
            errorDiv.innerText = "error";
            document.body.appendChild(errorDiv);
        }) 
        .finally(() => {         
            //Add listener to userLogo image
            document.getElementById('userLogo').addEventListener('click', toggleDropdown);
        })
    
        //Visibility event
        function toggleDropdown(event) {
            event.preventDefault(); //Disable link on default
            const dropdownMenu = document.getElementById('dropdownMenu');            
            //Toggle classList attribute
            dropdownMenu.classList.toggle('show');
        }
        
        //Add listener to close dropdown when clicked outside of its area
        window.addEventListener('click', function(event) {
            const dropdownMenu = document.getElementById('dropdownMenu');
            const userLogo = document.getElementById('userLogo');
    
            //Boolean logic check if click was outside of dropdown menu area
            if (!userLogo.contains(event.target) && !dropdownMenu.contains(event.target)) {
                //Remove classList attribute on successfull boolean check
                dropdownMenu.classList.remove('show');
            }
    });
}