import { Audience } from "./Audience";
import { Galery } from "./Galery";
import { Graphic } from "./Graphic";
import { Photography } from "./Photography";
import { Testimonials } from "./Testimonials";
import { Transform } from "./Transform";

const Main = () => {
  return (
    <>
      <Transform />
      <Audience />

      <div className="flex md:h-screen md:flex-row flex-col">
        <Graphic />
        <Photography />
      </div>

      <Testimonials />
      <Galery />
    </>
  );
};

export default Main;
