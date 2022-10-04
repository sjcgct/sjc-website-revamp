import { PrismicRichText } from "@prismicio/react";

const Quote = ({ slice }) => {
  return (
    <blockquote>
      <PrismicRichText field={slice.primary.paragraph} />
    </blockquote>
  );
};

export default Quote;
