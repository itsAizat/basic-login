let dbUsers = [
    {
        username: "aizat",
        password: "123456",
        name: "Aizat",
        email: "aizat@utem.edu.my"
    },
    {
        username: "amsyar",
        password: "654321",
        name: "Amsyar",
        email: "amsyar@utem.edu.my"
    },
    {
        username: "mail",
        password: "135789",
        name: "Mail",
        email: "mail@utem.edu.my"
    }
]
function login(reqUsername, reqPassword){
    let matchUser = dbUsers.find(
        user => user.username == reqUsername
    )
    console.log(matchUser)
    
}
    
// try login
login("aizat","123456")