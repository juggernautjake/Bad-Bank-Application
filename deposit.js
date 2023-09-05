function Deposit() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [amount, setAmount]       = React.useState('');
    const ctx                       = React.useContext(UserContext);


    function validateDeposit(amount) {


        if (amount <= 0) { 
            setStatus('Error: You must enter a number greater than zero');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

    
        return true;
    }


    function makeDeposit() {
        var map = {};
        if (validateDeposit(amount)) {
            ctx.users[1].balance = parseFloat(ctx.users[1].balance) + parseFloat(amount);
            setAmount('');
            return ctx.users[1].balance;
        }
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
                <input type="input" className="form-control" id="amount" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={makeDeposit}>Deposit</button>
                </>
            )}
        />
    )


}