// pure functions :
//    * functions that return the same values for
//      the same inputs.
//    * does not cause side effects.

// reducer :
//    * pure function
//    * takes in two parameter, returns one
//    * useReducer reducer
//       * the first parameter is a state object
//       * the second parameter is an action object

// action :
//    * object that has:
//        * a required 'type' key
//        * an optional 'payload' key



export const initialState = {
   todos: []
};


export const types = {
    ADD_TODO: "ADD_TODO", 
    TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
    CLEAR_COMPLETED: "CLEAR_COMPLETED"
};

export const todoReducer = (state, action) => {
    // return action.type === types.TOGGLE_COMPLETED 
    // // ? {
    //     ...state,
    //     todos: state.state.todos.map((todo) =>
    //         todo.id === action.payload
    //         ? {...todo, completed: !todo.completed }
    //         : todo
    //     ),
    // }

    switch (action.type) {
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                todo.id === action.payload ?
                { ...todo, completed: !todo.completed }
                : todo ),
            };
        case "ADD_TODO":
            return {
                ...state,
                    todos: [...state.todos, { id: Date.now(), todo: action.payload.todo, completed: false }
                    ],
                    
                      
                }
           
                

        case "CLEAR_COMPLETED":
            return {
                ...state, todos: state.todos.filter((todo) => !todo.completed)
            } 

            default: 
            return state;
                
            
                

             
        
        }
    }

