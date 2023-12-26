import { testimonialsOptions } from "../../../configs/testimonialsOptions";

const Testimonials = () => {
  return (
    <div className="w-5/6 mx-auto mt-20">
      <p className="font-fraunces uppercase tracking-widest m-auto text-center mb-20 text-dark-grayish">
        Client testimonials
      </p>

      <div className="flex md:flex-row flex-col gap-6 justify-around">
        {testimonialsOptions.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center text-center"
          >
            <img src={item.img} alt="avatar logo" className="rounded-full" />
            <div className="mt-10">
              <div className="md:w-[23rem] w-auto text-dark-grayish">
                {item.description}
              </div>
            </div>

            <div className="mt-10">
              <p className="font-barlow font-bold">{item.name}</p>
              <p className="text-sm text-dark-grayish md:mb-0 mb-10">
                {item.poste}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
