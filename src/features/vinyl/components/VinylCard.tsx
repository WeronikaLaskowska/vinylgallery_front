import { Vinyl } from "@/models/vinyl";
import Image from "next/image";
const VinylCard = ({
  vinyl,
  onClick,
  handleVinylDelete,
  handleVinylEdit,
}: {
  vinyl: Vinyl;
  onClick?: () => void;
  handleVinylDelete?: (v: string) => void;
  handleVinylEdit?: (v: string) => void;
}) => {
  return (
    <>
      <section
        onClick={onClick}
        className="product cursor-pointer  relative gap-4 mx-auto p-10  bg-white rounded-md shadow-lg m-4 w-[350px] sm:w-[400px] h-[300px]"
      >
        <div
          className="absolute left-5 sm:-left-[80px] w-[150px] sm:w-[200px] max-h-[250px] top-0 bottom-0 m-auto rounded-tl-md rounded-tr-md shadow-md"
          style={{ borderRadius: 15 }}
        >
          <Image
            src={`http://localhost:3000/uploads/${vinyl.image.replace(
              "uploads\\",
              ""
            )}`}
            alt="Image vinyl"
            fill
            style={{ objectFit: "cover", borderRadius: 15 }}
          />
        </div>
        <div className=" ml-[160px] sm:ml-24 rounded-3xl max-w-sm   flex-col">
          <div className=" group ">
            <div className="text-primary-500 font-bold sm:text-2xl line-clamp-2">
              {vinyl.name}
            </div>
            <span className="text-slate-400 pt-2 font-semibold">
              {vinyl.artist}
            </span>
            <div className=" h-18 sm:h-24">
              <span className="line-clamp-3 py-2 text-base font-light leading-relaxed">
                {vinyl.description}
              </span>
            </div>
            <div className="  flex group justify-center sm:justify-between flex-col sm:flex-row">
              <div className="font-black flex flex-col">
                <span className="text-secondary-700 ">SCORE</span>
                <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                  {vinyl.score}
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                        fill="#eab308"
                      />{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="hidden  sm:flex flex-col items-end">
                <div className="h-7" />
                <span className="text-3xl  font-bold  gap-x-2 text-slate-300">
                  ({vinyl.year})
                </span>
              </div>
            </div>
          </div>
        </div>
        {handleVinylEdit && handleVinylDelete && (
          <div
            className="action-btns absolute top-2 right-2 flex gap-3"
            style={{ opacity: 0.4 }}
          >
            <svg
              onClick={() => handleVinylEdit(vinyl._id)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-settings"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <svg
              onClick={() => handleVinylDelete(vinyl._id)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-trash"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </div>
        )}
      </section>
    </>
  );
};

export default VinylCard;
