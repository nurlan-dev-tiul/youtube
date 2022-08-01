import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='ru'>
            <Head>
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
                <meta name='theme-color' content='#ff7652' />
                <meta name='msapplication-navbutton-color' content='#ff7652' />
                <meta name='apple-mobile-web-app-status-bar-style' content='#ff7652' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}