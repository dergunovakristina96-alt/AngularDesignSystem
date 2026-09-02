import svgPaths from "./svg-s9c5gv4liw";
import imgThumbnailArea from "./affa6995ab42d6749a29b85ecab322b5823e5c17.png";
import imgThumbnailArea1 from "./8fa83cfc35f3a2ca10bd055568fc02692815e284.png";
import imgThumbnailArea2 from "./5d8533af869ece9b4d40268a7fdd11c1a5863457.png";
import imgThumbnailArea3 from "./22fc9322894326da9acea6f002040e164d6b5b4a.png";
import imgThumbnailArea4 from "./a94135856ed8097833049995030baf0ede34ca52.png";
import imgThumbnailArea5 from "./35ca2418d22ac97861e6ce1a08f27bc1205f6b56.png";
type IconsProps = {
  className?: string;
  name?: "Icon acent" | "Arrow-down" | "Check box" | "Check box fill" | "show" | "hide" | "Sort" | "Grid" | "Analytics" | "People" | "Settings thin" | "dots" | "Search";
};

function Icons({ className, name = "Arrow-down" }: IconsProps) {
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
  if (name === "Grid") {
    return (
      <div className={className || "relative size-[16px]"} data-name="Name=Grid">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="layout-grid">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <g id="layout-grid">
                  <g id="Vector">
                    <path d={svgPaths.p1cfa1bc0} stroke="#141414" strokeLinecap="round" />
                    <path d={svgPaths.p2cfdb900} stroke="#141414" strokeLinecap="round" />
                    <path d={svgPaths.p17f25d40} stroke="#141414" strokeLinecap="round" />
                    <path d={svgPaths.p15fb5e00} stroke="#141414" strokeLinecap="round" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
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
  if (name === "dots") {
    return (
      <div className={className || "relative size-[20px]"} data-name="Name=dots">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
              <div className="absolute inset-[-4.69%_-37.47%]">
                <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                  <g id="Vector">
                    <path d={svgPaths.p3c11c400} fill="#141414" />
                    <path d={svgPaths.p2d122d80} fill="#141414" />
                    <path d={svgPaths.p602ef80} fill="#141414" />
                    <path d={svgPaths.p3c11c400} stroke="#141414" strokeLinecap="round" />
                    <path d={svgPaths.p2d122d80} stroke="#141414" strokeLinecap="round" />
                    <path d={svgPaths.p602ef80} stroke="#141414" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
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
    <div className={className || "relative size-[30px]"} data-name="Name=Arrow-down">
      <div className="absolute inset-[35.29%_25.91%_36.21%_25.91%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="8.55188" preserveAspectRatio="none" viewBox="0 0 14.4525 8.55188" width="14.4525">
          <path clipRule="evenodd" d={svgPaths.pd8a6f80} fill="#FDFDFF" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type IconProps = {
  className?: string;
  type?: "Menu" | "Next page" | "Inactive page" | "Active page";
};

function Icon({ className, type = "Menu" }: IconProps) {
  const isActivePage = type === "Active page";
  const isInactivePage = type === "Inactive page";
  const isInactivePageOrNextPage = ["Inactive page", "Next page"].includes(type);
  const isNextPage = type === "Next page";
  return (
    <div className={className || `relative rounded-[6px] ${isActivePage ? "bg-[#892ca3] size-[40px]" : isNextPage ? "bg-[#14141f]" : isInactivePage ? "bg-[#14141f] size-[40px]" : "bg-[#050507] size-[32px]"}`}>
      <div aria-hidden={isInactivePageOrNextPage ? true : undefined} className={isActivePage ? "flex flex-row items-center justify-center size-full" : isNextPage ? "absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[6px]" : isInactivePage ? "absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" : "flex flex-col items-center justify-center size-full"}>
        {["Menu", "Active page"].includes(type) && (
          <div className={`content-stretch flex items-center justify-center relative size-full ${isActivePage ? "" : "flex-col"}`}>
            {type === "Menu" && (
              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Icons">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
                      <div className="absolute inset-[-4.69%_-37.47%]">
                        <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                          <g id="Vector">
                            <path d={svgPaths.p3c11c400} fill="#D0D0D0" />
                            <path d={svgPaths.p2d122d80} fill="#D0D0D0" />
                            <path d={svgPaths.p602ef80} fill="#D0D0D0" />
                            <path d={svgPaths.p3c11c400} stroke="#D0D0D0" strokeLinecap="round" />
                            <path d={svgPaths.p2d122d80} stroke="#D0D0D0" strokeLinecap="round" />
                            <path d={svgPaths.p602ef80} stroke="#D0D0D0" strokeLinecap="round" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isActivePage && <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#fdfdff] text-[16px] whitespace-nowrap">1</p>}
          </div>
        )}
      </div>
      {isInactivePageOrNextPage && (
        <div className={`flex size-full ${isNextPage ? "content-stretch items-start p-[10px] relative" : "flex-row items-center justify-center"}`}>
          {isInactivePage && (
            <div className="content-stretch flex items-center justify-center relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">2</p>
            </div>
          )}
          {isNextPage && <Icons className="flex items-center justify-center relative shrink-0 size-[30px]" />}
        </div>
      )}
    </div>
  );
}
type TitlesProps = {
  className?: string;
  state?: "Screen" | "Island card";
};

function Titles({ className, state = "Screen" }: TitlesProps) {
  const isIslandCard = state === "Island card";
  return (
    <div className={className || `relative ${isIslandCard ? "w-[764px]" : ""}`}>
      <div className={`[word-break:break-word] content-stretch flex flex-col items-start relative size-full whitespace-nowrap ${isIslandCard ? 'font-["Inter:Regular",sans-serif] font-normal gap-[8px] not-italic' : "gap-[4px]"}`}>
        <p className={`relative shrink-0 text-[#fdfdff] ${isIslandCard ? "leading-[24px] overflow-hidden text-[16px] text-ellipsis w-full" : 'font-["Exo_2:SemiBold",sans-serif] font-semibold leading-[32px] text-[28px]'}`}>{isIslandCard ? "Muster Plaza" : "Title"}</p>
        <p className={`relative shrink-0 text-[#d0d0d0] ${isIslandCard ? "leading-[14px] overflow-hidden text-[12px] text-ellipsis w-full" : 'font-["Inter:Regular",sans-serif] font-normal leading-[24px] not-italic text-[16px]'}`}>{isIslandCard ? "audibkk-hexagon1-plaza" : "Subtitle with description"}</p>
      </div>
    </div>
  );
}
type TagsProps = {
  className?: string;
  name?: "Island archived" | "Island published" | "Island draft";
};

function Tags({ className, name = "Island published" }: TagsProps) {
  const isIslandArchived = name === "Island archived";
  const isIslandDraft = name === "Island draft";
  const isIslandPublishedOrIslandDraft = ["Island published", "Island draft"].includes(name);
  return (
    <div className={className || `relative rounded-[6px] ${isIslandArchived ? "bg-[rgba(208,208,208,0.1)] opacity-60" : isIslandDraft ? "bg-[rgba(5,5,7,0.1)]" : "bg-[rgba(79,205,255,0.1)]"}`}>
      <div aria-hidden={isIslandPublishedOrIslandDraft ? true : undefined} className={isIslandArchived ? "flex flex-row items-center justify-center size-full" : isIslandDraft ? "absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" : "absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]"}>
        {isIslandArchived && (
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Archived</p>
          </div>
        )}
      </div>
      {isIslandPublishedOrIslandDraft && (
        <div className={`flex size-full ${isIslandDraft ? "flex-row items-center justify-center" : "content-stretch items-start px-[10px] py-[4px] relative"}`}>
          {name === "Island published" && <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#4fcdff] text-[12px] whitespace-nowrap">Published</p>}
          {isIslandDraft && (
            <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Draft</p>
            </div>
          )}
        </div>
      )}
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1104px]" data-name="Page header">
      <div className="relative shrink-0" data-name="Titles">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative size-full whitespace-nowrap">
          <p className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#fdfdff] text-[28px]">Islands</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px]">Deploy and monitor enterprise spatial environments</p>
        </div>
      </div>
      <div className="bg-[#ff9b1d] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">+ Create Island</p>
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

function LayoutGrid() {
  return (
    <div className="aspect-[16/16] relative shrink-0 w-full" data-name="layout-grid">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="layout-grid">
          <g id="Vector">
            <path d={svgPaths.p1cfa1bc0} stroke="#141414" strokeLinecap="round" />
            <path d={svgPaths.p2cfdb900} stroke="#141414" strokeLinecap="round" />
            <path d={svgPaths.p17f25d40} stroke="#141414" strokeLinecap="round" />
            <path d={svgPaths.p15fb5e00} stroke="#141414" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GridIcon() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0" data-name="Grid Icon">
      <div className="relative shrink-0 size-[24px]" data-name="Icons">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <LayoutGrid />
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
      <GridIcon />
    </div>
  );
}

function ThumbnailArea() {
  return (
    <div className="content-stretch flex flex-col h-[258px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="ThumbnailArea">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbnailArea} />
      <div className="absolute bg-[#050507] left-[214px] rounded-[6px] size-[32px] top-[10px]" data-name="Icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
                    <div className="absolute inset-[-4.69%_-37.47%]">
                      <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                        <g id="Vector">
                          <path d={svgPaths.p3c11c400} fill="#D0D0D0" />
                          <path d={svgPaths.p2d122d80} fill="#D0D0D0" />
                          <path d={svgPaths.p602ef80} fill="#D0D0D0" />
                          <path d={svgPaths.p3c11c400} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p2d122d80} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p602ef80} stroke="#D0D0D0" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetails() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Card Details">
      <Tags className="bg-[rgba(79,205,255,0.1)] relative rounded-[6px] shrink-0" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Version 1.0.2</p>
    </div>
  );
}

function CardInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Card Info">
      <Titles className="relative shrink-0 w-full" state="Island card" />
      <CardDetails />
    </div>
  );
}

function DropdownItem() {
  return (
    <div className="bg-[#050507] content-stretch flex items-center relative rounded-[6px] shrink-0 w-full" data-name="Dropdown Item">
      <div className="h-[22px] relative rounded-[12px] shrink-0 w-[139px]" data-name="Button">
        <div aria-hidden className="absolute border border-[#a1a1a1] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ff9b1d] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[14px]">Link content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownItem1() {
  return (
    <div className="bg-[#050507] content-stretch flex items-center relative rounded-[6px] shrink-0 w-full" data-name="Dropdown Item">
      <div className="h-[22px] relative rounded-[12px] shrink-0 w-[139px]" data-name="Button">
        <div aria-hidden className="absolute border border-[#a1a1a1] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ff9b1d] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[14px]">Unpublish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownItem2() {
  return (
    <div className="bg-[#050507] content-stretch flex items-center relative rounded-[6px] shrink-0 w-full" data-name="Dropdown Item">
      <div className="h-[22px] relative rounded-[12px] shrink-0 w-[139px]" data-name="Button">
        <div aria-hidden className="absolute border border-[#a1a1a1] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ff9b1d] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[14px]">Archive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownItem3() {
  return (
    <div className="bg-[#050507] content-stretch flex items-center relative rounded-[6px] shrink-0 w-full" data-name="Dropdown Item">
      <div className="bg-[#ff9b1d] h-[22px] relative rounded-[12px] shrink-0 w-[139px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[14px]">Delete Island</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThumbnailArea1() {
  return (
    <div className="content-stretch flex flex-col h-[258px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="ThumbnailArea">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbnailArea1} />
      <div className="absolute bg-[#050507] left-[214px] rounded-[6px] size-[32px] top-[10px]" data-name="Icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
                    <div className="absolute inset-[-4.69%_-37.47%]">
                      <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                        <g id="Vector">
                          <path d={svgPaths.p3c11c400} fill="#D0D0D0" />
                          <path d={svgPaths.p2d122d80} fill="#D0D0D0" />
                          <path d={svgPaths.p602ef80} fill="#D0D0D0" />
                          <path d={svgPaths.p3c11c400} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p2d122d80} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p602ef80} stroke="#D0D0D0" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetails1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Card Details">
      <div className="bg-[rgba(5,5,7,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Draft</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Version 1.0.2</p>
    </div>
  );
}

function CardInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Card Info">
      <Titles className="relative shrink-0 w-full" state="Island card" />
      <CardDetails1 />
    </div>
  );
}

function ThumbnailArea2() {
  return (
    <div className="content-stretch flex flex-col h-[258px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="ThumbnailArea">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumbnailArea2} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <div className="absolute bg-[#050507] left-[214px] rounded-[6px] size-[32px] top-[10px]" data-name="Icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
                    <div className="absolute inset-[-4.69%_-37.47%]">
                      <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                        <g id="Vector">
                          <path d={svgPaths.p3c11c400} fill="#D0D0D0" />
                          <path d={svgPaths.p2d122d80} fill="#D0D0D0" />
                          <path d={svgPaths.p602ef80} fill="#D0D0D0" />
                          <path d={svgPaths.p3c11c400} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p2d122d80} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p602ef80} stroke="#D0D0D0" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetails2() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Card Details">
      <div className="bg-[rgba(208,208,208,0.1)] opacity-60 relative rounded-[6px] shrink-0" data-name="Tags">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Archived</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Version 1.0.2</p>
    </div>
  );
}

function CardInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Card Info">
      <Titles className="relative shrink-0 w-full" state="Island card" />
      <CardDetails2 />
    </div>
  );
}

function ThumbnailArea3() {
  return (
    <div className="content-stretch flex flex-col h-[258px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="ThumbnailArea">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbnailArea3} />
      <div className="absolute bg-[#050507] left-[214px] rounded-[6px] size-[32px] top-[10px]" data-name="Icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
                    <div className="absolute inset-[-4.69%_-37.47%]">
                      <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                        <g id="Vector">
                          <path d={svgPaths.p3c11c400} fill="#D0D0D0" />
                          <path d={svgPaths.p2d122d80} fill="#D0D0D0" />
                          <path d={svgPaths.p602ef80} fill="#D0D0D0" />
                          <path d={svgPaths.p3c11c400} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p2d122d80} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p602ef80} stroke="#D0D0D0" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetails3() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Card Details">
      <Tags className="bg-[rgba(79,205,255,0.1)] relative rounded-[6px] shrink-0" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Version 1.0.2</p>
    </div>
  );
}

function CardInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Card Info">
      <Titles className="relative shrink-0 w-full" state="Island card" />
      <CardDetails3 />
    </div>
  );
}

function ThumbnailArea4() {
  return (
    <div className="content-stretch flex flex-col h-[258px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="ThumbnailArea">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbnailArea4} />
      <div className="absolute bg-[#050507] left-[214px] rounded-[6px] size-[32px] top-[10px]" data-name="Icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
                    <div className="absolute inset-[-4.69%_-37.47%]">
                      <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                        <g id="Vector">
                          <path d={svgPaths.p3c11c400} fill="#D0D0D0" />
                          <path d={svgPaths.p2d122d80} fill="#D0D0D0" />
                          <path d={svgPaths.p602ef80} fill="#D0D0D0" />
                          <path d={svgPaths.p3c11c400} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p2d122d80} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p602ef80} stroke="#D0D0D0" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetails4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Card Details">
      <div className="bg-[rgba(5,5,7,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Draft</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Version 1.0.2</p>
    </div>
  );
}

function CardInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Card Info">
      <Titles className="relative shrink-0 w-full" state="Island card" />
      <CardDetails4 />
    </div>
  );
}

function ThumbnailArea5() {
  return (
    <div className="content-stretch flex flex-col h-[258px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="ThumbnailArea">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgThumbnailArea5} />
        <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      </div>
      <div className="absolute bg-[#050507] left-[214px] rounded-[6px] size-[32px] top-[10px]" data-name="Icon">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[10.666px] relative shrink-0 w-[1.334px]" data-name="Vector">
                    <div className="absolute inset-[-4.69%_-37.47%]">
                      <svg className="block size-full" fill="none" height="11.6656" preserveAspectRatio="none" viewBox="0 0 2.3344 11.6656" width="2.3344">
                        <g id="Vector">
                          <path d={svgPaths.p3c11c400} fill="#D0D0D0" />
                          <path d={svgPaths.p2d122d80} fill="#D0D0D0" />
                          <path d={svgPaths.p602ef80} fill="#D0D0D0" />
                          <path d={svgPaths.p3c11c400} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p2d122d80} stroke="#D0D0D0" strokeLinecap="round" />
                          <path d={svgPaths.p602ef80} stroke="#D0D0D0" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDetails5() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Card Details">
      <div className="bg-[rgba(208,208,208,0.1)] opacity-60 relative rounded-[6px] shrink-0" data-name="Tags">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Archived</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Version 1.0.2</p>
    </div>
  );
}

