import { galeryOptions } from "../../../configs/galeryOptions";

const Galery = () => {
  return (
    <div className="grid md:grid-rows-1 md:grid-cols-4 grid-rows-2 grid-cols-2 md:mt-36 mt-5">
      {galeryOptions.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="avatar logo" />
        </div>
      ))}
    </div>
  );
};

export default Galery;
