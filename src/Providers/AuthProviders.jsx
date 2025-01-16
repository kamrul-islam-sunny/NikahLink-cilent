import { AuthContext } from "./AuthContext";

const AuthProviders = ({ children }) => {
  const name = "ami pare na.";
  const authInfo = {
    name,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
