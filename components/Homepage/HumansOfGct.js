import Heading from "../Heading";
import Canvas from "../Generic/Canvas";
import HogCard from "./HogCard";

const HumansOfGct = ({ hogs }) => {
  console.log("hogs", hogs);
  return (
    <Canvas bgcolor="white">
      <Heading title="Humans of GCT" />

      <div className="flex flex-wrap md:gap-y-8 md:my-4 p-1 justify-evenly">
        {hogs &&
          hogs.map((hog) => {
            return <HogCard key={hog.id} hog={hog} />;
          })}
        {/* <HogCard />

        <HogCard />

        <HogCard /> */}

        {/* <HogCard />

        <HogCard />

        <HogCard /> */}
      </div>
    </Canvas>
  );
};

export default HumansOfGct;
