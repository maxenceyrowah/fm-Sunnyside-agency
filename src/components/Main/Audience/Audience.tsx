const Audience = () => {
  return (
    <div className="md:flex md:items-center">
      <div className="md:basis-3/6 md:bg-audience-desktop bg-audience-mobile md:h-screen h-[300px] md:bg-center bg-top bg-cover bg-no-repeat"></div>

      <div className="md:basis-3/6 md:mt-0 mt-10 md:text-left text-center">
        <div className="md:w-4/6 w-auto m-auto">
          <p className="font-fraunces md:w-[24rem] md:text-left text-3xl">
            Stand out to the right audience
          </p>
          <div className="mt-10 text-desaturated-blue md:w-[25rem] w-auto md:p-0 p-5">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </div>
          <div className="mt-10 md:mb-0 mb-10">
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
