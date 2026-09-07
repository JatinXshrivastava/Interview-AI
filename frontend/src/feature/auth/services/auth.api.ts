import axios from "axios"  

const api = axios.create({
    baseURL : "http://localhost:3000" , 
    withCredentials : true 
})

export async function register({ username, email, password }: {
    username: string
    email: string
    password: string
}) {
    try{
        const response = await api.post("/api/auth/register" , {
            username , email , password
        })
        return response.data
    }catch(err) {
        console.log(err)
    }
}

export async function login ({ username , password } : {
    username : string 
    password : string 
}) {
    try {
        const response = await api.post("/api/auth/login" , {
            username , password 
        })
        return response.data 
    }catch(err) {
        console.log(err)
    }
}

export async function logout() {
    try {
        const response = await api.get("/api/auth/logout")
        return response.data
    } catch(err) {
        console.log(err) 
    }
}

export async function getMe() {
    try {
        const response = await api.get("/api/auth/getMe")
        return response.data
    }catch(err){
        console.log(err)
    }
}