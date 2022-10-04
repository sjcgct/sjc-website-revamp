const Canvas = ({ bgcolor, children }) => {
  // console.log("bgcolor", bgcolor);
  return (
    <div className={`px-2 py-3 md:px-5 md:py-5 bg-${bgcolor}`}>
      <div className="md:container md:mx-auto">{children}</div>
    </div>
  );
};

export default Canvas;
