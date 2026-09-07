import {
    createContext,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

type AuthContextValue = {
    user: string | null;
    setUser: Dispatch<SetStateAction<string | null>>;
    loading: boolean;
    setloading: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<string | null>(null);
    const [loading, setloading] = useState(false);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setloading }} >
            {children}
        </AuthContext.Provider>
    )
}