import AudienceImg from "../../../assets/images/desktop/image-stand-out.jpg";

const Audience = () => {
  return (
    <div className="flex items-center">
      <div className="w-3/6">
        <img src={AudienceImg} alt="Audience img" className="w-full" />
      </div>

      <div className="w-3/6">
        <div className="w-4/6 m-auto">
          <p className="font-fraunces w-[35rem] text-5xl">
            Stand out to the right audience
          </p>
          <div className="mt-10 text-desaturated-blue w-[30rem]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </div>
          <div className="mt-10">
            <button className="uppercase font-fraunces border-b-[7px] border-soft-red">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
