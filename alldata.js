
//This function retrieves all of the user data and formats it
//This function then returns the Alldata function and passes the formatted data to it
function loadAllData() {
    //Store userContext in a varable
    const ctx                       = React.useContext(UserContext);

    //Create an array varaible which will be used to store the formated user data
    let users = []
    //Use a for loop to retrieve and formats it
    for(let i = 0; i < ctx.users.length; i++){
    users.push("Name: " + ctx.users[i].name + "\nEmail: " + 
    ctx.users[i].email + "\nPassword: " + ctx.users[i].password + 
    "\nbalance: $" + JSON.stringify(ctx.users[i].balance) + "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
    }
    //Return the output of of Alldata() when the users array is passed into it
    return (AllData(users))

}

//This function takes a parameter and returns a HTML card 
//component which will properly display all of the user data
function AllData(users) {
    //Return a card component with all of the user data formatted on it
    return (
        <Card
            bgcolor="warning"
            position="absolute"
            header="AllData"
            body={(
                <>
                <pre className="fw-bold" id="users">{users}</pre>
                </>
            )}
        />
    )
}

export {loadAllData, AllData}