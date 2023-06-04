import Head from 'next/head';
import Link from 'next/link';

import Footer from '@components/Footer';
import Header from '@components/Header';
import NavBar from '@components/NavBar';

import Section from '@components/Section';

import ContentBox from '@/components/index/ContentBox';
import ProfileCard from '@/components/index/ProfileCard';

import type { InferGetStaticPropsType } from 'next';

function getStaticProps() {
  interface NavBarItem {
    name: string;
    href: string;
  }

  const NavBarItems: Array<NavBarItem> = [
    { name: 'About Me', href: '#about' },
    { name: 'Skill Set', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  interface UserData {
    GitHubUserName: string;
  }

  const UserData: UserData = {
    GitHubUserName: 'AyoItsYas',
  };

  return { props: { NavBarItems, UserData } };
}

function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { NavBarItems, UserData } = props;

  return (
    <>
      <Head>
        <title>Yasiru Dharmathilaka - Portfolio</title>
      </Head>

      <Section>
        <Header>
          <NavBar>
            <NavBar.Menu>
              {NavBarItems.map((item, i) => (
                <NavBar.Menu.Item key={i}>
                  <Link href={item.href}>{item.name}</Link>
                </NavBar.Menu.Item>
              ))}
            </NavBar.Menu>
          </NavBar>
        </Header>

        <Section.SpotLight>
          <ProfileCard>
            <ProfileCard.Image
              width={200}
              height={200}
              profileImageSrc={`https://www.github.com/${UserData.GitHubUserName}.png`}
            />
          </ProfileCard>

          <ContentBox>
            <ContentBox.Heading>About Me</ContentBox.Heading>
            <ContentBox.Paragraph>
              Hello my name's Yasiru, people call me Yas. I'm from Colombo, Sri
              Lanka. I'm 18 years old and I am currently a student at Trinity
              College Kandy. I enjoy programming and almost anything related to
              computers. How computers function really amazed me and here I am
              digging deeper into the field and building my career doing what I
              love.
              <br />
              <br />
              Taking apart things and breaking them, making something different,
              &amp; fiddling around with circuits, this was my thing. I got my
              hands on my dad's laptop and I ruined it trying to do things I
              didn't know. I got my own computer in grade 9 where I wrote my
              first ever "program", it was a windows batch file game that worked
              on the terminal. I was in boarding school so I didn't have much
              time to do things with my computer, the only time I get to use my
              computer was on weekends when I got home.
              <br />
              <br />
              When Covid started things changed, lockdown is what really got me
              going. I met a lot of people online, one of them was a developer
              that encouraged me to learn JavaScript. I wanted to build a
              discord bot and that was when I programmed something with an
              actual programming language. Since then I've been learning and
              building various things like chatbots, websites, automation
              programs, &amp; web scrappers.
            </ContentBox.Paragraph>
          </ContentBox>
        </Section.SpotLight>
      </Section>

      <Section>
        <Section.SpotLight />
        <Footer />
      </Section>
    </>
  );
}

export default IndexPage;
export { getStaticProps };
