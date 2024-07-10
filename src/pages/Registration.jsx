import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/fragments/Auth/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout type={"register"}>
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
