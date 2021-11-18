import classnames from "classnames";
import Head from "next/head";

import Header from "components/header";

const classNamePrefix = "page";

function Page({ className, title = "Marifer House", children }) {
  const customClassName = classnames(classNamePrefix, className, {});
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={customClassName}>{children}</main>
    </>
  );
}

export default Page;
