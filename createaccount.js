//This function takes three inputs, name, email, and password,
//and checks to make sure the inputs are valid
//If the inputs are valid, then a new profile is created and the
//user is notified that they successfully created an account
function CreateAccount() {
    //create necessary variables and variable setters using React
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    //Store UserContext in a varable
    const ctx                       = React.useContext(UserContext);

    //Use JQuery to disable the button element with the 
    //submit_btn id on page load
    //Also, enable an invisible span element that can still be clicked
    //even when the button element is disabled
    $(function() {
        if (!name && !email && !password){
            $('#submit_btn').addClass('disabled');
        } else if (name && email && password){
            $('#invs_btn').addClass('disabled');
            $('#submit_btn').removeClass('disabled');
        }
    });

    //This function checks to see if one or more fields have been left empty
    //If one or more fields has been left empty then it notifies the user of the issue
    //and makes sure that the -> Create Account <- button stays disabled
    function handleSubmitButton() {
        let invs_btn = document.getElementById('invs_btn');
        if (!name && !email && !password && !$(invs_btn).hasClass('disabled')){
            setStatus('Error: one or more of the fields have been left empty. Please provide the necessary information to proceed with your account creation.');
            setTimeout(() => setStatus(''), 4000);
        } else if (name && email && password){
                handleCreate();
            }
    }




    //This function returns true or false depending on whether or not the input is valid
    function validate(field, label) {
        //Variable that defines the necessary format for the email address input field
        var mailFormat =  /\S+@\S+\.\S+/;
        //Check if the user entered a name into the name input field
        if (label === "name" && !field) {
            setStatus('Error: please enter a ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } 
        //Check if the user entered an email in the email input field
        else if (label === "email" && !field) {
            setStatus('Error: please enter an ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } 
        //Check if the user entered a password in the password input field
        else if (label === "password" && !field) {
            setStatus('Error: please enter a ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } 
        // Check if the user has entered a valid email in the email input field
        //using the mailFormat variable
        else if (label === 'email' && !field.match(mailFormat)) {
            setStatus('Error: invalid ' + label + ' address format');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } 
        //Check if the user entered a password in the password input field
        //that is 8 or more characters long
        else if(label === 'password' && field.length < 8) {
            setStatus('Error: password must be at least 8 characters long');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        //Use a for loop to check if the user enetered an email or password
        //that is already in use
        for(let i = 0; i < ctx.users.length; ++i) {
            if(label === 'email' && ctx.users[i].email === field) {
                setStatus('Error: email is already being used');
                setTimeout(() => setStatus(''), 3000);
                return false;
            } else if(label === 'password' && ctx.users[i].password === field) {
                setStatus('Error: password is already being used');
                setTimeout(() => setStatus(''), 3000);
                return false;
            }
        }

        //If the user entered inputs which pass all of the validation checks, return true
        return true;
    }


    
    //This function envokes the validate() function with the user's inputs as parameters to be validated
    //If the inputs are all valid, the new user data is pushed to UserContext and the show variable is set
    //to false
    function handleCreate() {
        if (!validate(name,         'name'))        return;
        if (!validate(email,        'email'))       return;
        if(!validate(password,      'password'))    return;
        if (validate(name, 'name') && validate(email, 'email') && validate(password, 'password')){
            ctx.users.push({name, email, password, balance:100, currentUser: false});
            setShow(false);
        }
    }



    //This function clears the input fields once if the user decides to create another account
    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    //Return a card component that either shows three input fields and a account creation button,
    //or shows a success message with a button that can be used to go back and creat another account
    return (
        <Card
            bgcolor="warning"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                Name:<br/>
                <Input type="input" className="form-control" id="name_field" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
                Email address:<br/>
                <Input type="input" className="form-control" id="email_field" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                New password:<br/>
                <Input type="input" className="form-control" id="password_field" placeholder="Enter new password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <span onClick={handleSubmitButton} className="invs_btn" id="invs_btn">
                    <AccountCreationButton type="submit" className="btn btn-light fw-bolder" id="submit_btn"/>
                </span>
                </>
            ):(
                <>
                <h5>Success!</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another Account</button>
                </>
            )}
        />
    )
}


export {CreateAccount}