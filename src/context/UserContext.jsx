import { createContext, useState } from 'react';
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState('John');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}



// import { createContext, useReducer } from 'react';

// export const UserContext = createContext();

// const initialState = { user: 'John' };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'SET_USER':
//       return { ...state, user: action.payload };
//     default:
//       return state;
//   }
// }

// export function UserProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
