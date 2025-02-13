const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',
  heading2:
    'font-sans font-semibold xs:text-[48px] xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-sans font-normal text-charcoal text-[18px] leading-[30.8px]',
  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  paddingX: 'mobile:px-6 px-6',
  paddingY: 'mobile:py-16 py-6',
  padding: 'mobile:px-16 px-6 mobile:py-12 py-4',
  marginX: 'mobile:mx-16 mx-6',
  marginY: 'mobile:my-16 my-6',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
