
import Head from "next/head";
import {useRouter} from 'next/router'


const HTTP_HOST = process.env.NEXT_PUBLIC_HTTP_HOST;

export default Layout;

function Layout({
                    children,

                }) {
    const router = useRouter()

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>testapp-35345</title>
                <meta property="og:url" content={HTTP_HOST + router.asPath}/>
            </Head>
            <main>
                <div>
                    {children}
                </div>
            </main>

        </>
    );
}
