export function loadTodo(payload) {
    console.log("i am in action")
    console.log("payload : ", payload)
    return { type: "LOAD_TODO", payload:payload }
  };


export function deleteTodo(id){
  return {
    type : "DELETE_TODO",
    payload : id
  }
}