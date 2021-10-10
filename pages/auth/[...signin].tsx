import { getCsrfToken, getProviders } from "next-auth/client";
import Signinform from "@components/form/Signinform";
import Authlayout from "@layouts/Authlayout";

export default function Signin({ providers, csrfToken }) {
    return (
        <Authlayout title="Signin">
            <Signinform csrfToken={csrfToken} providers={providers} />
        </Authlayout>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers, csrfToken: await getCsrfToken(context) },
    };
}
