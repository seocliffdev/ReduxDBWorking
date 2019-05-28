import React, { Component } from "react";
import { Picker,Text,Alert } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate} from "../actions"

import { Card, CardSection, Input, CustomButton

} from "./common";




class EmployeeCreate  extends Component {

    onAddEmployeebtn(name, phone, shift1){
      this.props.employeeUpdate(name, phone, shift1)
    }





    render()
    {




        return(

            <Card>
                 
                    <CardSection >
                   

                    
                    <Input  placeholder="name" label="name"  onChangeText={text => this.props.employeeUpdate({ prop: "name", value: text })} />
                    </CardSection>
                    
                    
                    <CardSection>
                     <Input  placeholder="phone" label="phone" onChangeText={text => this.props.employeeUpdate({ prop: "phone", value: text }) } />
                    </CardSection>
                    
                    <CardSection>

                      <CustomButton onPress={() =>{this.onAddEmployeebtn("this.props.name", this.props.phone ,"Shift")}}>Add Employee</CustomButton>
                    </CardSection>
           
                  </Card>

        );
    }

}

const mapStateToProps = state => {
  return {
    phone: state.auth.phone,
    name: state.auth.name,
    shift: state.auth.shift1
   };
  };


  export default connect(
    mapStateToProps,
    { employeeUpdate})(EmployeeCreate);

    