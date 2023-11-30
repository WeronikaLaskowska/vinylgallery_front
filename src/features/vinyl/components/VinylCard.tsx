import { Vinyl } from "@/models/vinyl";
import Image from "next/image";
const VinylCard = ({ vinyl }: { vinyl: Vinyl }) => {
  return (
    <>
      <section className="product  relative gap-4 mx-auto p-10  bg-white rounded-md shadow-lg m-4 w-[400px] h-[300px]">
        <div
          className="absolute -left-[80px] w-[200px] max-h-[250px] top-0 bottom-0 m-auto rounded-tl-md rounded-tr-md shadow-md"
          style={{ borderRadius: 15 }}
        >
          <Image
            src={`http://localhost:3000/uploads/${vinyl.image}`}
            alt="Image vinyl"
            fill
            style={{ objectFit: "cover", borderRadius: 15 }}
          />
        </div>
        <div className="product__info  max-w-[200px] ml-auto">
          <div className="title mb-3">
            <h1 className="text-primary text-2xl font-bold text-primary-500">
              {vinyl.name}
            </h1>
            <span className="text-secondary text-xl ">{vinyl.artist}</span>
          </div>
          <div className="price mb-4">
            <span
              className="text-highlight text-5xl p-5 min-w-[150px]"
              style={{ border: "1px solid red", borderRadius: 999 }}
            >
              {vinyl.score}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default VinylCard;
