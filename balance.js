//This function checks if a user is signed in
//If a user is signed in, it then retrieves the current user's balance info
//and passes it into the Balance() function
//If a user is not signed in, it will return the toLoginFromBalance() function
//where the user is redirected to the login page
function loadBalance() {
    //Store UserContext in a varable
    const ctx                       = React.useContext(UserContext);

    //Use JQuery to change which navbar element is active when the element
    //with the toLoginFromBalance className is clicked
    $(document).ready(function() {
        $('.toLoginFromBalance').click(function() {
            console.log($(this).attr('class'))
            $('.btn-success.active').removeClass("active");
            $('#login').addClass("active");
            window.location.href = "#login"
        });
    });

    //Create boolean variable to keep track of whether or not a user is signed in
    let userCheck = false;
    //Use a for loop to check if a user is signed in or not
    //If a user is signed in, retrieve that user's balance and store it in a variable
    //Once the user's balance has been stored in a varable, pass the variable into the
    //Balance() function and return it.
    for (let i = 0; i < ctx.users.length; i++) {
        if (ctx.users[i].currentUser === true) {
            userCheck = true;
            let balance = ctx.users[i].balance;
            return Balance(balance);  
        }
        
    }

    //If no user is signed in, return the toLoginFromBalance() function
    if (userCheck === false) {
        return toLoginFromBalance();
    }

}


//This function takes a parameter and returns a HTML card
//component which will properly display the current user's balance
function Balance(initBalance) {
    //Use the parameter initBalance to set the state of the balance.
    //This will set the balance to the current user's balance
    const [balance, setBalance]     = React.useState(initBalance);
    //Store userContext in a varable
    const ctx                       = React.useContext(UserContext);

    //Return a card component with the current user's balance formatted on it
    return (
        <Card
            bgcolor="warning"
            header="Balance"
            body={(
                <>
                Current Balance:&emsp; &emsp; &emsp; ${balance}<br/><br/>
                </>
            )}
        />
    )


}


//This function returns a HTML card component that will infrom the user
//that they are not logged into an account abd will contain a link to the
//login page.
function toLoginFromBalance() {
    //Return a card component with a link to the login page
    return (
        <Card
            bgcolor="warning"
            header="Error: you are not logged into an account"
            body={(
                <>
                The link below will direct you to the login page!<br/>
                <a type="submit" className="btn btn-warning fw-bolder toLoginFromBalance" id='toLoginFromBalance' href="#/login/">
                    -&gt; Go to login page &lt;-
                </a>
                </>
            )}
        />
    )


}

export {loadBalance, Balance, toLoginFromBalance}