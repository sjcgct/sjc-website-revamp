import Heading from "../Heading";
import Canvas from "../Generic/Canvas";
import HogCard from "./HogCard";

const HumansOfGct = () => {
  return (
    <Canvas bgcolor="white">
      <Heading title="Humans of GCT" />

      <div className="flex flex-wrap md:gap-y-8 md:my-4 p-1 justify-evenly">
        <HogCard />

        <HogCard />

        <HogCard />
      </div>
    </Canvas>
  );
};

export default HumansOfGct;
