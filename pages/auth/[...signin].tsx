import { getProviders } from "next-auth/client";
import Signinform from "@components/form/Signinform";
import Authlayout from "@layouts/Authlayout";

export default function Signin({ providers }) {
    
    return (
        <Authlayout title="Signin">
            <Signinform providers={providers} />
        </Authlayout>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
