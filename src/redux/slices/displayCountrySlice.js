import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry";



export const displayCountrySlice=createSlice({

    name:'displayCountry',
    initialState:{
        value:initialCountry
    },
    reducers:{
        setDisplayCountry:(state,action)=>{
                state.value=action.payload // state.value refers to the value property within your state, which is an object containing a name property (an array of objects).
        },
        deleteDisplayCountry:(state)=>{
                state.value=null
        }
    }
})

export const {setDisplayCountry,deleteDisplayCountry}=displayCountrySlice.actions;
export const selectDisplay=(state)=>state.displayedCountry.value
export default displayCountrySlice.reducer;