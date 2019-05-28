import React, { Component }  from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import LoginForm from "./src/components/LoginForm";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //i added this
import Routes  from "./src/Router"

class App extends Component {
state= { loggedIn: null };
//initialized the firebase//
componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyBMMOJXeaxE-0cCdfblSSPDwTms1s0KGpM",
        authDomain: "rnapp-auth-class-tayyab.firebaseapp.com",
        databaseURL: "https://rnapp-auth-class-tayyab.firebaseio.com",
        projectId: "rnapp-auth-class-tayyab",
        storageBucket: "rnapp-auth-class-tayyab.appspot.com",
        messagingSenderId: "586672115417",
        appId: "1:586672115417:web:fe27fe289f851a84"

        


    });

}

 
render() {

    const store = createStore(reducers, {},
        applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>


           {/* <LoginForm/> */
           }
           <Routes />
       
        
        </Provider>
    );
}
}
export default App;
