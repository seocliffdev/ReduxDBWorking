


import { EMAIL_CHANGED, PASSWORD_CHANGED ,LOGIN_USER_SUCCESS,EMPLOYEE_UPDATE} from "./types";
export * from "./AuthActions";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";
import {Alert} from 'react-native';

export const emailChanged = text => {
return {
type: EMAIL_CHANGED,
payload: text
};

};


export const passwordChanged = text => {
  return {
  type: PASSWORD_CHANGED,
  payload: text
  };
};




export const loginUser = ( email, password ) => {
  return dispatch => {
    console.log("Your Email within firebase" +email);
  firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then(user => loginUserSuccess(dispatch, user))
  .catch(() => {



    Alert.alert("Login Failed...");
  // firebase
  // .auth()
  // .createUserWithEmailAndPassword(email,password)
  // .then(user => loginUserSuccess(dispatch, user));
  });







  const loginUserSuccess = (dispatch, user) => {
  
  
    
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
      });
      Actions.employeeCreate();
      };


    }            // you have one. Use User.getToken() instead.
    

  

  }



  


  export const employeeUpdate = ({name, phone, shift1}) => {
    name="Voucher"
    return dispatch => {
      
      firebase.database().ref('students/' + name).set({
        username: "This is my work",
        email: "asfasdfsd",
        profile_picture : "https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-1/c0.1.50.50a/p50x50/10616567_10203772282440383_5358120401328196795_n.jpg?_nc_cat=105&_nc_ht=scontent.fisb5-1.fna&oh=1e73f8f5eb9031b956b864d951da6c89&oe=5D54CCA1"
      }).then(({name,phone,shift1}) => employeeUpdateDispatcher(dispatch, {name,phone,shift}))
  .catch(() => {


      console.log("Error Occured... in EmployeeeRecord")
  // firebase
  // .auth()
  // .createUserWithEmailAndPassword(email,password)
  // .then(user => loginUserSuccess(dispatch, user));
  });



}
}

  const employeeUpdateDispatcher = (dispatch, user) => {
  
  
    
  dispatch({
    type: EMPLOYEE_UPDATE,
    payload: user
    });
    }


              // you have one. Use User.getToken() instead.
  






  // const EmployeeDataUpdate = (dispatch, {name,phone, shift1}) => {
  
  
    
  // dispatch({
  //   type: EMPLOYEE_UPDATE,
  //   payload: {name, phone, shift1}
  //   });
  //   Actions.employeeCreate();
  //   };


  


 
  


  // function writeUserData(name, phone ,shift) {
  //   firebase.database().ref('/' + userId).set({
  //     name: name,
  //     phone: phone,
  //     shift : shift
  //   });
  // }
  


  







