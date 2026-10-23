// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" translate='no'> {/* <-- Set your language here */}
        <Head>
          {/* Optional but harmless: explicit language hint */}
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="google" content="notranslate"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;