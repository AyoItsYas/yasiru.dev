import ContentBoxStyles from '@components/ContentBox.module.scss';

function ContentBox(props: ComponentProps) {
  const { _id, _style, children } = props;

  return (
    <div id={_id} style={_style} className={ContentBoxStyles.ContentBox}>
      {children}
    </div>
  );
}

function ContentBoxHeading(props: ComponentProps) {
  const { _id, _style, children } = props;

  return (
    <h2 id={_id} style={_style} className={ContentBoxStyles.ContentBoxHeading}>
      {children}
      <label>{children}</label>
    </h2>
  );
}

ContentBox.Heading = ContentBoxHeading;

function ContentBoxParagraph(props: ComponentProps) {
  const { _id, _style, children } = props;

  return (
    <p id={_id} style={_style} className={ContentBoxStyles.ContentBoxParagraph}>
      {children}
    </p>
  );
}

ContentBox.Paragraph = ContentBoxParagraph;

export default ContentBox;
export { ContentBox, ContentBoxParagraph, ContentBoxHeading, ContentBoxStyles };
