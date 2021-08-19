import Loginform from "@components/Loginform";
import Authlayout from "@layouts/Authlayout";

export default function Login() {
  return (
    <Authlayout title="Login">
      <Loginform />
    </Authlayout>
  );
}
