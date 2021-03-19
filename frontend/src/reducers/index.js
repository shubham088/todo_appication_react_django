const initialState = {
    result : []
  };
  
export const todoData = (state = initialState, action) =>{
    console.log("i am in reducer")
    console.log("from reducer : payload => ", action.payload)
    switch(action.type){
      case "LOAD_TODO":
        return {
          result : action.payload,
        }
      case "DELETE_TODO":
        return {
          result : state.result.filter(function(obj){
            return obj.id != action.payload
          })
        }
      default : return state
    }
    // if (action.type == 'LOAD_TODO'){
    //     return {
    //       result : action.payload,
    //     }
    // }
    // return state

};
  