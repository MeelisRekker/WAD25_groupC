window.onload = function() {
    //fetch('../../res/json/posts.json')
    fetch('https://api.jsonbin.io/v3/b/690a278b43b1c97be9988aed?meta=false')
        .then((response) => response.json())
        .then(json => {            
            console.log(json);

            //Tried to solve header creation by script, didn't show

            /*
            let header = document.createElement("header");
            let links = document.createElement("div");
            links.className = "links";
            var indeksLink = document.createElement("a");
            var indeksLinkText = document.createTextNode("Home");
            indeksLink.appendChild(indeksLinkText);
            indeksLink.href = "index.html";
            var addPostLink = document.createElement("a");
            var addPostText = document.createTextNode("addPost");
            indeksLink.appendChild(addPostText);
            addPostLink.href = "addPost.html";

            var loginLink = document.createElement("a");
            var userLogoImg = document.createElement('img');
            userLogoImg.setAttribute("src",'img/userLogo.png');
            loginLink.appendChild(userLogoImg);            
            loginLink.href = "Login.html";            

            header.appendChild(loginLink);
            header.appendChild(links);
            links.appendChild(indeksLink);
            links.appendChild(addPostLink);

            document.body.appendChild(header);
            **/


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

                defaultIcon.src = "../../img/userLogo.png";
                likeIcon.src = "../../img/likeIcon.png";
                transportIcon.src = "../../img/carIcon.png";

                nameAndAge.innerText = json[i].posterName +"("+json[i].posterAge+")";
                date.innerText = json[i].postDate;
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
            let footer = document.createElement("footer");
            let emptyDiv = document.createElement("div");
            let teamName = document.createTextNode("By WAD groupC");

            footer.appendChild(emptyDiv);
            footer.appendChild(teamName);
            footer.appendChild(emptyDiv);
        
            document.body.appendChild(footer);

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