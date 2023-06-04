import Image from 'next/image';

import ImageContainerStyles from '@components/ImageContainer.module.scss';

function ImageContainer(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={ImageContainerStyles.ImageContainer}>
      {children}
    </div>
  );
}

interface ImageContainerImageProps extends ComponentProps {
  src: string;
  alt: string;
  size: number;
  aspectRatio: string;
}

function ImageContainerImage(props: ImageContainerImageProps) {
  const { _id, children, alt, src, size, aspectRatio } = props;

  function calculateRatio(ratio: string, size: number) {
    const ratios = ratio.split(':');
    const X = parseInt(ratios[0]);
    const Y = parseInt(ratios[1]);

    const width = size;
    const height = (size * Y) / X;

    return {
      width: width,
      height: height,
    };
  }

  return (
    <Image
      id={_id}
      className={ImageContainerStyles.ImageContainerImage}
      alt={alt}
      src={src}
      {...calculateRatio(aspectRatio, size)}
    >
      {children}
    </Image>
  );
}

ImageContainer.Image = ImageContainerImage;

export default ImageContainer;
export { ImageContainer, ImageContainerImage, ImageContainerStyles };
