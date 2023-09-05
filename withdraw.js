function Withdraw() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [amount, setAmount]       = React.useState('');
    const ctx                       = React.useContext(UserContext);


    function validateWithdrawal(email, password) {
        //let userAmount = ctx.users.find(h => h.amount === amount)


        if (amount > ctx.users[1].balance) { 
            setStatus('Error: This account does not have enough funds to withdraw that amount');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

    
        return true;
    }


    function makeWithdrawal() {
        var map = {};
        if (validateWithdrawal(amount)) {
            ctx.users[1].balance = parseFloat(ctx.users[1].balance) - parseFloat(amount);
            console.log(ctx.users[1].balance)
            setAmount('');
            return ctx.users[1].balance;
        }
    }


    return (
        <Card
            bgcolor="warning"
            header="Withdraw"
            status={status}
            body={(
                <>
                Balance:&emsp; &emsp; &emsp; ${ctx.users[1].balance}<br/><br/>
                Withdrawal Amount:<br/>
                <input type="input" className="form-control" id="amount" placeholder="Withdraw Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={makeWithdrawal}>Withdraw</button>
                </>
            )}
        />
    )


}