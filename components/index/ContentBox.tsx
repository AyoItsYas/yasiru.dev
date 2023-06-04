import ContentBoxStyles from '@components/ContentBox.module.scss';

function ContentBox(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={ContentBoxStyles.ContentBox}>
      {children}
    </div>
  );
}

function ContentBoxHeading(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <h2 id={_id} className={ContentBoxStyles.ContentBoxHeading}>
      {children}
      <label>{children}</label>
    </h2>
  );
}

function ContentBoxParagraph(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <p id={_id} className={ContentBoxStyles.ContentBoxParagraph}>
      {children}
    </p>
  );
}

ContentBox.Heading = ContentBoxHeading;
ContentBox.Paragraph = ContentBoxParagraph;

export default ContentBox;
export { ContentBox, ContentBoxParagraph, ContentBoxHeading, ContentBoxStyles };
