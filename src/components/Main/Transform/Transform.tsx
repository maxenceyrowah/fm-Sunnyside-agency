import TransformImg from "../../../assets/images/desktop/image-transform.jpg";

const Transform = () => {
  return (
    <div className="flex items-center">
      <div className="w-3/6">
        <div className="w-4/6 m-auto">
          <p className="font-fraunces w-96 text-5xl">Transform your brand</p>
          <div className="mt-10 text-desaturated-blue w-[30rem]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </div>
          <div className="mt-10">
            <button className="uppercase font-fraunces border-b-[7px] border-primary-yellow">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/6">
        <img src={TransformImg} alt="transform img" className="w-full" />
      </div>
    </div>
  );
};

export default Transform;
