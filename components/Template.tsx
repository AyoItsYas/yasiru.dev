import TemplateStyles from '@components/Template.module.scss';

function Template(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={TemplateStyles.Template}>
      {children}
    </div>
  );
}

function TemplateChild(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={TemplateStyles.TemplateChild}>
      {children}
    </div>
  );
}

Template.Child = TemplateChild;

export default Template;
export { Template, TemplateChild, TemplateStyles };
