import Head from 'next/head'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Layout from '@components/Layout';

export default function Index() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Layout>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen">

          <section className="text-gray-600 body-font py-8">
            <h1 className="text-center font-medium text-3xl dark:text-white mb-6">Example how to Auth in NextJS Using Middleware</h1>
            <div className="flex justify-center md:mx-16">
              <ul className="dark:text-white">
                <li><b>Client Protected</b> using client side <b>useEffect</b> Auth Check that cause flashing content before redirected to login page</li>
                <li><b>Server Protected</b> using <b>getServerSideProps</b> automatically redirected to login page before content being render</li>
                <li><b>Admin/First</b> & <b>Admin/Second</b> using  <b>middleware.js</b> inside <b>root</b> folder that intercept request to every page inside <b>admin</b> folder. if no user was logged in, automatically redirected to login page.</li>
              </ul>
            </div>
          </section>

        </main>

        <Footer />

      </Layout>

    </>
  )
}
