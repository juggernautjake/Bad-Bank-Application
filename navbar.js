

function NavBar(){
  const [email, setEmail]         = React.useState();
  const [name, setName]           = React.useState();
  const ctx                       = React.useContext(UserContext);

    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a className="nav-link navbar-text" href="#">
          <button className="fw-bold btn-lg btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
            BadBank
          </button>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  Home
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#/CreateAccount/">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  Create Account
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#/login/">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  Login
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#/deposit/">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  Deposit
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#/withdraw/">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  Withdraw
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#/balance/">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  Balance
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#/alldata/">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  AllData
                </button>
              </a>
            </li>          
          </ul>
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <a className="nav-link navbar-text" href="#/profile/">
                <button className="btn-success btn shadow-none navbar-text" focus type="button" id="deposit">
                  My Account
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      </>
    );
  }



 