import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/Auth/FormLogin";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout>
        <FormLogin></FormLogin>
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
