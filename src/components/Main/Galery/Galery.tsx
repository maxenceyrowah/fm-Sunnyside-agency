import { galeryOptions } from "../../../configs/galeryOptions";

const Galery = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-4 mt-36">
      {galeryOptions.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="avatar logo" />
        </div>
      ))}
    </div>
  );
};

export default Galery;
