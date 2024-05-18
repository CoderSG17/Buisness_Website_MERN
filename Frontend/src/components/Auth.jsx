import { createContext, useContext ,useState,useEffect} from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [services , setService] = useState([]);

  //function to stored the token in local storage
  const storeTokensInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  //   to check whether is loggedIn or not
   let isLoggedIn = !!token; //token hai true hojayega isLoggedIn agar nhi hai toh isLoggedIn false ho jayega
   console.log(token);
   console.log("isLoggedin ", isLoggedIn);  
 
   const LogoutUser = () => {
     setToken("");
     return localStorage.removeItem("token");
   };

    // function to check the user Authentication or not
  const userAuthentication = async () => {

    if (isLoggedIn){
    try {
      const response = await fetch(`http://localhost:7000/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);

        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  }
  };

  const getServices = async () =>{
    try {
      const response = await fetch(`http://localhost:7000/service`, {
        method: "GET"
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);

        // our main goal is to get the user data 👇
        setService(data.data);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  }


   useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokensInLS, LogoutUser ,user ,services }}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};