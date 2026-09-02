import svgPaths from "./svg-rudmv1eofc";
type TagsProps = {
  className?: string;
  name?: "Island archived" | "Island published" | "Island draft" | "Admin";
};

function Tags({ className, name = "Island published" }: TagsProps) {
  const isAdmin = name === "Admin";
  const isIslandArchived = name === "Island archived";
  const isIslandDraft = name === "Island draft";
  const isIslandPublishedOrAdminOrIslandDraft = ["Island published", "Admin", "Island draft"].includes(name);
  return (
    <div className={className || `relative rounded-[6px] ${isIslandArchived ? "bg-[rgba(208,208,208,0.1)] opacity-60" : isIslandDraft ? "bg-[rgba(5,5,7,0.1)]" : isAdmin ? "bg-[rgba(255,155,29,0.1)]" : "bg-[rgba(79,205,255,0.1)]"}`}>
      <div aria-hidden={isIslandPublishedOrAdminOrIslandDraft ? true : undefined} className={isIslandArchived ? "flex flex-row items-center justify-center size-full" : isIslandDraft ? "absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" : isAdmin ? "absolute border border-[#ff9b1d] border-solid inset-0 pointer-events-none rounded-[6px]" : "absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]"}>
        {isIslandArchived && (
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Archived</p>
          </div>
        )}
      </div>
      {isIslandPublishedOrAdminOrIslandDraft && (
        <div className={`flex size-full ${isIslandDraft ? "flex-row items-center justify-center" : "content-stretch items-start px-[10px] py-[4px] relative"}`}>
          {["Island published", "Admin"].includes(name) && <p className={`[word-break:break-word] font-["Inter:Regular",sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${isAdmin ? "text-[#ff9b1d]" : "text-[#4fcdff]"}`}>{isAdmin ? "Admin" : "Published"}</p>}
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
type TitlesProps = {
  className?: string;
  state?: "Screen" | "Contact name";
};

function Titles({ className, state = "Screen" }: TitlesProps) {
  const isContactName = state === "Contact name";
  const isScreen = state === "Screen";
  return (
    <div className={className || "relative"}>
      <div className={`size-full ${isContactName ? "overflow-clip rounded-[inherit]" : "[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative whitespace-nowrap"}`}>
        {isScreen && (
          <>
            <p className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#fdfdff] text-[28px]">Title</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px]">Subtitle with description</p>
          </>
        )}
        {isContactName && (
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative size-full whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#fdfdff] text-[13px]">Max Müller</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#d0d0d0] text-[12px]">max.mueller@example.de</p>
          </div>
        )}
      </div>
    </div>
  );
}
type IconProps = {
  className?: string;
  type?: "Menu" | "Avatar";
};

function Icon({ className, type = "Menu" }: IconProps) {
  const isAvatar = type === "Avatar";
  return (
    <div className={className || `bg-[#050507] relative ${isAvatar ? "rounded-[18px] size-[36px]" : "rounded-[6px] size-[32px]"}`}>
      <div className={`flex items-center justify-center size-full ${isAvatar ? "flex-row overflow-clip rounded-[inherit]" : "flex-col"}`}>
        <div className={`content-stretch flex items-center justify-center relative size-full ${isAvatar ? "" : "flex-col"}`}>
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
          {isAvatar && <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.9px] not-italic relative shrink-0 text-[#fdfdff] text-[13px] whitespace-nowrap">MM</p>}
        </div>
      </div>
    </div>
  );
}
type TableHeaderProps = {
  className?: string;
  name?: "Contacts";
};

function TableHeader({ className, name = "Contacts" }: TableHeaderProps) {
  return (
    <div className={className || "bg-[#14141f] h-[48px] relative rounded-tl-[16px] rounded-tr-[16px] w-[1094px]"}>
      <div aria-hidden className="absolute border-[#2a2a38] border-b border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
      <div className="content-stretch flex items-start pl-[66px] pr-[48px] py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] w-[188px]">User</p>
        <div className="content-stretch flex items-start relative shrink-0 w-[235px]" data-name="Contacts Item">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Weight/Duration</p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] w-[100px]">Role</p>
        <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Contacts Item">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Status</p>
        </div>
        <div className="content-stretch flex items-center pr-[24px] relative shrink-0 w-[307px]" data-name="Contacts Item">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Last active</p>
        </div>
        <div className="content-stretch flex items-center pr-[24px] relative shrink-0" data-name="Contacts Item">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Actions</p>
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
          <path d={svgPaths.p15db900} id="Vector" stroke="#4FCDFF" strokeLinecap="round" />
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
      <div className="bg-[#050507] relative rounded-[6px] shrink-0 w-[212px]" data-name="Side menu">
        <div aria-hidden className="absolute border border-[#2a2a38] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="Icons">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <Users />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#fdfdff] text-[16px] whitespace-nowrap">Client accounts</p>
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
          <p className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#fdfdff] text-[28px]">Client Accounts</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d0d0d0] text-[16px]">Manage user access, roles, and client permissions across spatial environments</p>
        </div>
      </div>
      <div className="bg-[#ff9b1d] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Exo_2:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">
              <p className="leading-[normal]">+ Invite User</p>
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#a1a1a1] text-[16px]">Search by user name or email</p>
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
              <p className="leading-[24px]">Sort: Last Active</p>
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

function TabItem() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center overflow-clip relative shrink-0 w-[236px]" data-name="Tab Item">
      <Icon className="bg-[#050507] relative rounded-[18px] shrink-0 size-[36px]" type="Avatar" />
      <Titles className="relative shrink-0" state="Contact name" />
    </div>
  );
}

function TabItem1() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Tab Item">
      <Tags className="bg-[rgba(255,155,29,0.1)] relative rounded-[6px] shrink-0" name="Admin" />
    </div>
  );
}

function TabItem2() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[120px]" data-name="Tab Item">
      <div className="bg-[rgba(79,205,255,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#4fcdff] text-[12px] whitespace-nowrap">Active</p>
        </div>
      </div>
    </div>
  );
}

