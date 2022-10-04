import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-grey-700">
      <div className="max-w-7xl mx-auto pt-[80px] pb-[16px] sm:px-6 lg:px-8 text-dominantbg">
        {/* <div className="basis-1/3 border-[1px] border-black">
          <p className="pl-2 pr-5 text-lg">
            Student Journalist Council - GCT is an almost dead student
            organisation.
          </p>
        </div>
        <div className="basis-1/3 border-[1px] border-black">
          <ul className="pl-2 pr-5 text-base uppercase leading-[24px]">
            <li className="mb-2">Stories</li>
            <li className="mb-2">Aperture</li>
            <li className="mb-2">Humans of GCT</li>
            <li className="mb-2">AlumSpace</li>
            <li className="mb-2">Internview</li>
            <li className="mb-2">ABC Channel</li>
            <li className="mb-2">About Us</li>
          </ul>
        </div>
        <div className="basis-1/3 border-[1px] border-black">
          <p>icons come here.</p>
        </div> */}
        <p className="px-2 text-lg mb-10">
          Student Journalist Council - GCT is the student media body of GCT,
          Coimbatore.
        </p>
        <ul className="px-2 content-bold text-sm flex flex-wrap list-none mb-10">
          <li className="mr-4">
            <a href="/" className="">
              Stories
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="">
              Humans of GCT
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="">
              Humans of GCT
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="">
              Humans of GCT
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="">
              Humans of GCT
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="">
              Humans of GCT
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="">
              Humans of GCT
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap mb-8 px-2 content text-sm list-none">
          <span className="content-bold mr-4">Follow us</span>
          <li className="mr-3">
            <a href="/">Twitter</a>
          </li>
          <li className="mr-3">
            <a href="/">Twitter</a>
          </li>
          <li className="mr-3">
            <a href="/">Twitter</a>
          </li>
          <li className="mr-3">
            <a href="/">Twitter</a>
          </li>
        </ul>
        <hr className="px-2 color-dominantbg"></hr>
        <p className="pt-[24px] text-sm">
          &#169;
          {`${(() => {
            let a = new Date();
            return a.getFullYear();
          })()} `}
          <Link href="/about" passHref>
            <a className="footer-small-link text-red">
              Student Journalist Council - GCT{" "}
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
