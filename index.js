function Spa() {
    return (
        
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value = {{users: [{name:'jacob', email:'jacob@mit.edu', password:'secret1', balance:100, currentUser: false}, {name:'john', email:'john@mit.edu', password:'secret2', balance:100, currentUser: false}]}}>
                <Route path="/"                         exact               component = {Home} />
                <Route path="/CreateAccount/"                               component = {CreateAccount} />
                <Route path="/login/"                                       component = {Login} />
                <Route path="/deposit/"                                     component = {Deposit} />
                <Route path="/withdraw/"                                    component = {Withdraw} />
                <Route path="/balance/"                                     component = {Balance} />
                <Route path="/alldata/"                                     component = {AllData} />
            </UserContext.Provider>
        </HashRouter>
        
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)

            /* <Route path="/login/"                                       component = {Login} />
            <Route path="/deposit/"                                     component = {Deposit} />
            <Route path="/withdraw/"                                    component = {Withdraw} />
            <Route path="/balance/"                                     component = {Balance} /> */