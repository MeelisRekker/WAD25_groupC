window.onload = function() {
    fetch('../../res/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for(i=0; i<json.length; i++){
                let defaultIcon = document.createElement("img");
                let likeIcon = document.createElement("img");

                let post = document.createElement("div");
                let postHead = document.createElement("div");
                let date = document.createElement("p");
                let postMessage = document.createElement("p");
                let img = this.document.createElement("img");

                defaultIcon.src = "../../img/userLogo.png";
                likeIcon.src = "../../img/likeIcon.png";

                date.innerText = json[i].postDate;
                postMessage.innerText = json[i].postMessage;

                postHead.appendChild(defaultIcon);
                postHead.appendChild(date);
                post.appendChild(postHead);

                post.className = "post";
                likeIcon.className = "like";
                date.className = "date";
                postHead.className = "postHead";
                postMessage.className = "postMessage";

                if(json[i].image != null){
                    img.src = json[i].image
                    post.appendChild(img)
                }

                post.appendChild(postMessage);
                post.appendChild(likeIcon);

                document.getElementById("posts").appendChild(post)
            }
        })


}