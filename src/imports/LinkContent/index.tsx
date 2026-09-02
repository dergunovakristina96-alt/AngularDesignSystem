import svgPaths from "./svg-6kvm56kqb9";
type IconProps = {
  className?: string;
  type?: "Checkbox checked" | "Checkbox uncheckrd";
};

function Icon({ className, type = "Checkbox uncheckrd" }: IconProps) {
  return (
    <div className={className || "relative size-[26px]"}>
      {type === "Checkbox uncheckrd" && (
        <div className="absolute inset-[12.5%]" data-name="Icon Path">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.5" preserveAspectRatio="none" viewBox="0 0 19.5 19.5" width="19.5">
            <path d={svgPaths.p1199b980} fill="#D0D0D0" id="Icon Path" />
          </svg>
        </div>
      )}
      {type === "Checkbox checked" && (
        <div className="absolute left-0 size-[26px] top-0" data-name="Icons">
          <div className="absolute inset-[12.5%]" data-name="Icon Path">
            <svg className="absolute block inset-0 size-full" fill="none" height="19.5" preserveAspectRatio="none" viewBox="0 0 19.5 19.5" width="19.5">
              <path d={svgPaths.p1199b980} fill="#4FCDFF" id="Icon Path" />
            </svg>
          </div>
          <div className="absolute aspect-[24/24] left-[11.54%] right-[1.79%] top-0" data-name="ic:round-check">
            <div className="absolute inset-[25.03%_14.24%_22.57%_15.95%]" data-name="Icon Path">
              <svg className="absolute block inset-0 size-full" fill="none" height="11.8061" preserveAspectRatio="none" viewBox="0 0 15.7302 11.8061" width="15.7302">
                <path d={svgPaths.p19276070} fill="#FF9B1D" id="Icon Path" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
type ContentLinksProps = {
  className?: string;
  state?: "Default" | "Chosen";
};

function ContentLinks({ className, state = "Chosen" }: ContentLinksProps) {
  const isChosen = state === "Chosen";
  const isDefault = state === "Default";
  return (
    <div className={className || `h-[92px] relative rounded-[8px] w-[623px] ${isDefault ? "bg-[#14141f]" : "bg-[rgba(79,205,255,0.1)]"}`}>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isDefault ? "border-[#434343]" : "border-[#4fcdff]"}`} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative size-full">
          <div className="bg-[#2a2a38] h-[68px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Thumbnail" />
          <div className={`content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative ${isDefault ? '[word-break:break-word] font-["Inter:Regular",sans-serif] font-normal not-italic whitespace-nowrap' : ""}`} data-name="Meta">
            {isChosen && (
              <>
                <div className="relative shrink-0" data-name="Titles">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative size-full whitespace-nowrap">
                      <p className="leading-[24px] relative shrink-0 text-[#fdfdff] text-[16px]">Welcome Tour Video</p>
                      <p className="leading-[14px] relative shrink-0 text-[#d0d0d0] text-[12px]">{`2:34 • 156 MB • 4K `}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(79,205,255,0.1)] content-stretch flex items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#4fcdff] text-[11px] whitespace-nowrap">Directly tagged for LobbyRoom</p>
                </div>
              </>
            )}
            {isDefault && (
              <>
                <p className="leading-[24px] relative shrink-0 text-[#d0d0d0] text-[16px]">Content Title</p>
                <p className="leading-[14px] relative shrink-0 text-[#a1a1a1] text-[12px]">180 MB • MP4 • 1080p</p>
              </>
            )}
          </div>
          <Icon className="relative shrink-0 size-[26px]" type={isChosen ? "Checkbox checked" : undefined} />
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
type TagsProps = {
  className?: string;
  name?: "Tree tag" | "Content tag";
};

function Tags({ className, name = "Content tag" }: TagsProps) {
  const isTreeTag = name === "Tree tag";
  return (
    <div className={className || `relative ${isTreeTag ? "bg-[rgba(79,205,255,0.1)] rounded-[4px]" : "bg-[#050507] rounded-[6px]"}`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className={`content-stretch flex items-start relative size-full ${isTreeTag ? "px-[6px] py-[2px]" : "px-[10px] py-[4px]"}`}>
          <p className={`[word-break:break-word] font-["Inter:Regular",sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4fcdff] whitespace-nowrap ${isTreeTag ? "text-[10px]" : "text-[11px]"}`}>{isTreeTag ? "Your Assigned Space" : "Accepted: 16:9 Video • Max 4K"}</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[30.08%_-0.04%_19.04%_23.89%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.4543" preserveAspectRatio="none" viewBox="0 0 146.207 26.4543" width="146.207">
        <g id="Group">
          <path d={svgPaths.p3173f5c0} fill="#4FCDFF" id="Vector" />
          <path d={svgPaths.p1330d600} fill="#4FCDFF" id="Vector_2" />
          <path d={svgPaths.p35aedb80} fill="#4FCDFF" id="Vector_3" />
          <path d={svgPaths.pc196f00} fill="#4FCDFF" id="Vector_4" />
          <path d={svgPaths.p358fb00} fill="#4FCDFF" id="Vector_5" />
          <path d={svgPaths.p1386ed00} fill="#4FCDFF" id="Vector_6" />
          <path d={svgPaths.p24190900} fill="#4FCDFF" id="Vector_7" />
          <path d={svgPaths.p18825a00} fill="#4FCDFF" id="Vector_8" />
          <path d={svgPaths.p3fcec000} fill="#4FCDFF" id="Vector_9" />
          <path d={svgPaths.p3d5d4900} fill="#4FCDFF" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[16.85%_83.58%_17.07%_0.04%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="34.3624" preserveAspectRatio="none" viewBox="0 0 31.4372 34.3624" width="31.4372">
        <g id="Group">
          <path d={svgPaths.p2e4902c0} fill="#892CA3" id="Vector" />
          <path d={svgPaths.p1fe36580} fill="#FDFDFF" id="Vector_2" />
          <path d={svgPaths.p331c8800} fill="#FDFDFF" id="Vector_3" />
          <path d={svgPaths.p317b9c00} fill="#FDFDFF" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="users">
          <path d={svgPaths.p15db900} id="Vector" stroke="#D0D0D0" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ChartLine() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chart-line">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chart-line">
          <path d={svgPaths.p156f40c0} id="Vector" stroke="#D0D0D0" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="settings">
          <path d={svgPaths.p59e22f0} id="Vector" stroke="#D0D0D0" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationItem() {
  return (
    <div className="bg-[#14141f] content-stretch flex flex-col gap-[8px] items-start py-[16px] relative rounded-br-[5px] rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full" data-name="Navigation Item">
      <div className="bg-[#050507] relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Icons">
              <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-0 left-1/2 top-0">
                <div className="absolute inset-[1.71%_6%]">
                  <svg className="block size-full" fill="none" height="15.4528" preserveAspectRatio="none" viewBox="0 0 14.08 15.4528" width="14.08">
                    <path d={svgPaths.p96f8870} id="Star 1" stroke="#4FCDFF" />
                  </svg>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[3px] left-1/2 top-[3px]">
                <div className="absolute inset-[2.74%_6%]">
                  <svg className="block size-full" fill="none" height="9.45277" preserveAspectRatio="none" viewBox="0 0 8.8 9.45277" width="8.8">
                    <path d={svgPaths.p2084d400} id="Star 2" stroke="#4FCDFF" />
                  </svg>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[6px] left-1/2 top-[6px]">
                <div className="absolute inset-[6.33%_6%]">
                  <svg className="block size-full" fill="none" height="3.49374" preserveAspectRatio="none" viewBox="0 0 3.52 3.49374" width="3.52">
                    <path d={svgPaths.p3966a200} id="Star 3" stroke="#4FCDFF" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#fdfdff] text-[16px] whitespace-nowrap">Islands</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Icons">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                  <path d={svgPaths.p245df200} fill="#D0D0D0" id="Vector" />
                </svg>
              </div>
            </button>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">Content</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Icons">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <Users />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">Client accounts</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Icons">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <ChartLine />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">Analytics</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Icons">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <Settings />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">{`Settings & API`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Sidebar Container">
      <div className="h-[52px] overflow-clip relative shrink-0 w-[192px]" data-name="Logos">
        <Group />
        <Group1 />
      </div>
      <NavigationItem />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Page header">
      <div className="relative shrink-0" data-name="Titles">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative size-full text-[#fdfdff] whitespace-nowrap">
          <p className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[28px]">Link Content</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px]">Muster Plaza</p>
        </div>
      </div>
    </div>
  );
}

function InputInner() {
  return (
    <div className="bg-[#050507] relative rounded-[12px] shrink-0 w-full" data-name="Input_inner">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-end p-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#a1a1a1] text-[16px]">Placeholder_input</p>
          <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Vector">
                  <div className="absolute inset-[-4.17%]">
                    <svg className="block size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26 26" width="26">
                      <path d={svgPaths.p167bd740} id="Vector" stroke="#D0D0D0" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#727272] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Indent() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-px relative w-[2px]" data-name="Indent" />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10 10.5" width="10">
          <g id="Group">
            <path d={svgPaths.p3545a080} id="Vector" stroke="#892CA3" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p65df500} id="Vector_2" stroke="#892CA3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MoleculesTreeNode() {
  return (
    <div className="content-stretch flex gap-[6px] h-[30px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Molecules/TreeNode">
      <Indent />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] whitespace-nowrap">▼</p>
      <div className="relative shrink-0 size-[12px]" data-name="Lock Icon">
        <Group2 />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[13px] whitespace-nowrap">Muster Plaza</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[11px] whitespace-nowrap">(World)</p>
    </div>
  );
}

function FloorSegment() {
  return <div className="h-px relative shrink-0 w-[28px]" data-name="Floor Segment" />;
}

function Floor2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[28px] items-center overflow-clip pl-[4px] py-[6px] relative rounded-[4px] shrink-0 w-full" data-name="Floor 3">
      <FloorSegment />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[10px] whitespace-nowrap">▼</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[13px] whitespace-nowrap">Floor 1</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[11px] whitespace-nowrap">(Building)</p>
    </div>
  );
}

function FloorSegment1() {
  return <div className="h-px relative shrink-0 w-[48px]" data-name="Floor Segment" />;
}

function EcospaceBuilding() {
  return (
    <div className="content-stretch flex gap-[6px] h-[28px] items-center overflow-clip pl-[4px] py-[6px] relative rounded-[4px] shrink-0 w-full" data-name="EcospaceBuilding">
      <FloorSegment1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[10px] whitespace-nowrap">▼</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[13px] whitespace-nowrap">EcospaceBuilding</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[11px] whitespace-nowrap">(Client Booth 4)</p>
      <Tags className="bg-[rgba(79,205,255,0.1)] relative rounded-[4px] shrink-0" name="Tree tag" />
    </div>
  );
}

function FloorSegment2() {
  return <div className="h-px relative shrink-0 w-[64px]" data-name="Floor Segment" />;
}

function Floor() {
  return (
    <div className="content-stretch flex gap-[6px] h-[28px] items-center overflow-clip pl-[4px] py-[6px] relative rounded-[4px] shrink-0 w-full" data-name="Floor 1">
      <FloorSegment2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[10px] whitespace-nowrap">▼</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[13px] whitespace-nowrap">Floor 1</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[11px] whitespace-nowrap">(Building)</p>
    </div>
  );
}

function Indent1() {
  return <div className="h-px relative shrink-0 w-[100px]" data-name="Indent" />;
}

function MoleculesTreeNode1() {
  return (
    <div className="bg-[rgba(137,44,163,0.1)] content-stretch flex gap-[6px] h-[30px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Molecules/TreeNode">
      <Indent1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#ff9b1d] text-[10px] whitespace-nowrap">●</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#ff9b1d] text-[13px] whitespace-nowrap">TV 1</p>
    </div>
  );
}

function Indent2() {
  return <div className="h-px relative shrink-0 w-[100px]" data-name="Indent" />;
}

function MoleculesTreeNode2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[30px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Molecules/TreeNode">
      <Indent2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4fcdff] text-[10px] whitespace-nowrap">●</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[13px] whitespace-nowrap">TV 2</p>
    </div>
  );
}

function Indent3() {
  return <div className="h-px relative shrink-0 w-[100px]" data-name="Indent" />;
}

function MoleculesTreeNode3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[30px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Molecules/TreeNode">
      <Indent3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[10px] text-[transparent] whitespace-nowrap">●</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[13px] whitespace-nowrap">Speaker</p>
    </div>
  );
}

function FloorSegment3() {
  return <div className="h-px relative shrink-0 w-[36px]" data-name="Floor Segment" />;
}

function Floor1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[28px] items-center overflow-clip pl-[4px] py-[6px] relative rounded-[4px] shrink-0 w-full" data-name="Floor 2">
      <FloorSegment3 />
      <div className="flex h-[11px] items-center justify-center relative shrink-0 w-[12px]">
        <div className="-rotate-90 flex-none">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#fdfdff] text-[10px] whitespace-nowrap">▼</p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[13px] whitespace-nowrap">Floor 2</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fdfdff] text-[11px] whitespace-nowrap">(Building)</p>
    </div>
  );
}

function TreeNodes() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[407px]" data-name="Tree Nodes">
      <MoleculesTreeNode />
      <Floor2 />
      <EcospaceBuilding />
      <Floor />
      <MoleculesTreeNode1 />
      <MoleculesTreeNode2 />
      <MoleculesTreeNode3 />
      <Floor1 />
    </div>
  );
}

function Container() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[10px] whitespace-nowrap" data-name="Container">
      <p className="relative shrink-0 text-[#4fcdff]">●</p>
      <p className="relative shrink-0 text-[#a1a1a1]">Linked Slot</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[#a1a1a1] text-[10px] whitespace-nowrap" data-name="Container">
      <p className="relative shrink-0">○</p>
      <p className="relative shrink-0">Empty Slot</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10 10.5" width="10">
          <g id="Group">
            <path d={svgPaths.p3545a080} id="Vector" stroke="#892CA3" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p65df500} id="Vector_2" stroke="#892CA3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[12px]" data-name="Lock Icon">
        <Group3 />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[10px] whitespace-nowrap">Read-only</p>
    </div>
  );
}

function TreeLegend() {
  return (
    <div className="content-stretch flex gap-[16px] h-[12px] items-start overflow-clip relative shrink-0 w-[230px]" data-name="Tree-Legend">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function OrganismsSpatialTreePanel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px p-[16px] relative w-[437px]" data-name="Organisms/SpatialTreePanel">
      <div className="relative shrink-0 w-full" data-name="Input">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
          <InputInner />
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px relative" data-name="Content Tree">
        <div className="content-stretch flex flex-col items-start justify-between relative size-full">
          <TreeNodes />
          <TreeLegend />
        </div>
      </div>
    </div>
  );
}

function OrganismSpatialHierarchyTreeWithMultiTenantScoping() {
  return (
    <div className="bg-[#14141f] border-[#2a2a38] border-r border-solid content-stretch flex flex-col items-start overflow-clip p-[16px] relative self-stretch shrink-0" data-name="Organism / Spatial Hierarchy Tree with Multi-Tenant Scoping">
      <OrganismsSpatialTreePanel />
    </div>
  );
}

function TreeCategory() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Tree Category">
      <div className="relative shrink-0 w-full" data-name="Titles">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[7px] items-start relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] w-full">Muster Plaza / Hexagon1 / Plaza / EcospaceBuilding / Floor1 / LobbyRoom / TV 1</p>
          <p className="font-['Exo_2:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#fdfdff] text-[20px] w-full">Change Content for TV (Placeholder)</p>
        </div>
      </div>
      <Tags className="bg-[#050507] relative rounded-[6px] shrink-0" />
    </div>
  );
}

function InputInner1() {
  return (
    <div className="bg-[#050507] relative rounded-[12px] shrink-0 w-full" data-name="Input_inner">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-end p-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#a1a1a1] text-[16px]">Placeholder_input</p>
          <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Vector">
                  <div className="absolute inset-[-4.17%]">
                    <svg className="block size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26 26" width="26">
                      <path d={svgPaths.p167bd740} id="Vector" stroke="#D0D0D0" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#727272] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ChosenContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Chosen Content Container">
      <ContentLinks className="bg-[rgba(79,205,255,0.1)] h-[92px] relative rounded-[8px] shrink-0 w-[623px]" />
      <ContentLinks className="bg-[#14141f] h-[92px] relative rounded-[8px] shrink-0 w-[623px]" state="Default" />
      <ContentLinks className="bg-[#14141f] h-[92px] relative rounded-[8px] shrink-0 w-[623px]" state="Default" />
      <ContentLinks className="bg-[#14141f] h-[92px] relative rounded-[8px] shrink-0 w-[623px]" state="Default" />
      <ContentLinks className="bg-[#14141f] h-[92px] relative rounded-[8px] shrink-0 w-[623px]" state="Default" />
    </div>
  );
}

function PreviewActions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start justify-end min-w-px overflow-clip relative" data-name="Preview-Actions">
      <div className="bg-[#434343] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ff9b1d] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">Cancel</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ff9b1d] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">Assign to slot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip pt-[8px] relative shrink-0 w-full" data-name="Modal-Footer">
      <PreviewActions />
    </div>
  );
}

function OrganismsContentSelectionModal() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative rounded-[12px] shrink-0 w-[671px]" data-name="Organisms/ContentSelectionModal">
      <TreeCategory />
      <div className="bg-[#050507] relative rounded-[10px] shrink-0 w-[623px]" data-name="Scope Tabs Segment Control">
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="content-stretch flex items-start justify-between px-[12px] py-[4px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="relative size-[30px]" data-name="Icons">
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
            </div>
          </div>
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
          <div className="relative shrink-0 size-[30px]" data-name="Icons">
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
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Input">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
          <InputInner1 />
        </div>
      </div>
      <ChosenContentContainer />
      <ModalFooter />
    </div>
  );
}

function TreePanel() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tree Panel">
      <OrganismSpatialHierarchyTreeWithMultiTenantScoping />
      <OrganismsContentSelectionModal />
    </div>
  );
}

function RightPanel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] relative" data-name="Right Panel">
      <PageHeader />
      <TreePanel />
    </div>
  );
}

export default function LinkContent() {
  return (
    <div className="bg-[#14141f] content-stretch flex items-start relative size-full" data-name="Link content">
      <div className="bg-[#14141f] relative self-stretch shrink-0 w-[260px]" data-name="Sidebar">
        <div aria-hidden className="absolute border-[#2a2a38] border-r border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <SidebarContainer />
        </div>
      </div>
      <RightPanel />
    </div>
  );
}