function TabItem3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center overflow-clip relative shrink-0 w-[236px]" data-name="Tab Item">
      <Icon className="bg-[#050507] relative rounded-[18px] shrink-0 size-[36px]" type="Avatar" />
      <Titles className="relative shrink-0" state="Contact name" />
    </div>
  );
}

function TabItem4() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Tab Item">
      <div className="bg-[rgba(5,5,7,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Editor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabItem5() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[120px]" data-name="Tab Item">
      <div className="bg-[rgba(79,205,255,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#4fcdff] text-[12px] whitespace-nowrap">Active</p>
        </div>
      </div>
    </div>
  );
}

function TabItem6() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center overflow-clip relative shrink-0 w-[236px]" data-name="Tab Item">
      <Icon className="bg-[#050507] relative rounded-[18px] shrink-0 size-[36px]" type="Avatar" />
      <Titles className="relative shrink-0" state="Contact name" />
    </div>
  );
}

function TabItem7() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Tab Item">
      <div className="bg-[rgba(208,208,208,0.1)] opacity-60 relative rounded-[6px] shrink-0" data-name="Tags">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Viewer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabItem8() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[120px]" data-name="Tab Item">
      <div className="bg-[rgba(208,208,208,0.1)] opacity-60 relative rounded-[6px] shrink-0" data-name="Tags">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#d0d0d0] text-[12px] whitespace-nowrap">Invited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabItem9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center overflow-clip relative shrink-0 w-[236px]" data-name="Tab Item">
      <Icon className="bg-[#050507] relative rounded-[18px] shrink-0 size-[36px]" type="Avatar" />
      <Titles className="relative shrink-0" state="Contact name" />
    </div>
  );
}

function TabItem10() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Tab Item">
      <Tags className="bg-[rgba(255,155,29,0.1)] relative rounded-[6px] shrink-0" name="Admin" />
    </div>
  );
}

function TabItem11() {
  return (
    <div className="content-stretch flex h-[23px] items-start overflow-clip relative shrink-0 w-[120px]" data-name="Tab Item">
      <div className="bg-[rgba(79,205,255,0.1)] relative rounded-[6px] shrink-0" data-name="Tags">
        <div aria-hidden className="absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#4fcdff] text-[12px] whitespace-nowrap">Active</p>
        </div>
      </div>
    </div>
  );
}

function OrganismsUserTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1100px]" data-name="Organisms/UserTable">
      <TableHeader className="bg-[#14141f] h-[48px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" />
      <div className="h-[68px] relative shrink-0 w-[1100px]" data-name="Table Row">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TabItem />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[15px] not-italic relative shrink-0 text-[#fdfdff] text-[13px] w-[236px]">Muster Systems Inc.</p>
            <TabItem1 />
            <TabItem2 />
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[13px] w-[318px]">2 hours ago</p>
            <div className="bg-[#050507] relative rounded-[6px] shrink-0 size-[32px]" data-name="Icon">
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
        </div>
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="h-[68px] relative shrink-0 w-[1100px]" data-name="Table Row">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TabItem3 />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[15px] not-italic relative shrink-0 text-[#fdfdff] text-[13px] w-[236px]">Muster Systems Inc.</p>
            <TabItem4 />
            <TabItem5 />
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[13px] w-[318px]">2 hours ago</p>
            <div className="bg-[#050507] relative rounded-[6px] shrink-0 size-[32px]" data-name="Icon">
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
        </div>
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="h-[68px] relative shrink-0 w-[1100px]" data-name="Table Row">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TabItem6 />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[15px] not-italic relative shrink-0 text-[#fdfdff] text-[13px] w-[236px]">Muster Systems Inc.</p>
            <TabItem7 />
            <TabItem8 />
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[13px] w-[318px]">2 hours ago</p>
            <div className="bg-[#050507] relative rounded-[6px] shrink-0 size-[32px]" data-name="Icon">
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
        </div>
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="h-[68px] relative shrink-0 w-[1100px]" data-name="Table Row">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TabItem9 />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] leading-[15px] not-italic relative shrink-0 text-[#fdfdff] text-[13px] w-[236px]">Muster Systems Inc.</p>
            <TabItem10 />
            <TabItem11 />
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[normal] not-italic relative shrink-0 text-[#d0d0d0] text-[13px] w-[318px]">2 hours ago</p>
            <div className="bg-[#050507] relative rounded-[6px] shrink-0 size-[32px]" data-name="Icon">
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
        </div>
        <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function UserTableContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="User Table Container">
      <OrganismsUserTable />
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
    <div className="flex flex-[1_0_0] h-[754px] items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
      <div className="flex-none h-[100cqw] rotate-90">
        <div className="content-stretch flex h-full items-center relative w-[754px]" data-name="Sld_TrackWrapper">
          <SldTrackWithDots />
        </div>
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-h-px relative w-[1130px]" data-name="Main Content Area">
      <UserTableContainer />
      <SldTrackWrapper />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px px-[40px] py-[32px] relative" data-name="Main-Content">
      <PageHeader />
      <Toolbar />
      <MainContentArea />
    </div>
  );
}

export default function EchoSpacesDashboard() {
  return (
    <div className="bg-[#14141f] content-stretch flex items-start relative size-full" data-name="EchoSpaces-Dashboard">
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