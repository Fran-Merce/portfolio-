import imgPerfil from "@/assets/imgPerfil.png";

interface IProps {
  description: string[];
}

export const Description = ({ description }: IProps) => {
  return (
    <>
      <div className="max-w-lg p-4">
        <div className=" text-stone-300 ">
          {description.map((item: string, index: number) => (
            <p className="my-2" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="w-2/3  md:w-1/3 max-w-xs p-5 backdrop-blur-xl transition-colors">
        <img
          className=" object-cover filter border-b-[1px] border-purple-400 border-r-[1px] p-4 transition-all duration-500 backdrop-blur-md h-[90%] object-center opacity-15"
          src={imgPerfil}
          alt=""
        />
      </div>
    </>
  );
};
