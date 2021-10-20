// Adding necessary file 
import { useContext } from "react"
import { AuthContext } from "../components/AuthProvider/AuthProvider";


// useAuth Hook 
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;