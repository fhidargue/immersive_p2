import { useContext } from "react";
import { Route } from "react-router-dom";
import AuthContext from "../../store/Authorization/AuthContext";
import NoAccess from "../Access/NoAccess";

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { isLogged } = useContext(AuthContext);
  console.log('isLogged: ', isLogged);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged ? <Component {...props} /> : <NoAccess />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {};

ProtectedRoute.defaultProps = {};

export default ProtectedRoute;
