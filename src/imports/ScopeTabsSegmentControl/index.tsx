import svgPaths from "./svg-um1qir0taj";
type IconsProps = {
  className?: string;
  name?: "Arrow-circle";
};

function Icons({ className, name = "Arrow-circle" }: IconsProps) {
  return (
    <div className={className || "relative size-[30px]"}>
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Vector" />
      </svg>
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-2.22%]">
          <svg className="block size-full" fill="none" height="23.5" preserveAspectRatio="none" viewBox="0 0 23.5 23.5" width="23.5">
            <path d={svgPaths.p3a31eb00} id="Vector" stroke="#FDFDFF" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.94%_39.06%_35.94%_45.31%]" data-name="Vector">
        <div className="absolute inset-[-5.93%_-10.67%]">
          <svg className="block size-full" fill="none" height="9.43751" preserveAspectRatio="none" viewBox="0 0 5.6875 9.43751" width="5.6875">
            <path d={svgPaths.p30fded60} id="Vector" stroke="#FDFDFF" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type ChoiceOptionsProps = {
  className?: string;
  state?: boolean;
};

function ChoiceOptions({ className, state = true }: ChoiceOptionsProps) {
  const isNotState = !state;
  return (
    <div className={className || `relative rounded-[6px] ${isNotState ? "" : "bg-[#892ca3]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className={`[word-break:break-word] font-["Inter:Regular",sans-serif] font-normal leading-[13.8px] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${isNotState ? "text-[#d0d0d0]" : "text-[#141414]"}`}>{isNotState ? "Floor 1 (8)" : "LobbyRoom (3)"}</p>
        </div>
      </div>
    </div>
  );
}
type ScopeTabsSegmentControlProps = {
  className?: string;
  icons?: boolean;
};

function ScopeTabsSegmentControl({ className, icons = true }: ScopeTabsSegmentControlProps) {
  return (
    <div className={className || "bg-[#050507] relative rounded-[10px] w-[623px]"} data-name="Scope Tabs Segment Control">
      <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex items-start justify-between px-[12px] py-[4px] relative size-full">
        {icons && <Icons className="flex items-center justify-center relative shrink-0" />}
        <div className="bg-[#892ca3] relative rounded-[6px] shrink-0" data-name="Choice options">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.8px] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">LobbyRoom (3)</p>
            </div>
          </div>
        </div>
        <ChoiceOptions className="relative rounded-[6px] shrink-0" state={false} />
        <div className="relative rounded-[6px] shrink-0" data-name="Choice options">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.8px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">EchoSpaceBuilding(15)</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0" data-name="Choice options">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.8px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Plaza (22)</p>
            </div>
          </div>
        </div>
        {icons && <Icons className="relative shrink-0 size-[30px]" />}
      </div>
    </div>
  );
}

export default function ScopeTabsSegmentControl1() {
  return <ScopeTabsSegmentControl className="bg-[#050507] relative rounded-[10px] size-full" />;
}