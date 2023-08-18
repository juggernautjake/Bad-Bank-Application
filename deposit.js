function Deposit() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [amount, setAmount]       = React.useState('');
    const ctx                       = React.useContext(UserContext);


    function validateDeposit(email, password) {
        //let userAmount = ctx.users.find(h => h.amount === amount)


        if (amount <= 0) { 
            setStatus('Error: You must enter a number greater than zero');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

    
        return true;
    }


    function makeDeposit(amount) {
        console.log(ctx.users[1].balance);
        ctx.users[1].balance += amount;
        console.log(ctx.users[1].balance);
        return ctx.users[1].balance;
    }

    function displayBalance(amount) {
        //let userAmount = ctx.users.find(h => h.amount === amount)
        return userAmount;
    }


    return (
        <Card
            bgcolor="warning"
            header="Deposit"
            status={status}
            body={(
                <>
                Balance:&emsp; &emsp; &emsp; ${ctx.users[1].balance}<br/><br/>
                Deposit Amount:<br/>
                <input type="input" className="form-control" id="balance" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={makeDeposit}>Deposit</button>
                </>
            )}
        />
    )


}
