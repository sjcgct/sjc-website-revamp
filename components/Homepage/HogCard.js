const HogCard = () => {
  return (
    <div className="w-[250px] h-auto mx-2 my-4 relative">
      <img
        src="https://source.unsplash.com/random/400x400"
        className="border-b pb-3 mb-1"
        alt="Example image"
      />
      <p className="test">Test subject</p>
      <h2 className="content-bold text-lg">Ajai K</h2>
    </div>
  );
};

export default HogCard;
