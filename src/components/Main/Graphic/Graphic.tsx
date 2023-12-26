const Graphic = () => {
  return (
    <div className="md:basis-3/6 md:bg-graphic-desktop bg-graphic-mobile md:h-full bg-no-repeat bg-cover bg-top">
      <div className="md:w-3/6 text-center m-auto">
        <div className="flex flex-col justify-end h-screen items-center md:mt-0 mt-10">
          <p className="font-fraunces text-3xl mb-5 text-dark-desaturated">
            Graphic Design
          </p>
          <div className="md:mb-40 mb-20 w-[21rem] md:p-0 p-5 text-dark-desaturated">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
