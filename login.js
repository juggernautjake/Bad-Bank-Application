//This function either displays a login page or a page informing the user
//that they are already signed by checking whether or not a user is currently
//signed in
function loadLogin() {
    //Store UserContext into a variable
    const ctx                       = React.useContext(UserContext);
    

    //Use a variable to keep track of whether a user is singed in or not
    let userCheck = false;

    //Use a for loop to check if a user is signed in or not
    //If a user is signed in, retun the alreadyLoggedIn() function to inform
    //the user that they are already signed in and provide a button to log 
    //themselves out
    for (let i = 0; i < ctx.users.length; i++) {
        if (ctx.users[i].currentUser === true) {
            userCheck = true;
            return alreadyLoggedIn();  
        }
        
    }

    //If no user is signed in, retrun the Login() function to allow the user
    //to login
    if (userCheck === false) {
        return Login();
    }


}



//This function provides two input fields and a login button and allows the user to login
//The function handles authentication to make sure the user is inputting valid information
function Login() {
    //Create variables and variable setters
    const [status, setStatus]       = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [currentUser, setUser]   = React.useState('');
    const ctx                       = React.useContext(UserContext);


    //Disables the login button if either of the input fiels are left empty
    $(function() {
        if (!email && !password){
            $('#toHome').addClass('disabled');
        } else if (email && password){
            $('#invs_btn').addClass('disabled');
            $('#toHome').removeClass('disabled');
        }
    });



    //This function checks if the user inputs match any of the users' info already stored on the application
    //Also informs the user if either of the inputs were invalid
    function validateLogin(email, password) {

        let userEmail = ctx.users.find(g => g.email === email);
        let userPassword = ctx.users.find(h => h.password === password);

        for(let i = 0; i < ctx.users.length; i++) {
            if(ctx.users[i].email === email && ctx.users[i].password === password) {
                ctx.users[i].currentUser = true;
            }
        }

        if (!email && !password) { 
            setStatus('Error: no email or password given');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (!email) {
            setStatus('Error: no email given');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (!password) {
            setStatus('Error: no password given');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (userEmail === undefined && userPassword === undefined) {
            setStatus('Error: invalid email and password');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (userEmail === undefined){
            setStatus('Error: innvalid email');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (userPassword === undefined) {
            setStatus('Error: invalid password');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (userEmail.password !== userPassword.password) {
            setStatus('Error: invalid password');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        //If the inputs pass all of the checks, set the currentUser to true
        return true;
    }

    //This function calls the validate() function and passes the user's inputs into it
    //If the user's inputs are validated, the user is rerouted to the home page
    function handleLogin() {
        if (validateLogin(email, password)){
            $('.btn-success.active').removeClass("active");
            $('#home').addClass("active");
            window.location.href = "#";
        }

    }

    //Returns a card component which displays two input fields and a login button
    return (
        <Card
            bgcolor="warning"
            position="absolute"
            header="Login"
            status={status}
            body={(
                <>
                Email address:<br/>
                <input autoComplete="off" type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                New password:<br/>
                <input autoComplete="off" type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                {/* <button type="submit" className="btn btn-light fw-bolder toHome" id="toHome" onClick={handleLogin}>-&gt; Login &lt;-</button> */}
                <span onClick={handleLogin} className="invs_btn" id="invs_btn">
                    <LoginButton type="submit" className="btn btn-light fw-bolder toHome" id="toHome"/>
                </span>
                </>
            )}
        />
    )


}




//This function is called if a user is already logged into the application
function alreadyLoggedIn() {
    const [status, setStatus]       = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [currentUser, setUser]    = React.useState('');
    const ctx                       = React.useContext(UserContext);




    
    function logOut(){
    
        for(let i = 0; i < ctx.users.length; i++) {
            if(ctx.users[i].currentUser === true) {
                ctx.users[i].currentUser = false;
                window.location.href = "#login"
                break;
            }
        }
    }

    return (
        <Card
            bgcolor="warning"
            header="Already Logged In"
            body={
                <>
                You are already logged in!<br/>Click the link below to log out.<br/>
                <a type="submit" className="btn btn-warning fw-bolder logOut" id="logOut" onClick={logOut}>
                    -&gt; Log Out &lt;-
                </a>
                </>
            }
        />
    )
}

export {loadLogin, Login, alreadyLoggedIn}