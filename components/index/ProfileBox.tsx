import Link from 'next/link';

import ImageContainer from '@components/_app/ImageContainer';

import ProfileBoxStyles from '@components/ProfileBox.module.scss';

function ProfileBox(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={ProfileBoxStyles.ProfileBox}>
      <div className={ProfileBoxStyles.Container}>{children}</div>
    </div>
  );
}

interface ProfileBoxImageProps extends ComponentProps {
  src: string;
}

function ProfileBoxImage(props: ProfileBoxImageProps) {
  const { _id, src } = props;

  return (
    <ImageContainer _id={_id}>
      <ImageContainer.Image
        src={src}
        aspectRatio="1:1"
        size={290}
        alt="Profile Picture"
      />
    </ImageContainer>
  );
}

ProfileBox.Image = ProfileBoxImage;

function ProfileBoxLinkMenu(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <ul id={_id} className={ProfileBoxStyles.ProfileBoxLinkMenu}>
      {children}
    </ul>
  );
}

ProfileBox.LinkMenu = ProfileBoxLinkMenu;

interface ProfileBoxLinkProps extends ComponentProps {
  href: string;
  icon: JSX.Element;
  text: string;
  value: string;
  background?: string;
}

function ProfileBoxLink(props: ProfileBoxLinkProps) {
  const { href, icon, text, value, background } = props;
  return (
    <li>
      <Link
        href={href}
        className={ProfileBoxStyles.ProfileBoxLink}
        style={{ background: background }}
      >
        <span className={ProfileBoxStyles.ProfileBoxLinkIcon}>{icon}</span>
        <label className={ProfileBoxStyles.ProfileBoxLinkText}>{text}</label>
        <label className={ProfileBoxStyles.ProfileBoxLinkValue}>{value}</label>
      </Link>
    </li>
  );
}

ProfileBoxLinkMenu.Item = ProfileBoxLink;

export default ProfileBox;
export { ProfileBox, ProfileBoxImage, ProfileBoxLink, ProfileBoxStyles };
