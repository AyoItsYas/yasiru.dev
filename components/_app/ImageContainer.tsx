import ImageContainerStyles from '@components/ImageContainer.module.scss';

function ImageContainer(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={ImageContainerStyles.ImageContainer}>
      {children}
    </div>
  );
}

function ImageContainerImage(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={ImageContainerStyles.ImageContainerImage}>
      {children}
    </div>
  );
}

ImageContainer.Image = ImageContainerImage;

export default ImageContainer;
export { ImageContainer, ImageContainerImage, ImageContainerStyles };
