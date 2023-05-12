import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
const AuthContext = createContext<{
  auth: string | null;
  setAuth: Dispatch<SetStateAction<string | null>>;
} | null>(null);

type Props = {
  children: React.ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<string | null>(() => {
    const data = sessionStorage.getItem('_at');
    if (data) return JSON.parse(data).email;
  });

  return (
    <AuthContext.Provider value={{ auth: isAuth, setAuth: setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
