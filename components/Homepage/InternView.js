import Heading from "../Heading";
import Canvas from "../Generic/Canvas";
import BlogCard from "./BlogCard";
const Internview = () => {
  return (
    <Canvas bgcolor="greenbg">
      <Heading title="InternView" />
      {/* <div className="flex md:gap-y-8 md:my-4 p-6">
        <iframe
          class="aspect-video w-full h-auto"
          src="https://www.youtube.com/embed/msizPweg3kE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16	md:gap-y-8 md:my-4">
        <BlogCard />
        <BlogCard />
      </div>
    </Canvas>
  );
};

export default Internview;
