import Head from 'next/head';

import Footer from '@components/Footer';
import Header from '@components/Header';
import NavBar from '@components/NavBar';

import Section from '@components/Section';

function Page() {
  return (
    <>
      <Head>
        <title>Yasiru Dharmathilaka - Portfolio</title>
      </Head>

      <Section>
        <Header>
          <NavBar></NavBar>
        </Header>

        <Section.SpotLight>test</Section.SpotLight>
      </Section>

      <Section>
        <Footer />
      </Section>
    </>
  );
}

export default Page;
