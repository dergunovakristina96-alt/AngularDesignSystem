type TagsProps = {
  className?: string;
  name?: "Island archived" | "Tree tag" | "Island published" | "Island draft" | "Content tag" | "Error" | "Admin";
};

export default function Tags({ className, name = "Island published" }: TagsProps) {
  const isAdmin = name === "Admin";
  const isContentTag = name === "Content tag";
  const isError = name === "Error";
  const isIslandArchived = name === "Island archived";
  const isIslandDraft = name === "Island draft";
  const isIslandPublishedOrErrorOrAdminOrIslandDraft = ["Island published", "Error", "Admin", "Island draft"].includes(name);
  const isTreeTag = name === "Tree tag";
  return (
    <div className={className || `relative ${isTreeTag ? "bg-[rgba(79,205,255,0.1)] rounded-[4px]" : isContentTag ? "bg-[#050507] rounded-[6px]" : isIslandArchived ? "bg-[rgba(208,208,208,0.1)] opacity-60 rounded-[6px]" : isIslandDraft ? "bg-[rgba(5,5,7,0.1)] rounded-[6px]" : isAdmin ? "bg-[rgba(255,155,29,0.1)] rounded-[6px]" : isError ? "bg-[rgba(255,77,94,0.1)] rounded-[6px]" : "bg-[rgba(79,205,255,0.1)] rounded-[6px]"}`}>
      <div aria-hidden={isIslandPublishedOrErrorOrAdminOrIslandDraft ? true : undefined} className={["Content tag", "Tree tag"].includes(name) ? "overflow-clip rounded-[inherit] size-full" : isIslandArchived ? "flex flex-row items-center justify-center size-full" : isIslandDraft ? "absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[6px]" : isAdmin ? "absolute border border-[#ff9b1d] border-solid inset-0 pointer-events-none rounded-[6px]" : isError ? "absolute border border-[#ff4d5e] border-solid inset-0 pointer-events-none rounded-[6px]" : "absolute border border-[#4fcdff] border-solid inset-0 pointer-events-none rounded-[6px]"}>
        {["Island archived", "Content tag", "Tree tag"].includes(name) && (
          <div className={`content-stretch flex relative size-full ${isTreeTag ? "items-start px-[6px] py-[2px]" : isContentTag ? "items-start px-[10px] py-[4px]" : "items-center justify-center px-[10px] py-[4px]"}`}>
            <p className={`[word-break:break-word] font-["Inter:Regular",sans-serif] font-normal not-italic relative shrink-0 whitespace-nowrap ${isTreeTag ? "leading-[normal] text-[#4fcdff] text-[10px]" : isContentTag ? "leading-[normal] text-[#4fcdff] text-[11px]" : "leading-[14px] text-[#d0d0d0] text-[12px]"}`}>{isTreeTag ? "Your Assigned Space" : isContentTag ? "Accepted: 16:9 Video • Max 4K" : isIslandArchived ? "Archived" : ""}</p>
          </div>
        )}
      </div>
      {isIslandPublishedOrErrorOrAdminOrIslandDraft && (
        <div className={`flex size-full ${isIslandDraft ? "flex-row items-center justify-center" : "content-stretch items-start px-[10px] py-[4px] relative"}`}>
          {["Island published", "Error", "Admin"].includes(name) && <p className={`[word-break:break-word] font-["Inter:Regular",sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${isAdmin ? "text-[#ff9b1d]" : isError ? "text-[#ff4d5e]" : "text-[#4fcdff]"}`}>{isAdmin ? "Admin" : isError ? "Error" : "Published"}</p>}
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