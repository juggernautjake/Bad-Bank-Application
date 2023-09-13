//This function checks if a user is signed
//If a user is signed in, the function returns a function to display their account balance
//and allow them to use an input field and submit button to deposit more funds into their account
//If a user is not signed in, then the function returns a function that informs the user
//that they are not signed in and gives a link to the login page
function loadDeposit() {
    //Store UserContext inside of a variable
    const ctx                       = React.useContext(UserContext);
    
    //Check to see if the link to the login has been pressed in order to handle 
    //which navbar element is active
    $(document).ready(function() {
        $('.toLoginFromDeposit').click(function() {
            $('.btn-success.active').removeClass("active");
            $('#login').addClass("active");
            window.location.href = "#login"
        });
    });

    //Variable to keep track of whether a user is logged in or not
    let userCheck = false;
    //Use a for loop to check if a user is signed in.
    for (let i = 0; i < ctx.users.length; i++) {
        if (ctx.users[i].currentUser === true) {
            //Assign userCheck to true if a user is signed in
            userCheck = true;
            //Assign a variable to hold the logged in user's account balance
            let balance = ctx.users[i].balance;
            //Return Deposit() function to display balance and allow the user to make deposits
            //Pass in the balance variable to be displayed
            return Deposit(balance);  
        }
        
    }

    //If no user is signed in, return the toLoginFromDeposit() function to inform the user that
    //they are not signed in and provide a link to the login page
    if (userCheck === false) {
        return toLoginFromDeposit();
    }


}

//This function displays the current user's account balance and allows the user to make deposits
function Deposit(initBalance) {
    //Declare necessary variables and their corresponding variable setters and initialize them
    const [status, setStatus]       = React.useState('');
    const [amount, setAmount]       = React.useState('');
    const [balance, setBalance]     = React.useState(initBalance);
    //Store UserContext inside of a variable
    const ctx                       = React.useContext(UserContext);

    //Disables the deposit submit button if the input field is empty
    $(function() {
        if (!amount){
            $('#submit_btn').addClass('disabled');
        } else if (amount){
            $('#invs_btn').addClass('disabled');
            $('#submit_btn').removeClass('disabled');
        }
    });

    //Either outputs an error message if the user tries to click the submit button while the input
    //field is still empty, or calls the makeDeposit() function if the input field is not empty
    function handleSubmitButton() {
        let invs_btn = document.getElementById('invs_btn');
        if (!amount && !$(invs_btn).hasClass('disabled')){
            setStatus('Error: you must enter an amount of money to deposit');
            setTimeout(() => setStatus(''), 4000);
        } else if (amount){
                makeDeposit();
            }
    }

        
    //Checks to make sure the input is a number greater than 0
    //If the input is not a number greater than 0, gives an error message
    function validateDeposit(amount) {

        const numbers = /^[0-9]+$/;
        if (amount <= 0 || !amount.match(numbers)) { 
            setStatus('Error: You must enter a number greater than zero');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        return true;
    }

    //Retrieves the user's current balance and adds the users input to it
    //Then updates the user's account balance and displays the new balance
    //Also informs the user that they successfully made a deposit and
    //disables the submit button once a deposit has been made
    function makeDeposit() {
        if (validateDeposit(amount)) {
            for (let i = 0; i < ctx.users.length; i++) {
                if (ctx.users[i].currentUser === true) {
                    ctx.users[i].balance = parseFloat(ctx.users[i].balance) + parseFloat(amount);
                    setAmount('');
                    setBalance(ctx.users[i].balance);
                    setStatus('Success: you successfully deposited $' + amount);
                    setTimeout(() => setStatus(''), 3000);
                    $('#submit_btn').addClass('disabled');
                    break;  
                }
            }
        }
    }

    //Returns a card component displaying the current user's balance and provides a input field and button for submitting a withdrawal
    return (
        <Card
            bgcolor="warning"
            header="Deposit"
            status={status}
            body={(
                <>
                Balance:&emsp; &emsp; &emsp; ${balance}<br/><br/>
                Deposit Amount:<br/>
                <input autoComplete="off" type="input" className="form-control" id="amount" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <span onClick={handleSubmitButton} className="invs_btn" id="invs_btn">
                    <DepositButton type="submit" className="btn btn-light"/>
                </span>
                </>
            )}
        />
    )


}



//This function is called when there is no user signed in
//It returns a card element that informs the user that they are not signed in
//and provides a link that routes the user to the login page
function toLoginFromDeposit() {

    return (
        <Card
            bgcolor="warning"
            header="Error: you are not logged into an account"
            body={(
                <>
                The link below will direct you to the login page!<br/>
                <a type="submit" className="btn btn-warning fw-bolder toLoginFromDeposit" id='toLoginFromDeposit' href="#/login/">
                    -&gt; Go to login page &lt;-
                </a>
                </>
            )}
        />
    )
}


export {loadDeposit, Deposit, toLoginFromDeposit}