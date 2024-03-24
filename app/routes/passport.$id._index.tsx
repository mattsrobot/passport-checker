import type {
    MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { loader } from "./passport-date-extractor.$id";
export { loader };

export const meta: MetaFunction = () => {
    return [
        { title: "Borderless" },
        { name: "description", content: "Check your passport expiry date" },
    ];
};

export default function Index() {
    const data = useLoaderData<typeof loader>();

    return (
        <main>
            {data.error ?
                <>
                    <h1>
                        {data.error}
                    </h1>
                </> :
                <>
                    <h1>
                        Date of birth
                    </h1>
                    <p>{data?.dob}</p>
                    <h1>
                        Expiry
                    </h1>
                    <p>{data?.expiry}</p>
                </>}
        </main>
    );
}
