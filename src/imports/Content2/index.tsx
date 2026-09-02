import svgPaths from "./svg-kgubpggghz";

function DeepLinkChip({ className }: { className?: string }) {
  return (
    <div className={className || "relative rounded-[6px] w-[468px]"} data-name="DeepLinkChip">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[10px] relative size-full">
          <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#4fcdff] text-[12px] underline">AudiBKK → LobbyRoom (TV1 / TV2)</p>
        </div>
      </div>
    </div>
  );
}
type IconsProps = {
  className?: string;
  name?: "Icon acent" | "Arrow-circle" | "Arrow-down" | "Check box" | "Check box fill" | "show" | "hide" | "Sort" | "Analytics" | "People" | "Settings thin" | "Search";
};

function Icons({ className, name = "Arrow-circle" }: IconsProps) {
  if (name === "Arrow-down") {
    return (
      <div className={className || "relative size-[30px]"} data-name="Name=Arrow-down">
        <div className="absolute inset-[35.29%_25.91%_36.21%_25.91%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.55188" preserveAspectRatio="none" viewBox="0 0 14.4525 8.55188" width="14.4525">
            <path clipRule="evenodd" d={svgPaths.pd8a6f80} fill="#FDFDFF" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Icon acent") {
    return (
      <div className={className || "relative size-[30px]"} data-name="Name=Icon acent">
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
  if (name === "Search") {
    return (
      <div className={className || "relative size-[20px]"} data-name="Name=Search">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Vector">
              <div className="absolute inset-[-5%]">
                <svg className="block size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
                  <path d={svgPaths.p33ff80} id="Vector" stroke="#141414" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "hide") {
    return (
      <button className={className || "block cursor-pointer relative size-[30px]"} data-name="Name=hide">
        <div className="absolute inset-[12.5%_4.17%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="23.75" preserveAspectRatio="none" viewBox="0 0 27.5 23.75" width="27.5">
            <path d={svgPaths.p1994c900} fill="#892CA3" id="Vector" />
          </svg>
        </div>
      </button>
    );
  }
  if (name === "show") {
    return (
      <button className={className || "block cursor-pointer relative size-[30px]"} data-name="Name=show">
        <div className="absolute inset-[18.75%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.75" preserveAspectRatio="none" viewBox="0 0 27.5 18.75" width="27.5">
            <path d={svgPaths.p23c77f80} fill="#FF9B1D" id="Vector" />
          </svg>
        </div>
      </button>
    );
  }
  if (name === "Check box fill") {
    return (
      <button className={className || "block cursor-pointer relative size-[26px]"} data-name="Name=Check box fill">
        <div className="absolute left-0 size-[26px] top-0" data-name="Icons">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="19.5" preserveAspectRatio="none" viewBox="0 0 19.5 19.5" width="19.5">
              <path d={svgPaths.p1199b980} fill="#4FCDFF" id="Vector" />
            </svg>
          </div>
          <div className="absolute aspect-[24/24] left-[11.54%] right-[1.79%] top-0" data-name="ic:round-check">
            <div className="absolute inset-[25.03%_14.24%_22.57%_15.95%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="11.8061" preserveAspectRatio="none" viewBox="0 0 15.7302 11.8061" width="15.7302">
                <path d={svgPaths.p19276070} fill="#FF9B1D" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (name === "Check box") {
    return (
      <button className={className || "block cursor-pointer relative size-[26px]"} data-name="Name=Check box">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.5" preserveAspectRatio="none" viewBox="0 0 19.5 19.5" width="19.5">
            <path d={svgPaths.p1199b980} fill="#4FCDFF" id="Vector" />
          </svg>
        </div>
      </button>
    );
  }
  if (name === "Analytics") {
    return (
      <div className={className || "relative size-[16px]"} data-name="Name=Analytics">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="chart-line">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <g id="chart-line">
                  <path d={svgPaths.p156f40c0} id="Vector" stroke="#141414" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "People") {
    return (
      <div className={className || "relative size-[16px]"} data-name="Name=People">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="users">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <g id="users">
                  <path d={svgPaths.p15db900} id="Vector" stroke="#141414" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Settings thin") {
    return (
      <div className={className || "relative size-[16px]"} data-name="Name=Settings thin">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="settings">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <g id="settings">
                  <path d={svgPaths.p59e22f0} id="Vector" stroke="#141414" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Sort") {
    return (
      <div className={className || "relative size-[12px]"} data-name="Name=Sort">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="sort-asc">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <g id="sort-asc">
                  <path d={svgPaths.p27f4eb00} id="Vector" stroke="#141414" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative size-[30px]"} data-name="Name=Arrow-circle">
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
type TableHeaderProps = {
  className?: string;
  name?: "Content";
};

function TableHeader({ className, name = "Content" }: TableHeaderProps) {
  return (
    <div className={className || "bg-[#14141f] h-[48px] relative rounded-tl-[16px] rounded-tr-[16px] w-[1094px]"}>
      <div aria-hidden className="absolute border-[#2a2a38] border-b border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
      <div className="content-stretch flex items-start pl-[66px] pr-[48px] py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] w-[421px]">Name</p>
        <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Content Item">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Weight/Duration</p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] w-[104px]">Connections</p>
        <div className="content-stretch flex items-start relative shrink-0 w-[176px]" data-name="Content Item">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Status</p>
        </div>
        <div className="content-stretch flex items-center pr-[24px] relative shrink-0 w-[169px]" data-name="Content Item">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Last modified</p>
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
      <div className="relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Icons">
              <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-0 left-1/2 top-0">
                <div className="absolute inset-[1.71%_6%]">
                  <svg className="block size-full" fill="none" height="15.4528" preserveAspectRatio="none" viewBox="0 0 14.08 15.4528" width="14.08">
                    <path d={svgPaths.p96f8870} id="Star 1" stroke="#D0D0D0" />
                  </svg>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[3px] left-1/2 top-[3px]">
                <div className="absolute inset-[2.74%_6%]">
                  <svg className="block size-full" fill="none" height="9.45277" preserveAspectRatio="none" viewBox="0 0 8.8 9.45277" width="8.8">
                    <path d={svgPaths.p2084d400} id="Star 2" stroke="#D0D0D0" />
                  </svg>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[6px] left-1/2 top-[6px]">
                <div className="absolute inset-[6.33%_6%]">
                  <svg className="block size-full" fill="none" height="3.49374" preserveAspectRatio="none" viewBox="0 0 3.52 3.49374" width="3.52">
                    <path d={svgPaths.p3966a200} id="Star 3" stroke="#D0D0D0" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">Islands</p>
          </div>
        </div>
      </div>
      <div className="bg-[#050507] relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Icons">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                  <path d={svgPaths.p245df200} fill="#4FCDFF" id="Vector" />
                </svg>
              </div>
            </button>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#fdfdff] text-[16px] whitespace-nowrap">Content</p>
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1104px]" data-name="Page header">
      <div className="relative shrink-0" data-name="Titles">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative size-full whitespace-nowrap">
          <p className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#fdfdff] text-[28px]">Content</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px]">Manage media assets, 3D models and interactive blocks</p>
        </div>
      </div>
      <div className="bg-[#ff9b1d] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">+ Create content</p>
            </div>
          </div>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#a1a1a1] text-[16px]">Search by island’s name</p>
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

function SortAsc() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="sort-asc">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="sort-asc">
          <path d={svgPaths.p26f3280} id="Vector" stroke="#FDFDFF" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ToggleButtons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Toggle Buttons">
      <div className="bg-[rgba(10,10,13,0.6)] h-[50px] relative rounded-[6px] shrink-0" data-name="Expert Toggle Button">
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[13px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdff] text-[16px] text-center whitespace-nowrap">
              <p className="leading-[24px]">Status: All</p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Icons">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="absolute inset-[35.29%_25.91%_36.21%_25.91%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="6.8415" preserveAspectRatio="none" viewBox="0 0 11.562 6.8415" width="11.562">
                    <path clipRule="evenodd" d={svgPaths.p2a7b0000} fill="#FDFDFF" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(10,10,13,0.6)] h-[50px] relative rounded-[6px] shrink-0" data-name="Expert Toggle Button">
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[13px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdff] text-[16px] text-center whitespace-nowrap">
              <p className="leading-[24px]">Sort: Last Modified</p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Icons">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                  <SortAsc />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="bg-[#14141f] content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Toolbar">
      <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
          <InputInner />
        </div>
      </div>
      <ToggleButtons />
    </div>
  );
}

function TitleRow() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-[437px]" data-name="Title Row">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#fdfdff] text-[14px]">Content title</p>
    </div>
  );
}

function Duration() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-name="Duration">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2:34</p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[104px]" data-name="Links">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2 links</p>
    </div>
  );
}

function IslandPublished() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]" data-name="Island Published">
      <div className="bg-[rgba(79,205,255,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#4fcdff] text-[12px] whitespace-nowrap">Ready</p>
        </div>
      </div>
    </div>
  );
}

function TimestampContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[121px]" data-name="Timestamp Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] whitespace-nowrap">Modified 2 hours ago</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Row">
      <Icons className="flex items-center justify-center relative shrink-0 size-[30px]" />
      <TitleRow />
      <Duration />
      <Links />
      <IslandPublished />
      <TimestampContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-start leading-[15px] relative shrink-0 text-[13px] w-full" data-name="Container">
      <p className="relative shrink-0 text-[#727272] w-full">{`Support & Notes:`}</p>
      <p className="relative shrink-0 text-[#fdfdff] w-full">Introduction video displayed during guest walkthrough</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#727272] w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[13px] w-full">File Specs:</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] w-full">1080p H.264 • 156 MB • Aspect 16:9</p>
    </div>
  );
}

function Column1Metadata() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative" data-name="Column 1 - Metadata">
      <Container />
      <Container1 />
    </div>
  );
}

