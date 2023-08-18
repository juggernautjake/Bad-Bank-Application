function Home() {
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState(UserContext.Provider);
    const [name, setName]           = React.useState();
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    

    
    return (
        <Card 
            bgcolor ="warning"
            txtcolor ="black"
            header = "BadBank Landing Page"
            title="Welcome to the bank"
            text="You can use this bank"
            body={(<>
                <img src="bank.png" className="img-fluid" alt="Responsive image"/>
                </>)}
            
        />
    );
}


