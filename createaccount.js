function CreateAccount() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const ctx                       = React.useContext(UserContext);

    function validate(field, label) {
        console.log(field);
        var mailFormat =  /\S+@\S+\.\S+/;
        if (label === "name" && !field) {
            setStatus('Error: please enter a ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (label === "email" && !field) {
            setStatus('Error: please enter an ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (label === "password" && !field) {
            setStatus('Error: please enter a ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (label === 'email' && !field.match(mailFormat)) {
            alert("Error: invalid email address format");
            return false;
        } if(label === 'password' && field.length < 8) {
            setStatus('Error: password must be at least 8 characters long');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        for(let i = 0; i < ctx.users.length; ++i) {
            if(label === 'email' && ctx.users[i].email === field) {
                console.log(field + " 1");
                console.log(ctx.users[i].email + " 1\n");
                setStatus('Error: email is already being used');
                setTimeout(() => setStatus(''), 3000);
                return false;
            } else if(label === 'password' && ctx.users[i].password === field) {
                console.log(field + " 1");
                console.log(ctx.users[i].password + " 1\n");
                setStatus('Error: password is already being used');
                setTimeout(() => setStatus(''), 3000);
                return false;
            }
        }


        return true;
    }


    

    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name,         'name'))        return;
        if (!validate(email,        'email'))       return;
        if(!validate(password,      'password'))    return;
        if (validate(name, 'name') && validate(email, 'email') && validate(password, 'password')){
            ctx.users.push({name, email, password, balance:100, currentUser: false});
            setShow(false);
        }
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    

    return (
        <Card
            bgcolor="warning"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                Name:<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
                Email address:<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                New password:<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter new password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                {/* Confirm password:<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter new password" value={password} onChange={e => checkPassword(e.currentTarget.value)}/><br/> */}
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
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
