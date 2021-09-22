import Registerform from "@components/form/Registerform";
import Authlayout from "@layouts/Authlayout";

export default function Register() {
    return (
        <Authlayout title="Register">
            <Registerform />
        </Authlayout>
    );
}
