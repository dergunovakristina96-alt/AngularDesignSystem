import svgPaths from "./svg-fv2licsfj8";
type IconsProps = {
  className?: string;
  name?: "Icon acent";
};

function Icons({ className, name = "Icon acent" }: IconsProps) {
  return (
    <div className={className || "relative size-[30px]"}>
      <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-0 left-1/2 top-0">
        <div className="absolute inset-[3.19%_6%]">
          <svg className="block size-full" fill="none" height="28.0847" preserveAspectRatio="none" viewBox="0 0 26.4 28.0847" width="26.4">
            <path d={svgPaths.p12b8ac00} id="Star 1" stroke="#4FCDFF" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[3px] left-1/2 top-[3px]">
        <div className="absolute inset-[3.99%_6%]">
          <svg className="block size-full" fill="none" height="22.0847" preserveAspectRatio="none" viewBox="0 0 21.12 22.0847" width="21.12">
            <path d={svgPaths.p1b03780} id="Star 2" stroke="#4FCDFF" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[6px] left-1/2 top-[6px]">
        <div className="absolute inset-[5.32%_6%]">
          <svg className="block size-full" fill="none" height="16.0847" preserveAspectRatio="none" viewBox="0 0 15.84 16.0847" width="15.84">
            <path d={svgPaths.p2b8c180} id="Star 3" stroke="#4FCDFF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Icons1() {
  return <Icons className="relative size-full" />;
}