function CardInfo5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-name="Card Info">
      <Titles className="relative shrink-0 w-full" state="Island card" />
      <CardDetails5 />
    </div>
  );
}

function CardGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="CardGrid">
      <div className="bg-[#14141f] h-[380px] relative rounded-[16px] shrink-0 w-[257px]" data-name="Island Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <ThumbnailArea />
            <CardInfo />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="absolute bg-[#050507] drop-shadow-[0px_8px_8px_rgba(0,0,0,0.25)] left-[84px] rounded-[6px] top-[46px] w-[163px]" data-name="FloatingDropdown">
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-col justify-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end p-[12px] relative size-full">
            <DropdownItem />
            <DropdownItem1 />
            <DropdownItem2 />
            <div className="h-0 relative shrink-0 w-[147px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 147 1" width="147">
                  <line id="Divider" stroke="#2A2A38" x2="147" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            <DropdownItem3 />
          </div>
        </div>
      </div>
      <div className="bg-[#14141f] h-[380px] relative rounded-[16px] shrink-0 w-[257px]" data-name="Island Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <ThumbnailArea1 />
            <CardInfo1 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#14141f] h-[380px] relative rounded-[16px] shrink-0 w-[257px]" data-name="Island Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <ThumbnailArea2 />
            <CardInfo2 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#14141f] h-[380px] relative rounded-[16px] shrink-0 w-[257px]" data-name="Island Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <ThumbnailArea3 />
            <CardInfo3 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#14141f] h-[380px] relative rounded-[16px] shrink-0 w-[257px]" data-name="Island Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <ThumbnailArea4 />
            <CardInfo4 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#14141f] h-[380px] relative rounded-[16px] shrink-0 w-[257px]" data-name="Island Card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <ThumbnailArea5 />
            <CardInfo5 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip pl-[24px] pr-[48px] py-[32px] relative self-stretch" data-name="MainContent">
      <PageHeader />
      <Toolbar />
      <CardGrid />
      <div className="relative shrink-0 w-[1108px]" data-name="Pagination">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pt-[24px] relative size-full">
            <div className="bg-[#14141f] relative rounded-[6px] shrink-0" data-name="Icon">
              <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="content-stretch flex items-start p-[10px] relative size-full">
                <div className="flex items-center justify-center relative shrink-0 size-[30px]">
                  <div className="flex-none rotate-90">
                    <div className="relative size-[30px]" data-name="Icons">
                      <div className="absolute inset-[35.29%_25.91%_36.21%_25.91%]" data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="8.55188" preserveAspectRatio="none" viewBox="0 0 14.4525 8.55188" width="14.4525">
                          <path clipRule="evenodd" d={svgPaths.pd8a6f80} fill="#FDFDFF" fillRule="evenodd" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Icon className="bg-[#892ca3] relative rounded-[6px] shrink-0 size-[40px]" type="Active page" />
            <Icon className="bg-[#14141f] relative rounded-[6px] shrink-0 size-[40px]" type="Inactive page" />
            <div className="bg-[#14141f] relative rounded-[6px] shrink-0 size-[40px]" data-name="Icon">
              <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">3</p>
                </div>
              </div>
            </div>
            <div className="bg-[#14141f] relative rounded-[6px] shrink-0 size-[40px]" data-name="Icon">
              <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">4</p>
                </div>
              </div>
            </div>
            <div className="bg-[#14141f] relative rounded-[6px] shrink-0 size-[40px]" data-name="Icon">
              <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">....</p>
                </div>
              </div>
            </div>
            <div className="bg-[#14141f] relative rounded-[6px] shrink-0 size-[40px]" data-name="Icon">
              <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px] whitespace-nowrap">8</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180">
                <div className="bg-[#14141f] relative rounded-[6px]" data-name="Icon">
                  <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="content-stretch flex items-start p-[10px] relative size-full">
                    <div className="flex items-center justify-center relative shrink-0 size-[30px]">
                      <div className="flex-none rotate-90">
                        <div className="relative size-[30px]" data-name="Icons">
                          <div className="absolute inset-[35.29%_25.91%_36.21%_25.91%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="8.55188" preserveAspectRatio="none" viewBox="0 0 14.4525 8.55188" width="14.4525">
                              <path clipRule="evenodd" d={svgPaths.pd8a6f80} fill="#FDFDFF" fillRule="evenodd" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IslandsDashboard() {
  return (
    <div className="bg-[#14141f] content-stretch flex items-start relative size-full" data-name="Islands Dashboard">
      <div className="bg-[#14141f] relative self-stretch shrink-0 w-[260px]" data-name="Sidebar">
        <div aria-hidden className="absolute border-[#2a2a38] border-r border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <SidebarContainer />
        </div>
      </div>
      <MainContent />
    </div>
  );
}