function ActivePlacementsHeader() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Active Placements Header">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#fdfdff] text-[16px] w-[306px]">Active Placements (Linked to 2 Islands)</p>
      <div className="relative shrink-0 size-[24px]" data-name="Icons">
        <div className="absolute inset-[35.29%_25.91%_36.21%_25.91%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.8415" preserveAspectRatio="none" viewBox="0 0 11.562 6.8415" width="11.562">
            <path clipRule="evenodd" d={svgPaths.p2a7b0000} fill="#FDFDFF" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ActivePlacementsList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Active Placements List">
      <DeepLinkChip className="relative rounded-[6px] shrink-0 w-[468px]" />
      <div className="relative rounded-[6px] shrink-0 w-[468px]" data-name="Deeplink">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center py-[10px] relative size-full">
            <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#4fcdff] text-[12px] underline">Muster Plaza → Main Entrance (Display)</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-w-full not-italic relative shrink-0 text-[#727272] text-[12px] w-[min-content]">Click location to open and manage slot in Island Structure tree</p>
    </div>
  );
}

function ExpandedDetailsBody() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[4px] relative shrink-0 w-full" data-name="Expanded Details Body">
      <Column1Metadata />
      <div className="relative shrink-0 w-[468px]" data-name="Column 2">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
            <ActivePlacementsHeader />
            <ActivePlacementsList />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButtonsBar() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Action Buttons Bar">
      <div className="bg-[#ff9b1d] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">Delete content</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#434343] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ff9b1d] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">Change content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomActionButtonsBar() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-name="Bottom Action Buttons Bar">
      <ActionButtonsBar />
      <div className="relative rounded-[12px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#a1a1a1] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ff9b1d] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">Link to another Island</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleRow1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-[437px]" data-name="Title Row">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#fdfdff] text-[14px]">Content title</p>
    </div>
  );
}

