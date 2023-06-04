import Image from 'next/image';

import ProfileCardStyles from '@components/ProfileCard.module.scss';

function ProfileCard(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={ProfileCardStyles.ProfileCard}>
      <div className={ProfileCardStyles.Container}>{children}</div>
    </div>
  );
}

interface ProfileCardImageProps extends ComponentProps {
  profileImage?: { alt: string };
  profileImageSrc?: string;
}

function ProfileCardImage(props: ProfileCardImageProps) {
  const { _id, children, profileImage = {}, profileImageSrc = '' } = props;

  return (
    <Image
      id={_id}
      alt="Profile Picture"
      src={profileImageSrc}
      {...profileImage}
    >
      {children}
    </Image>
  );
}

ProfileCard.Image = ProfileCardImage;

export default ProfileCard;
export { ProfileCard, ProfileCardImage, ProfileCardStyles };
