import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url="http://localhost:5000/employees"

//creer slice

const employeeSlice=createSlice({
    name:"employees",
    initialState:{
        list:[],
    },
    reducers:{
        ListEmployees:(state,action)=>{
            state.list=action.payload
        },

        AddEmploye:(state,action)=>{
            state.list.push(action.payload)
        },

        UpdateEmploye:(state,action)=>{
            const index=state.list.findIndex(i=>i.id===action.payload.id)
            if(index!==-1){
                state.list[index]=action.payload
            }
        },

        DeleteEmploye:(state,action)=>{
            state.list=state.list.filter(l=>l.id!==action.payload.id)
        },


    }
})

//--------------axios-------------//

//get
export const getEmployees=()=>(dispatch)=>{
    axios.get(url)
    .then(responce=>dispatch(ListEmployees(responce.data)))
    .catch(error=>console.error('error',error.message))
};

//post

export const postEmployees=(newEmploye)=>(dispatch)=>{
    axios.post(url,newEmploye)
    .then(responce=>dispatch(AddEmploye(responce.data)))
    .catch(error=>console.error('error',error.message))
}
//modifier
export const EditeEmployees=(id,edite)=>(dispatch)=>{
    axios.put(`${url}/${id}`,edite)
    .then(responce=>dispatch(UpdateEmploye(responce.data)))
    .catch(error=>console.error('error',error.message))

}
//supprimer
export const RemoveEmployee = (id) => (dispatch) => {
  axios.delete(`${url}/${id}`)
    .then(() => dispatch(DeleteEmploye({id})))
    .catch(error=>console.error('error',error.message))

};

export const {ListEmployees,AddEmploye,UpdateEmploye,DeleteEmploye}=employeeSlice.actions

export default employeeSlice.reducer





