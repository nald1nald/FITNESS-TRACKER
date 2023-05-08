// import React, { useState, useContext, useEffect } from "react";


// const AuthContext = React.createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   // useEffect hook to set up authentication state listener
//   useEffect(() => {
//     // Your authentication code here
//   }, []);

//   const login = async (email, password) => {
//     // Your login code here
//   };

//   const logout = async () => {
//     // Your logout code here
//   };

//   const values = {
//     user,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
// }

// export const useAuth = () => useContext(AuthContext); // add this line to export useAuth
