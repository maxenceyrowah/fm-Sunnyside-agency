const Transform = () => {
  return (
    <div className="md:flex md:flex-row md:items-center flex flex-col-reverse">
      <div className="md:basis-3/6">
        <div className="md:w-4/6 md:m-auto text-center">
          <p className="md:w-96 md:text-left md:mt-0 text-4xl font-fraunces w-auto mt-5">
            Transform your brand
          </p>
          <div className="md:text-left md:p-0 md:w-[25rem] md:mt-10 mt-5 text-desaturated-blue p-5">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </div>
          <div className="md:text-left mt-10 md:mb-0 mb-10">
            <button className="uppercase font-fraunces border-b-[7px] border-primary-yellow">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="md:basis-3/6 md:bg-transform-desktop md:h-screen h-[300px] md:bg-center bg-top bg-transform-mobile bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Transform;
