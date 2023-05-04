interface GridProps {
  header: string;
  paragraph1: string;
  para2: string;
  Para3: string;
  para4: string;
}
const Grids = ({ header, paragraph1, para2, Para3, para4 }: GridProps) => {
  return (
    <div className="mxauto flex flex-col pl-[20px]">
      <h1 className="text-xl font-semibold mb-[10px] md:mb-[18px] mt-[5px]">
        {header}
      </h1>
      <p className="md:mb-[10px]">{paragraph1}</p>
      <p className="md:mb-[10px]">{para2}</p>
      <p className="md:mb-[12px]">{Para3}</p>
      <p>{para4}</p>
    </div>
  );
};

export default Grids;
