//This is the main function for the entire application
//It checks which navbar element should be active and handls the routing between
//all of the pages
function Spa() {

    //Keeps navbar link to current page active on initial load
    $(document).ready(function () {
        var fullLocation = window.location.href
        var location = '';
        var id = '';
        var count = 0;
        for(let i = fullLocation.length - 1; i >= 0; i--){
            if(fullLocation[i] === "/"){
                count++;
                if(count === 2){
                    location = fullLocation.substring(i - 1, fullLocation.length)
                    break;
                }
            }
        }

        id = location;
        for(let n = 0; n < 2; n++){
            id = id.replace('/', '')
        }


        if ($("ul li a[href='" + location + "']").length) {
            $('.btn-success.active').removeClass("active");
            $(id).addClass("active");    
        } else {
        }
    });

    
    //The next two anonymous functions keep navbar link to the current page active 
    //except on initial application load
    $(document).ready(function() {
        $('.btn-success').click(function() {
            $('.btn-success.active').removeClass("active");
            $(this).addClass("active");
        });
    });

    $(document).ready(function() {
        $('.btn-logo-success').click(function() {
            $('.btn-success.active').removeClass("active");
            $('#home').addClass("active");
        });
    });


    return (
        
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value = {{users: [{name:'jacob', email:'jacob@mit.edu', password:'secret1', balance:100, currentUser: false}, {name:'john', email:'john@mit.edu', password:'secret2', balance:100, currentUser: false}]}}>
                <Route path="/"                         exact               component = {Home} />
                <Route path="/createaccount/"                               component = {CreateAccount} />
                <Route path="/login/"                                       component = {loadLogin} />
                <Route path="/deposit/"                                     component = {loadDeposit} />
                <Route path="/withdraw/"                                    component = {loadWithdraw} />
                <Route path="/balance/"                                     component = {loadBalance} />
                <Route path="/alldata/"                                     component = {loadAllData} />
            </UserContext.Provider>
        </HashRouter>
        
    );
}

//Useing ReactDOM.render will allow use to rend the Spa() function and the element with the
//index.html file that has the 'root' id
//This is the main mechanism for making the single page application fulfill its purpose
ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)
