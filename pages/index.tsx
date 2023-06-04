import Head from 'next/head';
import Link from 'next/link';

import Footer from '@components/Footer';
import Header from '@components/Header';
import NavBar from '@components/NavBar';
import Section from '@components/Section';

import ContentBox from '@/components/index/ContentBox';
import ProfileBox from '@/components/index/ProfileBox';

import type { InferGetStaticPropsType } from 'next';

import {
  FaAt,
  FaDiscord,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

// import {
//   SiPython,
//   SiJavascript,
//   SiTypescript,
//   SiCss3,
//   SiHtml5,
//   SiMongodb,
//   SiMysql,
//   SiPostgresql,
//   SiVisualstudiocode,
//   SiUbuntu,
//   SiGit,
//   SiGithub,
//   SiBitbucket,
//   SiJirasoftware,
//   SiPowershell,
//   SiGnubash,
//   SiSass,
//   SiDocker,
//   SiBootstrap,
//   SiSlack,
//   SiDiscord,
//   SiDjango,
//   SiNodedotjs,
//   SiReact,
//   SiNextdotjs,
//   SiVim,
// } from "react-icons/si";

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
    Email: string;
    GitHubUserName: string;
    LinkedInName: string;
    LinkedInUserName: string;
    DiscordUserID: string;
    DiscordUserName: string;
  }

  const UserData: UserData = {
    Email: 'yasiru.dharmathilaka@gmail.com',
    GitHubUserName: 'AyoItsYas',
    LinkedInName: 'Yasiru Dharmathilaka',
    LinkedInUserName: 'yasiru-dharmathilaka',
    DiscordUserID: '837258955415748639',
    DiscordUserName: 'Yas_!_ru#9999',
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

      <Section _id="about">
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
          <ProfileBox _style={{ flexBasis: '30%' }}>
            <ProfileBox.Image
              src={`https://www.github.com/${UserData.GitHubUserName}.png`}
            />

            <ProfileBox.LinkMenu>
              <ProfileBox.LinkMenu.Item
                href={`mailto:${UserData.Email}`}
                icon={<FaAt />}
                text="Email"
                value={UserData.Email.split('@')[0]}
              />

              <ProfileBox.LinkMenu.Item
                href={`https://www.github.com/${UserData.GitHubUserName}`}
                icon={<FaGithubAlt />}
                text="GitHub"
                value={UserData.GitHubUserName}
              />

              <ProfileBox.LinkMenu.Item
                href={`https://www.linkedin.com/in/${UserData.LinkedInUserName}`}
                icon={<FaLinkedinIn />}
                background="#0072b1"
                text="LinkedIn"
                value={UserData.LinkedInName}
              />

              <ProfileBox.LinkMenu.Item
                href={`https://www.discord.com/users/${UserData.DiscordUserID}`}
                icon={<FaDiscord />}
                background="linear-gradient(to right, rgb(154, 162, 253), rgb(88, 101, 242))"
                text="Discord"
                value={UserData.DiscordUserName}
              />

              <ProfileBox.LinkMenu.Item
                href=""
                icon={<FaInstagram />}
                background="linear-gradient(to right, rgb(250, 140, 81), rgb(214, 36, 159))"
                text="Instagram"
                value="ayo.its.yas"
              />
            </ProfileBox.LinkMenu>
          </ProfileBox>

          <ContentBox _style={{ flexBasis: '55%' }}>
            <ContentBox.Heading>About Me</ContentBox.Heading>
            <ContentBox.Paragraph>
              Hello! I am Yasiru people call me Yas. I am currently a student at
              National School of Business Management (NSBM) Green University and
              a self taught full-stack developer based on Colombo, Sri Lanka.
              <br />
              <br />
              I am a very passionate individual when it comes to programming and
              anything general about computers. From a young age I have been
              captivated by the functionality of computers and electronics,
              which fueled my determination to pursue a career in the field of
              computer science.
              <br />
              <br />
              Apart from that I am a very introverted, <s>funny</s>, friendly
              and easy going character who is always open to new experiences and
              challenges.
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
