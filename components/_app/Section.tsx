import SectionStyles from '@components/Section.module.scss';

function Section(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={SectionStyles.Section}>
      <div className={SectionStyles.Container}>{children}</div>
    </div>
  );
}

function SectionSpotLight(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={SectionStyles.SpotLight}>
      {children}
    </div>
  );
}

Section.SpotLight = SectionSpotLight;

export default Section;
export { Section, SectionSpotLight, SectionStyles };
