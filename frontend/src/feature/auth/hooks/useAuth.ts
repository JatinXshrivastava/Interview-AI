import { useContext,useEffect } from "react";
import { AuthContext } from "../auth.context"; 
import { login,register,logout,getMe} from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext) 

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    const {user , setUser , loading , setloading } = context 

    const handleLogin = async ({ username, password }: { username: string; password: string }) => {
        setloading(true)  
        try {
            const data = await login({username,password}) 
            setUser(data.user) 
        }catch(err) {

        }finally {
            setloading(false)
        }
    }

    const handleRegister = async ({ username , email , password }:{username:string , email :string , password:string}) => {
        setloading(true) 
        try{
            const data = await register({username , email , password}) 
            setUser(data.user)
        }catch(err){

        }finally{
            setloading(false)
        }
    }

    const handleLogout = async () => {
        setloading(true) 
        try{
            const data = await logout()  
            setUser(null)
        }catch(err){
            
        }finally{
            setloading(false) 
        }
    }

    useEffect(() => {
        const getAndSetUser =   async() => {
            const data = await getMe()
            setUser(data.user)
            setloading(false)
        }
        getAndSetUser()
    },[])

    return { user , loading , handleLogin , handleRegister, handleLogout }
}