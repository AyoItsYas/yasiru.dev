import SectionStyles from '@components/Section.module.scss';

function Section(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={SectionStyles.main}>
      <div className={SectionStyles.container}>{children}</div>
    </div>
  );
}

function SectionSpotLight(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <div id={_id} className={SectionStyles.spotLight}>
      {children}
    </div>
  );
}

Section.SpotLight = SectionSpotLight;

export default Section;
export { Section, SectionSpotLight, SectionStyles };
