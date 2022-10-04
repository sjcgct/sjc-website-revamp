import { PrismicRichText } from "@prismicio/react";

const Paragraph = ({ slice }) => {
  return <PrismicRichText field={slice.primary.paragraph} />;
};

export default Paragraph;
