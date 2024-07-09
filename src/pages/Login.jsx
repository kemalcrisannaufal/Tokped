import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/fragments/auth/FormLogin";

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