function Duration1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-name="Duration">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2:34</p>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[104px]" data-name="Links">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2 links</p>
    </div>
  );
}

function IslandPublished1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]" data-name="Island Published">
      <div className="bg-[rgba(5,5,7,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Processing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimestampContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[121px]" data-name="Timestamp Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] whitespace-nowrap">Modified 2 hours ago</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Row">
      <div className="flex items-center justify-center relative shrink-0 size-[30px]">
        <div className="-rotate-90 flex-none">
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
      <TitleRow1 />
      <Duration1 />
      <Links1 />
      <IslandPublished1 />
      <TimestampContainer1 />
    </div>
  );
}

function TitleRow2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-[437px]" data-name="Title Row">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#fdfdff] text-[14px]">Content title</p>
    </div>
  );
}

function Duration2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-name="Duration">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2:34</p>
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[104px]" data-name="Links">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2 links</p>
    </div>
  );
}

function IslandPublished2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]" data-name="Island Published">
      <div className="bg-[rgba(255,77,94,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#ff4d5e] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#ff4d5e] text-[12px] whitespace-nowrap">Error</p>
        </div>
      </div>
    </div>
  );
}

function TimestampContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[121px]" data-name="Timestamp Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] whitespace-nowrap">Modified 2 hours ago</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Row">
      <div className="flex items-center justify-center relative shrink-0 size-[30px]">
        <div className="-rotate-90 flex-none">
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
      <TitleRow2 />
      <Duration2 />
      <Links2 />
      <IslandPublished2 />
      <TimestampContainer2 />
    </div>
  );
}

function TitleRow3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-[437px]" data-name="Title Row">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#fdfdff] text-[14px]">Content title</p>
    </div>
  );
}

