const Route             = ReactRouterDOM.Route;
const Link              = ReactRouterDOM.Link;
const HashRouter        = ReactRouterDOM.HashRouter;
const UserContext       = React.createContext(null);

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
