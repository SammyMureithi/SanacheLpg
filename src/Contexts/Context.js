import React, { useState } from 'react'
const { Consumer, Provider } = React.createContext();
function Context( props ) {
    const [userSession, setUserSession] = useState({});
    const [errorResponse, setErrorResponse] = useState( {
        error: null,
        message:""
    });
    const [loginInput, setLoginInputs] = useState( {
        username: "",
        password:""
    });
    function handleLoginInputChange( e ) {
        setLoginInputs( prevInput => {
            return {...prevInput,[e.target.name]:e.target.value}
        })
    }
    function login() {
        const newFormData = new FormData();
        newFormData.append( "username", loginInput.username );
        newFormData.append( "password", loginInput.password );
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/login.php", {
                method: "POST",
                headers: {
                    
                },
                body: newFormData
            } )
            .then( res => res.json() )
            .then( data => {
                
                    if ( data.error === false ) {
                        console.log( "Hello" );
                        //let's save our data in session then set them to State
                        /**
                         * fullname
                         * role
                         * role2
                         * station
                         * stationID
                         * userID
                         * username
                         */
                        sessionStorage.setItem( "stationID", data.stationID );
                        sessionStorage.setItem( "fullname", data.fullname );
                        sessionStorage.setItem( "role2", data.role2 );
                        sessionStorage.setItem( "station", data.station );
                        sessionStorage.setItem( "userID", data.userID );
                        sessionStorage.setItem( "username", data.username );
                        //let get all the session data 
                    
                        setUserSession( data )

                        //window.location.href = "/DashBoard";
                    }
                    setErrorResponse( data );
                }
                    )  
            .catch( error => console.log( error ) );
    }
  
    console.log("//////"+ sessionStorage.getItem("stationID") );
  return (
      <Provider value={
          {
              setSession: setUserSession, userSession: userSession, Login: login,
              errorResponse: errorResponse,handleLoginInputChange:handleLoginInputChange, userInput:loginInput
          }}>
          {props.children}
    </Provider>
      
  )
}

export  {Context,Consumer as ContextConsumer}