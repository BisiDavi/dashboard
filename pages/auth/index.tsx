import Loginform from "@components/form/Loginform";
import Authlayout from "@layouts/Authlayout";

export default function Login() {
    return (
        <Authlayout title="Login">
            <Loginform />
        </Authlayout>
    );
}
