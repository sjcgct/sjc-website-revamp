const HogCard = ({ uid, title, date, name, image }) => {
  return (
    <div className={`w-full h-auto md:basis-1/2 my-4 relative`}>
      <img src={image} className="border-b pb-3 mb-1" alt="Example image" />
      <p className="test mt-1 text-xs">{title.split("-")[0]}</p>
      <h2 className="content-bold text-lg">{name}</h2>
    </div>
  );
};

export default HogCard;
