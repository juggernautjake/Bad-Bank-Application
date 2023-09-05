function Login() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const ctx                       = React.useContext(UserContext);


    function validateLogin(email, password) {

        let userEmail = ctx.users.find(g => g.email === email);
        let userPassword = ctx.users.find(h => h.password === password);
        let currentUser = [''];

        for(let i = 0; i < ctx.users.length; i++) {
            if(ctx.users[i].email === email) {
                currentUser = (ctx.users[i]);
            }
        }


        if (!email && !password) { 
            setStatus('Error: No email or password given');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (!email) {
            setStatus('Error: No email given');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (!password) {
            setStatus('Error: No password given');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (userEmail === undefined && userPassword === undefined) {
            setStatus('Error: Ivalid email and password');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (userEmail === undefined){
            setStatus('Error: Ivalid email');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (userPassword === undefined) {
            setStatus('Error: Ivalid password');
            setTimeout(() => setStatus(''), 3000);
            return false; 
        } else if (userEmail.password !== userPassword.password) {
            setStatus('Error: Ivalid password');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

    
        return  [true, currentUser];
    }


    function handleLogin() {
        if (validateLogin(email, password)){
            
            window.location.href = "#";
        }

    }


    return (
        <Card
            bgcolor="warning"
            position="absolute"
            header="Login"
            status={status}
            body={(
                <>
                Email address:<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                New password:<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                </>
            )}
        />
    )


}