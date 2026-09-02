type TagsProps = {
  className?: string;
  name?: "Admin";
};

function Tags({ className, name = "Admin" }: TagsProps) {
  return (
    <div className={className || "bg-[rgba(255,155,29,0.1)] relative rounded-[6px]"}>
      <div aria-hidden className="absolute border border-[#ff9b1d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex items-start px-[10px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#ff9b1d] text-[12px] whitespace-nowrap">Admin</p>
      </div>
    </div>
  );
}

export default function Tags1() {
  return <Tags className="bg-[rgba(255,155,29,0.1)] relative rounded-[6px] size-full" />;
}