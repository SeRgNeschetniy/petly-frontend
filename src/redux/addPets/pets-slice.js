import {createSlice} from "@reduxjs/toolkit";
 
import {fetchPets} from "./addPets-operations";

const initialState = {
    pet:{},
    isLoading: false,
    error: null,
}

// const handleRejected =  (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   };

const petsSlice = createSlice({
    name: "addPets",
    initialState: initialState,

    extraReducers: {
        [fetchPets.pending](state) {
            state.isLoading = true;
          },

          [fetchPets.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
          },
          
          [fetchPets.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
    }
    
})

export default petsSlice.reducer;


// name:
//     dateOfBirth:
//     breed:
//     petImage:
//     comments