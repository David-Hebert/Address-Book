let userArray = [];

const user = () => {
    const numUsers = document.getElementById('numUsers').value
    userArray = [];
    fetch(`https://randomuser.me/api/?results=${numUsers}`)
        .then(res => res.json())
        .then(user => {
            for (let i =0; i < user.results.length; i++) {
                userArray.push(user.results[i])
            }
            //console.log(userArray);
        })
        .then(() => displayUser(userArray))
};

const displayUser = (userArray) => {
    let userResults = document.getElementById("userResults")
    for (let i in userArray) {
        let userName = `${userArray[i].name.first} ${userArray[i].name.last}`
        let userImage = userArray[i].picture.medium
        let userDob =  userArray[i].dob.date

        let li = document.createElement("li")
        li.innerHTML = userName
        userResults.append(li)

        let img = document.createElement("img");
        img.src = userImage
        userResults.append(img)

        let btn = document.createElement("button");
        btn.innerHTML = "More Info";
        userResults.appendChild(btn);
    }

    const moreInfo = () => {
        
    }
};
