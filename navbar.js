

function NavBar(){
  const [email, setEmail]         = React.useState();
  const [name, setName]           = React.useState();
  const ctx                       = React.useContext(UserContext);

    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <button className="btn-success btn shadow-none">
          <a className="navbar-brand" href="#">BadBank</a>
        </button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn-success btn shadow-none">
                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-success btn shadow-none">
                <a className="nav-link" href="#/login/">Login</a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-success btn shadow-none">
                <a className="nav-link" href="#/deposit/">Deposit</a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-success btn shadow-none">
                <a className="nav-link" href="#/withdraw/">Withdraw</a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-success btn shadow-none">
                <a className="nav-link" href="#/balance/">Balance</a>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-success btn shadow-none">
                <a className="nav-link" href="#/alldata/">AllData</a>
              </button>
            </li>          
          </ul>
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
            <button className="btn-success btn shadow-none" >
                <a className="nav-link" href="#login">
                  My Account
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      </>
    );
  }

 