
//This function returns html code for the navbar that will be displayed at all times
function NavBar(){
  const [email, setEmail]         = React.useState();
  const [name, setName]           = React.useState();
  const ctx                       = React.useContext(UserContext);
  


    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a className="nav-link navbar-text" href='#'>
          <button className="fw-bold btn-lg btn-logo-success btn shadow-none navbar-text" data-toggle="tooltip" data-placement="top" title="Click this link to go to the online bank's home page!">
            Serenity Bank
          </button>
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link navbar-text" href='#'>
                <button className="btn-success btn shadow-none navbar-text active home" id='home' data-toggle="tooltip" data-placement="top" title="Click this link to go to the online bank's home page!">
                  Home
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href='#/createaccount/'>
                <button className="btn-success btn shadow-none navbar-text createaccount" id='createaccount' data-toggle="tooltip" data-placement="top" title="Click this link to go to the account creation page. On this page you will enter a username, email, and password. Once this is completed, you will have officially created an account with our online bank!"> 
                  Create Account
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href='#/login/'>
                <button className="btn-success btn shadow-none navbar-text login" id='login' data-toggle="tooltip" data-placement="top" title="Click this link to go to the online bank's login page! From there you can log into your account!">
                  Login
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href='#/deposit/'>
                <button className="btn-success btn shadow-none navbar-text deposit" id='deposit' data-toggle="tooltip" data-placement="top" title="Click this link to go to the online bank's deposit page! From there you can deposit funds into your account!">
                  Deposit
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href='#/withdraw/'>
                <button className="btn-success btn shadow-none navbar-text withdraw" id='withdraw' data-toggle="tooltip" data-placement="top" title="Click this link to go to the online bank's withdrawal page! From there you can withdraw funds from your account!">
                  Withdraw
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href='#/alldata/'>
                <button className="btn-success btn shadow-none navbar-text alldata" id='alldata' data-toggle="tooltip" data-placement="top" title="Click this link to go to the online bank's data page! From there you can check out the data for all of the online bank's users">
                  AllData
                </button>
              </a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }



 