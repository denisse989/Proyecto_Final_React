import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "../../context/ContextProvider";
import { types } from "../../context/storeReducer";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = () => {
    dispatch({ type: types.login });    
    navigate("/");
  };
  return (
    <AuthLayout title="Ingresar a Souvenir">
      <form>
      </form>
    </AuthLayout>
  );
};
