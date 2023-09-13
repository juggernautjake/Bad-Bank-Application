//This function returns a card component which acts as the landing/home page for the application
//The card component greets the user and displays a bank image as well as the bank's name
function Home() {


    return (
        <Card 
            bgcolor ="warning"
            txtcolor ="black"
            header = "Serenity Bank Home"
            title="Welcome to Serenity bank"
            text="You can use this bank"
            body={(<>
                <img src="bank.png" className="img-fluid" alt="Responsive image"/>
                </>)}
            
        />
    );
}


export {Home}