function Duration3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-name="Duration">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2:34</p>
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[104px]" data-name="Links">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">2 links</p>
    </div>
  );
}

function IslandPublished3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]" data-name="Island Published">
      <div className="bg-[rgba(79,205,255,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#4fcdff] text-[12px] whitespace-nowrap">Ready</p>
        </div>
      </div>
    </div>
  );
}

function TimestampContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[121px]" data-name="Timestamp Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] whitespace-nowrap">Modified 2 hours ago</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Row">
      <div className="flex items-center justify-center relative shrink-0 size-[30px]">
        <div className="-rotate-90 flex-none">
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
      <TitleRow3 />
      <Duration3 />
      <Links3 />
      <IslandPublished3 />
      <TimestampContainer3 />
    </div>
  );
}

function ContentTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1056px]" data-name="Content Table">
      <TableHeader className="bg-[#14141f] h-[48px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[1094px]" />
      <div className="bg-[#14141f] relative shrink-0 w-[1056px]" data-name="Table-Row">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start pl-[20px] pr-[48px] py-[16px] relative size-full">
            <Row />
            <div className="bg-[#14141f] relative shrink-0 w-[984px]" data-name="Details">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative size-full">
                  <ExpandedDetailsBody />
                  <BottomActionButtonsBar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#2a2a38] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#14141f] relative shrink-0 w-[1056px]" data-name="Table-Row">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start pl-[20px] pr-[48px] py-[16px] relative size-full">
            <Row1 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#2a2a38] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#14141f] relative shrink-0 w-[1056px]" data-name="Table-Row">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start pl-[20px] pr-[48px] py-[16px] relative size-full">
            <Row2 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#2a2a38] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-[#14141f] relative shrink-0 w-[1056px]" data-name="Table-Row">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start pl-[20px] pr-[48px] py-[16px] relative size-full">
            <Row3 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#2a2a38] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function UiStepNodeMax() {
  return <div className="absolute left-0 size-[4px] top-[0.04px]" data-name="UI_StepNode_Max" />;
}

function SldTrackWithDots() {
  return (
    <div className="bg-[#2a2a38] drop-shadow-[0px_2px_2.5px_rgba(0,0,0,0.25)] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Sld_TrackWithDots">
      <UiStepNodeMax />
      <div className="absolute bg-[#2a2a38] h-[4px] left-[-1px] rounded-[2px] top-0 w-[406px]" data-name="Sld_Track" />
      <div className="absolute left-0 shadow-[0px_4px_5px_0px_rgba(20,20,20,0.4),0px_-4px_10px_0px_rgba(222,105,255,0.25)] size-[20px] top-[-8px]" data-name="Tex_Icon">
        <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-0 left-1/2 top-0" data-name="Tex_Hexagon_Vector">
          <div className="absolute inset-[0.81%_6.73%]">
            <svg className="block size-full" fill="none" height="19.6742" preserveAspectRatio="none" viewBox="0 0 17.3064 19.6742" width="17.3064">
              <path d={svgPaths.pad11e80} fill="#A156B5" id="Tex_Hexagon_Vector" stroke="#892CA3" strokeMiterlimit="1.30541" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#4fcdff] h-[4px] left-0 rounded-[2px] top-0 w-px" data-name="Sld_ActiveTrack" />
    </div>
  );
}

function SldTrackWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative" data-name="Sld_TrackWrapper">
      <SldTrackWithDots />
    </div>
  );
}

function OrganismsContentTable() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px relative w-full" data-name="Organisms/ContentTable">
      <ContentTable />
      <div className="flex h-[699px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-90">
          <div className="h-[24px] relative w-[699px]" data-name="Sld_Base">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <div className="absolute bg-[#4fcdff] h-[4px] left-[-0.11px] rounded-[2px] top-[10px] w-[17px]" data-name="Sld_ActiveTrack" />
                <SldTrackWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px overflow-clip pl-[24px] pr-[48px] py-[32px] relative" data-name="MainContent">
      <PageHeader />
      <Toolbar />
      <OrganismsContentTable />
    </div>
  );
}

export default function Content() {
  return (
    <div className="bg-[#14141f] content-stretch flex items-start relative size-full" data-name="Content2">
      <div className="bg-[#14141f] h-full relative shrink-0 w-[260px]" data-name="Sidebar">
        <div aria-hidden className="absolute border-[#2a2a38] border-r border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <SidebarContainer />
        </div>
      </div>
      <MainContent />
    </div>
  );
}