import {
  FacebookSvg,
  InstagramSvg,
  PinterestSvg,
  TwitterSvg,
} from "../../configs/icons";

const Footer = () => {
  return (
    <div className="bg-dark-moderate">
      <div className="w-80 m-auto text-center p-5">
        <p className="text-3xl font-black text-desaturated-blue">sunnyside</p>
        <div className="flex gap-5 justify-center mt-10 text-dark-grayish cursor-pointer">
          <p className=" hover:text-white">About</p>
          <p className=" hover:text-white">Services</p>
          <p className=" hover:text-white">Projects</p>
        </div>

        <div className="mt-10 flex gap-5 justify-center">
          <FacebookSvg />
          <InstagramSvg />
          <TwitterSvg />
          <PinterestSvg />
        </div>
      </div>
    </div>
  );
};

export default Footer;
