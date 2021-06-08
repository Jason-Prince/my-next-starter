import GlobalStyles from '@components/GlobalStyles';
import '@css/style.css';
import '@css/form.css';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Pet Care App</title>
        </Head>
        <GlobalStyles />
        <div className="top-bar">
            <div className="nav">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/new">
                    <a>Add Pet</a>
                </Link>
            </div>

            <Image
                id="title"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
                alt="pet care logo"
                layout="fill"></Image>
        </div>
        <div className="grid wrapper">
            <Component {...pageProps} />
        </div>
    </>
);

export default MyApp;