//Import necessary React functionality to make the app work
const Route             = ReactRouterDOM.Route;
const Link              = ReactRouterDOM.Link;
const HashRouter        = ReactRouterDOM.HashRouter;
//Create context
const UserContext       = React.createContext(null);


//This function defines a card component that can be used throughout the application
function Card(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth:"18rem", display: "inline-block", position: "fixed",
        top: "30%",
        left: "50%",
        "margin-top": "-50px",
        "margin-left": "-100px"
      }}>
            <div className="card-header text-dark">{props.header}</div>
            <div className="card-body text-dark">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div className='text-danger' id='createStatus'><br/>{props.status}</div>)}
            </div>
        </div>
    )
}

//This function defines a input component that can be used throughout the application
function Input(props) {
    const { onChange, value, placeholder } = props;
    return (
        <input
            autoComplete="off"
            type="input"
            className="form-control"
            id="name_field"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength="50"
        />
    );
  }
  
  //This function defines a button component that can be used on the account creation page
  function AccountCreationButton(props) {

    const { disabled, onChange, value, state, text } = props;
    return (
      <input disabled={disabled} type="submit" value="-&gt; Create Account &lt;-" className="btn btn-light fw-bolder" id="submit_btn" onChange={onChange}/>
    );
  }

  //This function defines a button component that can be used on the login page
  function LoginButton(props) {

    const { disabled, onChange, value, state, text } = props;
    return (
      <input disabled={disabled} type="submit" value="-&gt; Login &lt;-" className="btn btn-light fw-bolder" id="toHome" onChange={onChange}/>
    );
  }

  //This function defines a button component that can be used on the deposit page
  function DepositButton(props) {

    const { disabled, onChange, value, state, text } = props;
    return (
      <input disabled={disabled} type="submit" value="-&gt; Deposit &lt;-" className="btn btn-light fw-bolder" id="submit_btn" onChange={onChange}/>
    );
  }
  //This function defines a button component that can be used on the withdrawal page
  function WithdrawButton(props) {

    const { disabled, onChange, value, state, text } = props;
    return (
      <input disabled={disabled} type="submit" value="-&gt; Withdraw &lt;-" className="btn btn-light fw-bolder" id="submit_btn" onChange={onChange}/>
    );
  }


