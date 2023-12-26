const Photography = () => {
  return (
    <div className="md:basis-3/6 md:bg-photography-desktop bg-photography-mobile bg-no-repeat bg-cover bg-top">
      <div className="w-3/6 text-center m-auto">
        <div className="flex flex-col justify-end h-screen items-center md:mt-0 mt-10">
          <p className="font-fraunces text-3xl mb-5 text-dark-blue">
            Photography
          </p>
          <div className="md:mb-40 mb-20 w-[21rem] md:p-0 p-5 text-dark-blue">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
