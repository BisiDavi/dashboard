import Loginform from "@components/form/Loginform";
import Authlayout from "@layouts/Authlayout";
import { getProviders } from "next-auth/react";

export default function Login({ providers }) {
    return (
        <Authlayout title="Login">
            <Loginform providers={providers} />
        </Authlayout>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
