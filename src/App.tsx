import { createContext, useContext, useState, ReactNode } from "react"
import svgJ from "../imports/svg-j2kbbgpe3g"
import svgZ from "../imports/svg-zjclb3wvx2"
import islandIconPaths from "../imports/svg-fv2licsfj8"
import hexSvg from "./imports/SldTrackWithDots/svg-jrz8oioebo"
import scopeTabSvg from "./imports/ScopeTabsSegmentControl/svg-um1qir0taj"

// ─── Theme tokens ─────────────────────────────────────────────────────────

// Style Guide radius scale:
//   sm  6px  — badges, nav items, filter buttons, icon buttons
//   md 12px  — CTA buttons, inputs, dropdowns, table panels
//   lg 16px  — island cards, toolbar container (main surfaces)
const R = { sm: "6px", md: "12px", lg: "16px" } as const

const DARK = {
  bgBase: "#14141f",
  bgSurface: "#050507",
  bgCard: "#14141f",
  bgFilter: "rgba(10,10,13,0.6)",
  bgNavActive: "#050507",
  bgNavHover: "rgba(255,255,255,0.04)",
  bgInput: "#050507",
  bgDropdown: "#050507",
  bgRowHover: "rgba(79,205,255,0.04)",
  bgRowExpanded: "rgba(79,205,255,0.02)",
  bgNavBar: "rgba(5,5,7,0.88)",
  borderSubtle: "#2a2a38",
  borderMuted: "#434343",
  textPrimary: "#fdfdff",
  textMuted: "#d0d0d0",
  textPlaceholder: "#a1a1a1",
  iconMuted: "#D0D0D0",
  accentCyan: "#4FCDFF",
  accentOrange: "#FF9B1D",
  accentPurple: "#892CA3",
  accentRed: "#FF5050",
  shadowCard: "0 4px 24px rgba(0,0,0,0.24)",
  shadowHeavy: "0 8px 32px rgba(0,0,0,0.48)",
}

const LIGHT = {
  bgBase: "#F0F0F8",
  bgSurface: "#FFFFFF",
  bgCard: "#FFFFFF",
  bgFilter: "rgba(255,255,255,0.92)",
  bgNavActive: "#FFFFFF",
  bgNavHover: "rgba(0,0,0,0.04)",
  bgInput: "#FFFFFF",
  bgDropdown: "#FFFFFF",
  bgRowHover: "rgba(26,159,204,0.05)",
  bgRowExpanded: "rgba(26,159,204,0.03)",
  bgNavBar: "rgba(240,240,248,0.96)",
  borderSubtle: "#D4D4E8",
  borderMuted: "#B8B8D0",
  textPrimary: "#141420",
  textMuted: "#5A5A72",
  textPlaceholder: "#9090AC",
  iconMuted: "#7878A0",
  accentCyan: "#1A9FCC",
  accentOrange: "#E88500",
  accentPurple: "#892CA3",
  accentRed: "#D92424",
  shadowCard: "0 2px 16px rgba(0,0,0,0.08)",
  shadowHeavy: "0 8px 32px rgba(0,0,0,0.16)",
}

type Tokens = typeof DARK

type ThemeCtxVal = { t: Tokens isDark: boolean toggle: () => void }
const ThemeCtx = createContext<ThemeCtxVal>({
  t: DARK,
  isDark: true,
  toggle: () => {},
})
function useT() {
  return useContext(ThemeCtx)
}

type SvgPaths = Record<string, string>

// ─── Icons (theme-aware) ──────────────────────────────────────────────────

function IcSearch() {
  const { t } = useT()
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle
        cx="8.5"
        cy="8.5"
        r="5.5"
        stroke={t.iconMuted}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.5 13.5L17.5 17.5"
        stroke={t.iconMuted}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IcChevronDown({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 4L6 7.5L9.5 4"
        stroke={color ?? t.textPrimary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IcDots({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="3.5" r="1.25" fill={color ?? t.iconMuted} />
      <circle cx="8" cy="8" r="1.25" fill={color ?? t.iconMuted} />
      <circle cx="8" cy="12.5" r="1.25" fill={color ?? t.iconMuted} />
    </svg>
  )
}

function IcChevronRight({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M4 2.5L8.5 6L4 9.5"
        stroke={color ?? t.iconMuted}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IcChevronExpand({ open }: { open: boolean }) {
  const { t } = useT()
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform 0.15s",
      }}
    >
      <circle cx="10" cy="10" r="7.5" stroke={t.iconMuted} strokeWidth="1.25" />
      <path
        d="M7 9.5L10 12.5L13 9.5"
        stroke={t.iconMuted}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IcSort() {
  const { t } = useT()
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 6H16M6 10H14M8 14H12"
        stroke={t.textPrimary}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IcListView() {
  const { t } = useT()
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 4H13M3 8H13M3 12H13"
        stroke={t.iconMuted}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IcGridView() {
  const { t } = useT()
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect
        x="1.5"
        y="1.5"
        width="5.5"
        height="5.5"
        rx="1"
        stroke={t.iconMuted}
        strokeWidth="1.25"
      />
      <rect
        x="9"
        y="1.5"
        width="5.5"
        height="5.5"
        rx="1"
        stroke={t.iconMuted}
        strokeWidth="1.25"
      />
      <rect
        x="1.5"
        y="9"
        width="5.5"
        height="5.5"
        rx="1"
        stroke={t.iconMuted}
        strokeWidth="1.25"
      />
      <rect
        x="9"
        y="9"
        width="5.5"
        height="5.5"
        rx="1"
        stroke={t.iconMuted}
        strokeWidth="1.25"
      />
    </svg>
  )
}

function IcUsers({ color }: { color?: string }) {
  const { t } = useT()
  const c = color ?? t.iconMuted
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M10.5 7C10.5 8.657 9.157 10 7.5 10C5.843 10 4.5 8.657 4.5 7C4.5 5.343 5.843 4 7.5 4C9.157 4 10.5 5.343 10.5 7Z"
        stroke={c}
        strokeWidth="1.25"
      />
      <path
        d="M2 13.5C2 11.567 4.239 10 7.5 10C10.761 10 13 11.567 13 13.5"
        stroke={c}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M12.5 4.5C13.881 4.5 15 5.619 15 7C15 8.381 13.881 9.5 12.5 9.5M12.5 12C14.142 12 16 12.895 16 14"
        stroke={c}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IcAnalytics({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 12L5.5 8L7.5 10L10.5 6L14 10"
        stroke={color ?? t.iconMuted}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IcSettings({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle
        cx="8"
        cy="8"
        r="2.5"
        stroke={color ?? t.iconMuted}
        strokeWidth="1.25"
      />
      <path
        d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.343 3.343L4.4 4.4M11.6 11.6L12.657 12.657M3.343 12.657L4.4 11.6M11.6 4.4L12.657 3.343"
        stroke={color ?? t.iconMuted}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IcIslands({ active }: { active: boolean }) {
  const { t } = useT()
  const c = active ? t.accentCyan : t.iconMuted
  return (
    <div className="relative size-[16px]">
      {/* Outer hex */}
      <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-0 left-1/2 top-0">
        <div className="absolute inset-[3.19%_6%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 26.4 28.0847"
          >
            <path d={islandIconPaths.p12b8ac00} stroke={c} strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      {/* Middle hex */}
      <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[3px] left-1/2 top-[3px]">
        <div className="absolute inset-[3.99%_6%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 21.12 22.0847"
          >
            <path d={islandIconPaths.p1b03780} stroke={c} strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      {/* Inner hex */}
      <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[6px] left-1/2 top-[6px]">
        <div className="absolute inset-[5.32%_6%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.84 16.0847"
          >
            <path d={islandIconPaths.p2b8c180} stroke={c} strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function IcContent({ active }: { active: boolean }) {
  const { t } = useT()
  const c = active ? t.accentCyan : t.iconMuted
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="1.5"
        stroke={c}
        strokeWidth="1.25"
      />
      <path
        d="M5 5H11M5 8H11M5 11H8"
        stroke={c}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IcSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.05 3.05L4.11 4.11M11.89 11.89L12.95 12.95M3.05 12.95L4.11 11.89M11.89 4.11L12.95 3.05"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IcMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M13.5 10.5A6 6 0 015.5 2.5a6 6 0 108 8z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Logo ──────────────────────────────────────────────────────────────────

function Logo({ svgPaths }: { svgPaths: SvgPaths }) {
  return (
    <div className="h-[52px] overflow-clip relative shrink-0 w-[192px]">
      <div className="absolute inset-[30.08%_-0.04%_19.04%_23.89%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="26.4543"
          preserveAspectRatio="none"
          viewBox="0 0 146.207 26.4543"
          width="146.207"
        >
          <g>
            <path d={svgPaths.p3173f5c0} fill="#4FCDFF" />
            <path d={svgPaths.p1330d600} fill="#4FCDFF" />
            <path d={svgPaths.p35aedb80} fill="#4FCDFF" />
            <path d={svgPaths.pc196f00} fill="#4FCDFF" />
            <path d={svgPaths.p358fb00} fill="#4FCDFF" />
            <path d={svgPaths.p1386ed00} fill="#4FCDFF" />
            <path d={svgPaths.p24190900} fill="#4FCDFF" />
            <path d={svgPaths.p18825a00} fill="#4FCDFF" />
            <path d={svgPaths.p3fcec000} fill="#4FCDFF" />
            <path d={svgPaths.p3d5d4900} fill="#4FCDFF" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[16.85%_83.58%_17.07%_0.04%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="34.3624"
          preserveAspectRatio="none"
          viewBox="0 0 31.4372 34.3624"
          width="31.4372"
        >
          <g>
            <path d={svgPaths.p2e4902c0} fill="#892CA3" />
            <path d={svgPaths.p1fe36580} fill="#FDFDFF" />
            <path d={svgPaths.p331c8800} fill="#FDFDFF" />
            <path d={svgPaths.p317b9c00} fill="#FDFDFF" />
          </g>
        </svg>
      </div>
    </div>
  )
}

// ─── Theme toggle ─────────────────────────────────────────────────────────

function ThemeToggle() {
  const { t, isDark, toggle } = useT()
  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-[10px] w-fit px-[12px] py-[10px] rounded-[${R.sm}] transition-colors`}
      style={{ color: t.textMuted }}
    >
      {/* Hex slider toggle */}
      <div className="relative shrink-0" style={{ width: 48, height: 20 }}>
        {/* Base track */}
        <div
          className="absolute rounded-[2px]"
          style={{
            left: 10,
            right: 10,
            top: 6,
            bottom: 6,
            background: t.borderSubtle,
          }}
        />
        {/* Active fill — grows from the knob's side */}
        <div
          className="absolute rounded-[2px] transition-all duration-200"
          style={{
            top: 6,
            bottom: 6,
            left: isDark ? 10 : undefined,
            right: isDark ? undefined : 24,
            width: 25,
            background: isDark ? t.accentPurple : t.accentCyan,
            opacity: 0.7,
          }}
        />
        {/* Hexagonal knob */}
        <div
          className="absolute transition-all duration-200"
          style={{
            width: 20,
            height: 20,
            top: 0,
            left: isDark ? 0 : 28,
            filter:
              "drop-shadow(0px 4px 5px rgba(20,20,20,0.4)) drop-shadow(0px -4px 10px rgba(222,105,255,0.25))",
          }}
        >
          <div className="absolute inset-[0.81%_6.73%]">
            <svg
              className="block size-full"
              fill="none"
              height="19.6742"
              preserveAspectRatio="none"
              viewBox="0 0 17.3064 19.6742"
              width="17.3064"
            >
              <path
                d={hexSvg.pad11e80}
                fill="#A156B5"
                stroke="#892CA3"
                strokeMiterlimit="1.30541"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <span className="ml-auto border border-solid" style={{ color: t.textMuted, borderColor: "transparent", background: "none" }}>
        {isDark ? <IcMoon /> : <IcSun />}
      </span>
    </button>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────

type NavSection = "islands" | "content" | "accounts" | "analytics" | "settings"

function Sidebar({
  active,
  onNav,
  svgPaths,
}: {
  active: NavSection
  onNav: (s: NavSection) => void
  svgPaths: SvgPaths
}) {
  const { t } = useT()
  const items: { id: NavSection label: string icon: ReactNode }[] = [
    {
      id: "islands",
      label: "Islands",
      icon: <IcIslands active={active === "islands"} />,
    },
    {
      id: "content",
      label: "Content",
      icon: <IcContent active={active === "content"} />,
    },
    {
      id: "accounts",
      label: "Client accounts",
      icon: (
        <IcUsers color={active === "accounts" ? t.accentCyan : t.iconMuted} />
      ),
    },
  ]

  return (
    <div
      className="relative self-stretch shrink-0 w-[260px] flex flex-col"
      style={{ background: t.bgBase }}
    >
      <div
        className="absolute inset-0 border-r pointer-events-none"
        style={{ borderColor: t.borderSubtle }}
      />
      <div className="flex flex-col items-start justify-between p-[24px] size-full">
        {/* Top: logo + nav */}
        <div className="flex flex-col gap-[32px] items-center w-full">
          <Logo svgPaths={svgPaths} />
          <div className="flex flex-col gap-[8px] items-start py-[16px] w-full">
            {items.map((item) => {
              const isActive = active === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onNav(item.id)}
                  className="relative rounded-[6px] shrink-0 w-[212px] text-left transition-colors"
                  style={{
                    background: isActive ? t.bgNavActive : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.background =
                        t.bgNavHover
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent"
                  }}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-[6px] pointer-events-none"
                      style={{
                        border: `1px solid ${t.borderSubtle}`,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      }}
                    />
                  )}
                  <div className="flex gap-[12px] items-center px-[12px] py-[10px]">
                    <div className="shrink-0 size-[16px]">{item.icon}</div>
                    <p
                      className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] whitespace-nowrap"
                      style={{ color: isActive ? t.textPrimary : t.textMuted }}
                    >
                      {item.label}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
        {/* Bottom: theme toggle */}
        <div className="w-full">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

// ─── Toolbar ──────────────────────────────────────────────────────────────

function Toolbar({
  placeholder,
  onViewToggle,
  showGridToggle = false,
  viewMode,
}: {
  placeholder: string
  onViewToggle?: () => void
  showGridToggle?: boolean
  viewMode?: "grid" | "table"
}) {
  const { t } = useT()
  return (
    <div
      className={`relative rounded-[${R.lg}] shrink-0 w-full`}
      style={{
        background: t.bgCard,
        boxShadow: t.shadowCard,
        border: `1px solid ${t.borderSubtle}`,
      }}
    >
      <div className="flex gap-[12px] items-center p-[16px]">
        {/* Search */}
        <div
          className={`flex-1 min-w-0 relative rounded-[${R.md}]`}
          style={{
            background: t.bgInput,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          <div className="flex items-center gap-[8px] px-[12px] py-[10px]">
            <IcSearch />
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] truncate"
              style={{ color: t.textPlaceholder }}
            >
              {placeholder}
            </p>
          </div>
        </div>
        {/* Status filter */}
        <div
          className={`relative rounded-[${R.sm}] h-[50px] shrink-0`}
          style={{
            background: t.bgFilter,
            border: `1px solid ${t.borderMuted}`,
          }}
        >
          <div className="flex items-center gap-[8px] px-[17px] h-full">
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] whitespace-nowrap"
              style={{ color: t.textPrimary }}
            >
              Status: All
            </p>
            <IcChevronDown />
          </div>
        </div>
        {/* Sort */}
        <div
          className={`relative rounded-[${R.sm}] h-[50px] shrink-0`}
          style={{
            background: t.bgFilter,
            border: `1px solid ${t.borderMuted}`,
          }}
        >
          <div className="flex items-center gap-[8px] px-[17px] h-full">
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] whitespace-nowrap"
              style={{ color: t.textPrimary }}
            >
              Sort: Last Modified
            </p>
            <IcSort />
          </div>
        </div>
        {showGridToggle && onViewToggle && (
          <button
            onClick={onViewToggle}
            className={`flex items-center justify-center w-[44px] h-[50px] shrink-0 rounded-[${R.sm}] transition-colors`}
            style={{
              border: `1px solid ${t.borderSubtle}`,
              background: t.bgFilter,
            }}
          >
            {viewMode === "grid" ? <IcListView /> : <IcGridView />}
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Status badge ──────────────────────────────────────────────────────────

type StatusType = "Published" | "Draft" | "Archived" | "Ready" | "Processing" | "Error" | "Invited" | "Active"

function StatusBadge({ status }: { status: StatusType }) {
  const { t } = useT()
  type BadgeStyle = { bg: string border: string text: string faded?: boolean }
  const map: Record<StatusType, BadgeStyle> = {
    Published: {
      bg: "rgba(79,205,255,0.1)",
      border: t.accentCyan,
      text: t.accentCyan,
    },
    Ready: {
      bg: "rgba(79,205,255,0.1)",
      border: t.accentCyan,
      text: t.accentCyan,
    },
    Active: {
      bg: "rgba(79,205,255,0.1)",
      border: t.accentCyan,
      text: t.accentCyan,
    },
    Draft: { bg: "rgba(5,5,7,0.1)", border: t.borderMuted, text: t.textMuted },
    Archived: {
      bg: "rgba(208,208,208,0.1)",
      border: "none",
      text: t.textMuted,
      faded: true,
    },
    Processing: {
      bg: "rgba(255,155,29,0.1)",
      border: t.accentOrange,
      text: t.accentOrange,
    },
    Error: {
      bg: "rgba(255,80,80,0.1)",
      border: t.accentRed,
      text: t.accentRed,
    },
    Invited: {
      bg: "rgba(255,155,29,0.1)",
      border: t.accentOrange,
      text: t.accentOrange,
    },
  }
  const s = map[status]
  return (
    <div
      className={`relative rounded-[${R.sm}] shrink-0 inline-block`}
      style={{ background: s.bg, opacity: s.faded ? 0.6 : undefined }}
    >
      {s.border !== "none" && (
        <div
          aria-hidden
          className={`absolute border border-solid inset-0 pointer-events-none rounded-[${R.sm}]`}
          style={{ borderColor: s.border }}
        />
      )}
      <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative">
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic shrink-0 text-[12px] whitespace-nowrap"
          style={{ color: s.text }}
        >
          {status}
        </p>
      </div>
    </div>
  )
}

// ─── Buttons ──────────────────────────────────────────────────────────────

function PrimaryButton({
  label,
  onClick,
  onCta,
}: {
  label: string
  onClick?: () => void
  onCta?: () => void
}) {
  const { t } = useT()
  return (
    <button
      onClick={onClick ?? onCta}
      className={`rounded-[${R.md}] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-medium text-[18px] leading-[27px] whitespace-nowrap hover:brightness-110 transition-all shrink-0`}
      style={{ background: t.accentOrange, color: "#141414" }}
    >
      {label}
    </button>
  )
}

function SecondaryButton({
  label,
  onClick,
}: {
  label: string
  onClick?: () => void
}) {
  const { t } = useT()
  return (
    <button
      onClick={onClick}
      className={`rounded-[${R.md}] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] whitespace-nowrap transition-colors shrink-0`}
      style={{ border: `1px solid ${t.borderSubtle}`, color: t.textPrimary }}
    >
      {label}
    </button>
  )
}

function DestructiveButton({
  label,
  onClick,
}: {
  label: string
  onClick?: () => void
}) {
  const { t } = useT()
  return (
    <button
      onClick={onClick}
      className={`rounded-[${R.md}] px-[16px] py-[12px] font-['Exo_2:SemiBold',sans-serif] font-semibold text-[18px] leading-[27px] whitespace-nowrap hover:brightness-110 transition-all shrink-0`}
      style={{ background: t.accentOrange, color: "#141414" }}
    >
      {label}
    </button>
  )
}

// ─── Page header ───────────────────────────────────────────────────────────

function PageHeader({
  title,
  subtitle,
  cta,
  onCta,
}: {
  title: string
  subtitle: string
  cta: string
  onCta?: () => void
}) {
  const { t } = useT()
  return (
    <div className="flex items-center justify-between relative shrink-0 w-full">
      <div>
        <p
          className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[28px]"
          style={{ color: t.textPrimary }}
        >
          {title}
        </p>
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] mt-[4px]"
          style={{ color: t.textMuted }}
        >
          {subtitle}
        </p>
      </div>
      <PrimaryButton label={cta} onCta={onCta} />
    </div>
  )
}

// ─── Empty-state illustration ──────────────────────────────────────────────

function EmptyIllustration({ svgPaths }: { svgPaths: SvgPaths }) {
  const { t } = useT()
  return (
    <div className="flex h-[100px] items-center justify-center relative rounded-[8px] shrink-0 w-[160px]">
      <div className="relative shrink-0 size-[30px]">
        <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-0 left-1/2 top-0">
          <div className="absolute inset-[2.28%_6%]">
            <svg
              className="block size-full"
              fill="none"
              height="28.6319"
              preserveAspectRatio="none"
              viewBox="0 0 26.4 28.6319"
              width="26.4"
            >
              <path d={svgPaths.p102c3600} stroke={t.accentCyan} />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[3px] left-1/2 top-[3px]">
          <div className="absolute inset-[2.85%_6%]">
            <svg
              className="block size-full"
              fill="none"
              height="22.6319"
              preserveAspectRatio="none"
              viewBox="0 0 21.12 22.6319"
              width="21.12"
            >
              <path d={svgPaths.p54955f0} stroke={t.accentCyan} />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute aspect-[40/40] bottom-[6px] left-1/2 top-[6px]">
          <div className="absolute inset-[3.8%_6%]">
            <svg
              className="block size-full"
              fill="none"
              height="16.6319"
              preserveAspectRatio="none"
              viewBox="0 0 15.84 16.6319"
              width="15.84"
            >
              <path d={svgPaths.p3f4e5800} stroke={t.accentCyan} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SCREEN: Empty Islands ─────────────────────────────────────────────────

function EmptyIslandsScreen({ onNav }: { onNav: (s: NavSection) => void }) {
  const { t } = useT()
  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <PageHeader
          title="Islands"
          subtitle="Deploy and monitor enterprise spatial environments"
          cta="+ Create Island"
        />
        <Toolbar
          placeholder="Search by island's name"
          showGridToggle
          viewMode="grid"
        />
        <div
          className="flex flex-1 flex-col gap-[24px] items-center justify-center min-h-px p-[80px] relative rounded-[12px] w-full"
          style={{ background: t.bgCard, boxShadow: t.shadowCard }}
        >
          <div
            className="absolute inset-0 rounded-[12px] pointer-events-none"
            style={{ border: `1px dashed ${t.borderMuted}` }}
          />
          <EmptyIllustration svgPaths={svgJ} />
          <div className="flex flex-col gap-[8px] items-center text-center">
            <p
              className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[24px]"
              style={{ color: t.textPrimary }}
            >
              No islands yet
            </p>
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[16px] max-w-[420px]"
              style={{ color: t.textMuted }}
            >
              Create your first island to start deploying spatial environments
            </p>
          </div>
          <PrimaryButton label="+ Create Island" />
        </div>
      </div>
    </div>
  )
}

// ─── SCREEN: Empty Content ─────────────────────────────────────────────────

function EmptyContentScreen({ onNav }: { onNav: (s: NavSection) => void }) {
  const { t } = useT()
  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="content" onNav={onNav} svgPaths={svgZ} />
      <div className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <PageHeader
          title="Content"
          subtitle="Manage media assets, 3D models and interactive blocks"
          cta="+ Create content"
        />
        <Toolbar placeholder="Search by content's name" />
        <div
          className="flex flex-1 flex-col gap-[24px] items-center justify-center min-h-px p-[80px] relative rounded-[12px] w-full"
          style={{ background: t.bgCard, boxShadow: t.shadowCard }}
        >
          <div
            className="absolute inset-0 rounded-[12px] pointer-events-none"
            style={{ border: `1px dashed ${t.borderMuted}` }}
          />
          <EmptyIllustration svgPaths={svgZ} />
          <div className="flex flex-col gap-[8px] items-center text-center">
            <p
              className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[24px]"
              style={{ color: t.textPrimary }}
            >
              No content yet
            </p>
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[16px] max-w-[420px]"
              style={{ color: t.textMuted }}
            >
              Upload your first media asset or create interactive content
            </p>
          </div>
          <PrimaryButton label="+ Create content" />
        </div>
      </div>
    </div>
  )
}

// ─── SCREEN: Islands Card Grid ─────────────────────────────────────────────

const ISLAND_IMAGES = [
  "https://images.unsplash.com/photo-1580576234025-6cf2622785b7?w=600&q=80",
  "https://images.unsplash.com/photo-1617803675112-12b25461ec3c?w=600&q=80",
  "https://images.unsplash.com/photo-1576475510454-b0af18970e6d?w=600&q=80",
  "https://images.unsplash.com/photo-1506783323968-e8dad28ae1de?w=600&q=80",
  "https://images.unsplash.com/photo-1496855631292-9259fb1a0341?w=600&q=80",
  "https://images.unsplash.com/photo-1589052958432-21951b2f0982?w=600&q=80",
]
type CardStatus = "Published" | "Draft" | "Archived"
const CARD_DATA: { status: CardStatus dim?: boolean }[] = [
  { status: "Published" },
  { status: "Draft" },
  { status: "Archived", dim: true },
  { status: "Published" },
  { status: "Draft" },
  { status: "Archived", dim: true },
]

function IslandCard({
  imgUrl,
  status,
  dim,
  menuOpen,
  onMenuClick,
  onLinkContent,
}: {
  imgUrl: string
  status: CardStatus
  dim?: boolean
  menuOpen: boolean
  onMenuClick: () => void
  onLinkContent?: () => void
}) {
  const { t } = useT()
  return (
    <div
      className={`relative rounded-[${R.lg}] overflow-hidden w-full`}
      style={{
        background: t.bgCard,
        boxShadow: t.shadowCard,
        border: `1px solid ${t.borderSubtle}`,
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-[258px] overflow-hidden">
        <img
          src={imgUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {dim && <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />}
        <div className="absolute top-[10px] right-[10px] z-20">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMenuClick()
            }}
            className={`rounded-[${R.sm}] size-[32px] flex items-center justify-center transition-colors`}
            style={{
              background: t.bgDropdown,
              border: `1px solid ${t.borderSubtle}`,
            }}
          >
            <IcDots />
          </button>
          {menuOpen && (
            <div
              className={`absolute right-0 top-[36px] w-[160px] rounded-[${R.md}] overflow-hidden z-30`}
              style={{
                background: t.bgDropdown,
                border: `1px solid ${t.borderSubtle}`,
                boxShadow: t.shadowHeavy,
              }}
            >
              {[
                { label: "Link content", action: onLinkContent, accent: true },
                { label: "Unpublish", action: undefined, accent: true },
                { label: "Archive", action: undefined, accent: true },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onMenuClick()
                    item.action?.()
                  }}
                  className="w-full text-left px-[14px] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[13px] transition-colors"
                  style={{ color: t.accentOrange }}
                >
                  {item.label}
                </button>
              ))}
              <div
                className="h-px mx-[14px]"
                style={{ background: t.borderSubtle }}
              />
              <div className="p-[8px]">
                <button
                  onClick={onMenuClick}
                  className={`w-full text-center rounded-[${R.md}] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[13px] transition-colors`}
                  style={{ background: t.accentOrange, color: "#141414" }}
                >
                  Delete Island
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Info */}
      <div className="px-[16px] pt-[12px] pb-[16px] flex flex-col gap-[12px]">
        <div>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] truncate"
            style={{ color: t.textPrimary }}
          >
            Muster Plaza
          </p>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] truncate"
            style={{ color: t.textPlaceholder }}
          >
            audibkk-hexagon1-plaza
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <StatusBadge status={status} />
          <p
            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px]"
            style={{ color: t.textMuted }}
          >
            Version 1.0.2
          </p>
        </div>
      </div>
    </div>
  )
}

function IslandsGridScreen({
  onNav,
  onViewToggle,
  onLinkContent,
}: {
  onNav: (s: NavSection) => void
  onViewToggle?: () => void
  onLinkContent?: () => void
}) {
  const { t } = useT()
  const [openMenu, setOpenMenu] = useState<number | null>(null)

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
      onClick={() => setOpenMenu(null)}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch overflow-y-auto">
        <PageHeader
          title="Islands"
          subtitle="Deploy and monitor enterprise spatial environments"
          cta="+ Create Island"
        />
        <Toolbar
          placeholder="Search by island's name"
          showGridToggle
          viewMode="grid"
          onViewToggle={onViewToggle}
        />
        <div className="grid grid-cols-4 gap-[24px] w-full">
          {CARD_DATA.map((card, i) => (
            <IslandCard
              key={i}
              imgUrl={ISLAND_IMAGES[i]}
              status={card.status}
              dim={card.dim}
              menuOpen={openMenu === i}
              onMenuClick={() => setOpenMenu(openMenu === i ? null : i)}
              onLinkContent={onLinkContent}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex items-end justify-center gap-[8px] pt-[8px] pb-0 px-0 w-full h-full">
          {["‹", "1", "2", "3", "4", "...", "8", "›"].map((p, i) => (
            <button
              key={i}
              className="w-[40px] h-[40px] rounded-[6px] font-['Inter:Regular',sans-serif] font-normal text-[16px] flex items-center justify-center transition-colors"
              style={{
                background: p === "1" ? t.accentPurple : t.bgCard,
                border: `1px solid ${
                  p === "1" ? t.accentPurple : t.borderMuted
                }`,
                color: p === "1" ? "#FDFDFF" : t.textMuted,
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SCREEN: Islands Table ─────────────────────────────────────────────────

type IslandRow = {
  name: string
  slug: string
  status: "Published" | "Draft" | "Archived"
  version: string
}
const ISLAND_ROWS: IslandRow[] = [
  {
    name: "Muster Plaza",
    slug: "audibkk-hexagon1-plaza",
    status: "Published",
    version: "2.0.0",
  },
  {
    name: "Muster Plaza",
    slug: "audibkk-hexagon1-plaza",
    status: "Draft",
    version: "2.0.0",
  },
  {
    name: "Muster Plaza",
    slug: "audibkk-hexagon1-plaza",
    status: "Draft",
    version: "2.0.0",
  },
  {
    name: "Muster Plaza",
    slug: "audibkk-hexagon1-plaza",
    status: "Archived",
    version: "2.0.0",
  },
  {
    name: "Muster Plaza",
    slug: "audibkk-hexagon1-plaza",
    status: "Published",
    version: "2.0.0",
  },
]

function IslandsTableScreen({
  onNav,
  onViewToggle,
  onLinkContent,
}: {
  onNav: (s: NavSection) => void
  onViewToggle?: () => void
  onLinkContent?: () => void
}) {
  const { t } = useT()
  const [hovered, setHovered] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState<number | null>(null)

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <PageHeader
          title="Islands"
          subtitle="Deploy and monitor enterprise spatial environments"
          cta="+ Create Island"
        />
        <Toolbar
          placeholder="Search by island's name"
          showGridToggle
          viewMode="table"
          onViewToggle={onViewToggle}
        />
        <div
          className={`relative rounded-[${R.md}] w-full overflow-hidden`}
          style={{
            background: t.bgCard,
            boxShadow: t.shadowCard,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[1fr_160px_120px_60px]"
            style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
          >
            {["Name / Slug", "Status", "Version", "Actions"].map((h) => (
              <div key={h} className="px-[20px] py-[14px]">
                <p
                  className="font-['Exo_2:Medium',sans-serif] font-medium text-[13px] leading-[1.4] tracking-[0.02em] uppercase"
                  style={{ color: t.textMuted }}
                >
                  {h}
                </p>
              </div>
            ))}
          </div>
          {ISLAND_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_160px_120px_60px] cursor-pointer transition-colors"
              style={{
                borderBottom:
                  i < ISLAND_ROWS.length - 1
                    ? `1px solid ${t.borderSubtle}`
                    : "none",
                background: hovered === i ? t.bgRowHover : "transparent",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="px-[20px] py-[16px]">
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                  style={{ color: t.textPrimary }}
                >
                  {row.name}
                </p>
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[1.4]"
                  style={{ color: t.textPlaceholder }}
                >
                  {row.slug}
                </p>
              </div>
              <div className="px-[20px] py-[16px] flex items-center">
                <StatusBadge status={row.status} />
              </div>
              <div className="px-[20px] py-[16px] flex items-center">
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                  style={{ color: t.textMuted }}
                >
                  {row.version}
                </p>
              </div>
              <div className="px-[12px] py-[16px] flex items-center justify-center relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setMenuOpen(menuOpen === i ? null : i)
                  }}
                  className="p-[6px] rounded-[6px] transition-colors"
                >
                  <IcDots />
                </button>
                {menuOpen === i && (
                  <div
                    className={`absolute right-[12px] top-[40px] z-20 w-[160px] rounded-[${R.md}] overflow-hidden`}
                    style={{
                      background: t.bgDropdown,
                      border: `1px solid ${t.borderSubtle}`,
                      boxShadow: t.shadowHeavy,
                    }}
                  >
                    {["Link content", "Unpublish", "Archive"].map((label) => (
                      <button
                        key={label}
                        onClick={() => {
                          setMenuOpen(null)
                          if (label === "Link content") onLinkContent?.()
                        }}
                        className="w-full text-left px-[14px] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[14px] transition-colors"
                        style={{ color: t.accentOrange }}
                      >
                        {label}
                      </button>
                    ))}
                    <div
                      className="h-px mx-[14px]"
                      style={{ background: t.borderSubtle }}
                    />
                    <div className="p-[8px]">
                      <button
                        onClick={() => setMenuOpen(null)}
                        className={`w-full text-center rounded-[${R.md}] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[14px] transition-colors`}
                        style={{ background: t.accentOrange, color: "#141414" }}
                      >
                        Delete Island
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SCREEN: Content Table ─────────────────────────────────────────────────

type ContentRow = {
  name: string
  duration: string
  connections: string
  status: "Ready" | "Processing" | "Error"
  modified: string
}
const CONTENT_ROWS: ContentRow[] = [
  {
    name: "Content title",
    duration: "2:34",
    connections: "2 links",
    status: "Ready",
    modified: "Modified 2 hours ago",
  },
  {
    name: "Content title",
    duration: "2:34",
    connections: "2 links",
    status: "Processing",
    modified: "Modified 2 hours ago",
  },
  {
    name: "Content title",
    duration: "2:34",
    connections: "2 links",
    status: "Error",
    modified: "Modified 2 hours ago",
  },
  {
    name: "Content title",
    duration: "2:34",
    connections: "2 links",
    status: "Ready",
    modified: "Modified 2 hours ago",
  },
]

function ContentUploadIcon() {
  const { t } = useT()
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={t.iconMuted} strokeWidth="1.25" />
      <path
        d="M10 13.5V7.5M10 7.5L7.5 10M10 7.5L12.5 10"
        stroke={t.iconMuted}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ContentTableScreen({
  onNav,
  onLinkContent,
}: {
  onNav: (s: NavSection) => void
  onLinkContent?: () => void
}) {
  const { t } = useT()
  const [expanded, setExpanded] = useState<number | null>(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [placementsOpen, setPlacementsOpen] = useState(true)

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="content" onNav={onNav} svgPaths={svgZ} />
      <div className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <div>
            <p className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[28px]" style={{ color: t.textPrimary }}>Content</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] mt-[4px]" style={{ color: t.textMuted }}>Manage media assets, 3D models and interactive blocks</p>
          </div>
          <button className="flex flex-row items-center gap-[4px] px-[12px] rounded-[12px] font-['Inter:Regular',sans-serif] font-normal text-[18px] whitespace-nowrap transition-all shrink-0" style={{ width: 162, height: 44, background: "#FF9B1D", color: "#141414" }}>+ Create content</button>
        </div>
        <Toolbar placeholder="Search by island's name" />
        <div
          className={`relative rounded-[${R.md}] w-full overflow-hidden`}
          style={{
            background: t.bgCard,
            boxShadow: t.shadowCard,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[44px_1fr_130px_120px_140px_1fr_44px]"
            style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
          >
            {[
              "",
              "Name",
              "Weight/Duration",
              "Connections",
              "Status",
              "Last modified",
              "",
            ].map((h, i) => (
              <div key={i} className="px-[16px] py-[14px]">
                {h && (
                  <p
                    className="font-['Exo_2:Medium',sans-serif] font-medium text-[13px] leading-[1.4] tracking-[0.02em]"
                    style={{ color: t.textMuted }}
                  >
                    {h}
                  </p>
                )}
              </div>
            ))}
          </div>
          {CONTENT_ROWS.map((row, i) => (
            <div key={i}>
              <div
                className="grid grid-cols-[44px_1fr_130px_120px_140px_1fr_44px] cursor-pointer transition-colors"
                style={{
                  borderBottom: `1px solid ${t.borderSubtle}`,
                  background:
                    hovered === i && expanded !== i
                      ? t.bgRowHover
                      : "transparent",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="px-[12px] py-[16px] flex items-center justify-center">
                  <IcChevronExpand open={expanded === i} />
                </div>
                <div className="px-[16px] py-[16px] flex items-center gap-[12px]">
                  <ContentUploadIcon />
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                    style={{ color: t.textPrimary }}
                  >
                    {row.name}
                  </p>
                </div>
                <div className="px-[16px] py-[16px] flex items-center">
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                    style={{ color: t.textMuted }}
                  >
                    {row.duration}
                  </p>
                </div>
                <div className="px-[16px] py-[16px] flex items-center">
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                    style={{ color: t.textMuted }}
                  >
                    {row.connections}
                  </p>
                </div>
                <div className="px-[16px] py-[16px] flex items-center justify-start">
                  <StatusBadge status={row.status} />
                </div>
                <div className="px-[16px] py-[16px] flex items-center">
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                    style={{ color: t.textMuted }}
                  >
                    {row.modified}
                  </p>
                </div>
                <div className="px-[12px] py-[16px] flex items-center justify-center">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-[4px] rounded-[6px] transition-colors"
                  >
                    <IcDots />
                  </button>
                </div>
              </div>
              {expanded === i && (
                <div
                  className="px-[24px] py-[20px] flex flex-col gap-[16px]"
                  style={{
                    borderBottom: `1px solid ${t.borderSubtle}`,
                    background: t.bgRowExpanded,
                  }}
                >
                  <div className="grid grid-cols-[1fr_1fr] gap-[24px]">
                    <div>
                      <p
                        className="font-['Exo_2:SemiBold',sans-serif] font-semibold text-[13px] leading-[1.4] tracking-[0.02em] mb-[6px]"
                        style={{ color: t.textMuted }}
                      >
                        Support &amp; Notes:
                      </p>
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                        style={{ color: t.textPrimary }}
                      >
                        Introduction video displayed during guest walkthrough
                      </p>
                      <p
                        className="font-['Exo_2:SemiBold',sans-serif] font-semibold text-[13px] leading-[1.4] tracking-[0.02em] mt-[12px] mb-[6px]"
                        style={{ color: t.textMuted }}
                      >
                        File Specs:
                      </p>
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5]"
                        style={{ color: t.textPlaceholder }}
                      >
                        1080p H.264 · 156 MB · Aspect 16:9
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => setPlacementsOpen(!placementsOpen)}
                        className="flex items-center justify-between w-full mb-[10px]"
                      >
                        <p
                          className="font-['Exo_2:SemiBold',sans-serif] font-semibold text-[13px] leading-[1.4] tracking-[0.02em]"
                          style={{ color: t.textMuted }}
                        >
                          Active Placements (Linked to 2 Islands)
                        </p>
                        <IcChevronDown />
                      </button>
                      {placementsOpen && (
                        <div className="flex flex-col gap-[6px]">
                          {[
                            "AudiBKK → LobbyRoom (TV1 / TV2)",
                            "Muster Plaza → Main Entrance (Display)",
                          ].map((p) => (
                            <button
                              key={p}
                              className="text-left font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5] hover:underline"
                              style={{ color: t.accentCyan }}
                            >
                              {p}
                            </button>
                          ))}
                          <p
                            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[1.5]"
                            style={{ color: t.textPlaceholder }}
                          >
                            Click location to open and manage slot in Island
                            Structure tree
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-[12px] pt-[4px]">
                    <button className="flex flex-row items-center gap-[4px] px-[12px] rounded-[12px] font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[27px] whitespace-nowrap transition-all shrink-0" style={{ width: 148, height: 44, background: "#FF9B1D", color: "#141414" }}>Delete content</button>
                    <button className="flex flex-row items-center gap-[4px] px-[12px] rounded-[12px] font-['Exo_2:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] whitespace-nowrap transition-all shrink-0" style={{ width: 155, height: 44, background: "#434343", color: "#FF9B1D" }}>Change content</button>
                    <div className="flex-1" />
                    <button onClick={onLinkContent} className="flex flex-row items-center gap-[4px] px-[12px] rounded-[12px] font-['Exo_2:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] whitespace-nowrap transition-all shrink-0" style={{ width: 206, height: 44, border: "1px solid #A1A1A1", color: "#FF9B1D" }}>Link to another Island</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SCREEN: Link Content ──────────────────────────────────────────────────

type TreeNode = {
  label: string
  tag?: string
  tagAccent?: boolean
  type: "world" | "building" | "floor" | "slot-linked" | "slot-empty" | "slot-readonly"
  children?: TreeNode[]
}

const TREE_DATA: TreeNode = {
  label: "Muster Plaza",
  tag: "(World)",
  type: "world",
  children: [
    {
      label: "Floor 1",
      tag: "(Building)",
      type: "building",
      children: [
        {
          label: "EcospaceBuilding",
          tag: "(Client Booth 4)",
          tagAccent: true,
          type: "building",
          children: [
            {
              label: "Floor 1",
              tag: "(Building)",
              type: "building",
              children: [
                { label: "TV 1", type: "slot-linked" },
                { label: "TV 2", type: "slot-empty" },
                { label: "Speaker", type: "slot-readonly" },
              ],
            },
          ],
        },
        { label: "Floor 2", tag: "(Building)", type: "building" },
      ],
    },
  ],
}

const CONTENT_ITEMS = [
  {
    name: "Welcome Tour Video",
    meta: "2:34 · 156 MB · 4K",
    tag: "Directly tagged for LobbyRoom",
    selected: true,
  },
  {
    name: "Content Title",
    meta: "180 MB · MP4 · 1080p",
    tag: "",
    selected: false,
  },
  {
    name: "Content Title",
    meta: "180 MB · MP4 · 1080p",
    tag: "",
    selected: false,
  },
  {
    name: "Content Title",
    meta: "180 MB · MP4 · 1080p",
    tag: "",
    selected: false,
  },
  {
    name: "Content Title",
    meta: "180 MB · MP4 · 1080p",
    tag: "",
    selected: false,
  },
]

function TreeNodeRow({
  node,
  depth = 0,
  activeSlot,
  onSelect,
}: {
  node: TreeNode
  depth?: number
  activeSlot: string
  onSelect: (s: string) => void
}) {
  const { t } = useT()
  const [open, setOpen] = useState(true)
  const slotColor: Record<string, string> = {
    "slot-linked": t.accentCyan,
    "slot-empty": t.textPrimary,
    "slot-readonly": t.accentPurple,
  }
  const isSlot = node.type.startsWith("slot")
  const isActive = node.label === activeSlot

  return (
    <div>
      <div
        className="flex items-center gap-[8px] py-[6px] rounded-[6px] cursor-pointer transition-colors"
        style={{
          paddingLeft: `${12 + depth * 16}px`,
          paddingRight: 12,
          background:
            isActive && isSlot ? `${t.accentPurple}28` : "transparent",
        }}
        onClick={() => {
          if (!isSlot && node.children) setOpen(!open)
          if (isSlot) onSelect(node.label)
        }}
        onMouseEnter={(e) => {
          if (!(isActive && isSlot))
            (e.currentTarget as HTMLElement).style.background = t.bgNavHover
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.background =
            isActive && isSlot ? `${t.accentPurple}28` : "transparent"
        }}
      >
        {!isSlot && node.children && (
          <span
            className="shrink-0"
            style={{
              transform: open ? "rotate(90deg)" : "none",
              display: "inline-block",
              transition: "transform 0.15s",
            }}
          >
            <IcChevronRight />
          </span>
        )}
        {!isSlot && !node.children && <span className="w-[12px] shrink-0" />}
        {isSlot && (
          <span
            className="inline-block w-[8px] h-[8px] rounded-full shrink-0"
            style={{ background: slotColor[node.type] ?? t.iconMuted }}
          />
        )}
        <span
          className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5]"
          style={{ color: t.textPrimary }}
        >
          {node.label}
        </span>
        {node.tag && (
          <span
            className="font-['Inter:Regular',sans-serif] font-normal text-[12px]"
            style={{ color: t.textPlaceholder }}
          >
            {node.tag}
          </span>
        )}
        {node.tagAccent && (
          <div
            className="relative rounded-[6px] shrink-0 ml-[4px]"
            style={{ background: "rgba(255,155,29,0.1)" }}
          >
            <div
              aria-hidden
              className="absolute border border-solid inset-0 pointer-events-none rounded-[6px]"
              style={{ borderColor: t.accentOrange }}
            />
            <div className="content-stretch flex items-start px-[10px] py-[4px] relative">
              <p
                className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic shrink-0 text-[12px] whitespace-nowrap"
                style={{ color: t.accentOrange }}
              >
                Your Assigned Space
              </p>
            </div>
          </div>
        )}
      </div>
      {!isSlot &&
        open &&
        node.children?.map((child, i) => (
          <TreeNodeRow
            key={i}
            node={child}
            depth={depth + 1}
            activeSlot={activeSlot}
            onSelect={onSelect}
          />
        ))}
    </div>
  )
}

// ─── Scope Tabs Segment Control ───────────────────────────────────────────

function ArrowCircle({
  dir,
  onClick,
}: {
  dir: "left" | "right"
  onClick?: () => void
}) {
  const { t } = useT()
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[30px] flex items-center justify-center transition-opacity hover:opacity-70"
      style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }}
    >
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-2.22%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 23.5 23.5"
          >
            <path
              d={scopeTabSvg.p3a31eb00}
              stroke={t.textPrimary}
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.94%_39.06%_35.94%_45.31%]">
        <div className="absolute inset-[-5.93%_-10.67%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 5.6875 9.43751"
          >
            <path
              d={scopeTabSvg.p30fded60}
              stroke={t.textPrimary}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}

function ScopeTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: string[]
  active: number
  onChange: (i: number) => void
}) {
  const { t } = useT()
  const prev = () => onChange(Math.max(0, active - 1))
  const next = () => onChange(Math.min(tabs.length - 1, active + 1))
  return (
    <div
      className="relative rounded-[10px] shrink-0 w-full"
      style={{ background: t.bgSurface, border: `1px solid ${t.borderSubtle}` }}
    >
      <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] gap-[4px]">
        <ArrowCircle dir="left" onClick={prev} />
        <div className="flex items-center justify-center gap-[4px] flex-1 min-w-0 overflow-hidden">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => onChange(i)}
              className="relative rounded-[6px] shrink-0 transition-colors"
              style={{
                background: i === active ? t.accentPurple : "transparent",
              }}
            >
              <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] w-full">
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal leading-[13.8px] not-italic shrink-0 text-[12px] whitespace-nowrap"
                  style={{ color: i === active ? "#141414" : t.textMuted }}
                >
                  {tab}
                </p>
              </div>
            </button>
          ))}
        </div>
        <ArrowCircle dir="right" onClick={next} />
      </div>
    </div>
  )
}

function LinkContentScreen({
  onNav,
  onClose,
}: {
  onNav: (s: NavSection) => void
  onClose?: () => void
}) {
  const { t } = useT()
  const [activeSlot, setActiveSlot] = useState("TV 1")
  const [selectedContent, setSelectedContent] = useState(0)
  const tabs = [
    "LobbyRoom (3)",
    "Floor 1 (8)",
    "EchoSpaceBuilding(15)",
    "Plaza (22)",
  ]
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div className="flex flex-1 flex-col min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch gap-[24px]">
        <div>
          <p
            className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[28px]"
            style={{ color: t.textPrimary }}
          >
            Link Content
          </p>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] mt-[4px]"
            style={{ color: t.textMuted }}
          >
            Muster Plaza
          </p>
        </div>
        <div className="flex gap-[16px] flex-1 min-h-0">
          {/* Tree panel */}
          <div
            className={`relative rounded-[${R.md}] w-fit shrink-0 flex flex-col overflow-hidden`}
            style={{
              background: t.bgCard,
              boxShadow: t.shadowCard,
              border: `1px solid ${t.borderSubtle}`,
            }}
          >
            <div
              className="p-[12px]"
              style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
            >
              <div
                className={`flex items-center gap-[8px] px-[10px] py-[8px] rounded-[${R.md}]`}
                style={{
                  background: t.bgInput,
                  border: `1px solid ${t.borderSubtle}`,
                }}
              >
                <IcSearch />
                <span
                  className="font-['Inter:Regular',sans-serif] font-normal text-[14px]"
                  style={{ color: t.textPlaceholder }}
                >
                  Placeholder_input
                </span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-[8px]">
              <TreeNodeRow
                node={TREE_DATA}
                activeSlot={activeSlot}
                onSelect={setActiveSlot}
              />
            </div>
            <div
              className="flex items-center gap-[16px] px-[12px] py-[10px]"
              style={{ borderTop: `1px solid ${t.borderSubtle}` }}
            >
              {[
                [t.accentCyan, "Linked Slot"],
                [t.textPrimary, "Empty Slot"],
                [t.accentPurple, "Read-only"],
              ].map(([c, l]) => (
                <span key={l as string} className="flex items-center gap-[5px]">
                  <span
                    className="inline-block w-[8px] h-[8px] rounded-full"
                    style={{ background: c as string }}
                  />
                  <span
                    className="font-['Inter:Regular',sans-serif] font-normal text-[11px]"
                    style={{ color: t.textPlaceholder }}
                  >
                    {l as string}
                  </span>
                </span>
              ))}
            </div>
          </div>
          {/* Content selector */}
          <div
            className={`relative rounded-[${R.md}] flex-1 min-w-0 flex flex-col overflow-hidden`}
            style={{
              background: t.bgCard,
              boxShadow: t.shadowCard,
              border: `1px solid ${t.borderSubtle}`,
            }}
          >
            <div
              className="px-[20px] pt-[20px] pb-[12px]"
              style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
            >
              <div className="flex items-center gap-[6px] mb-[6px]">
                {[
                  "Muster Plaza",
                  "Hexagon1",
                  "Plaza",
                  "EcospaceBuilding",
                  "Floor1",
                  "LobbyRoom",
                  "TV 1",
                ].map((crumb, i, arr) => (
                  <span key={crumb} className="flex items-center gap-[6px]">
                    <span
                      className="font-['Inter:Regular',sans-serif] font-normal text-[12px]"
                      style={{
                        color:
                          i === arr.length - 1
                            ? t.textMuted
                            : t.textPlaceholder,
                      }}
                    >
                      {crumb}
                    </span>
                    {i < arr.length - 1 && <IcChevronRight />}
                  </span>
                ))}
              </div>
              <p
                className="font-['Exo_2:SemiBold',sans-serif] font-semibold text-[20px] leading-[1.4]"
                style={{ color: t.textPrimary }}
              >
                Change Content for TV (Placeholder)
              </p>
              <p
                className="font-['Inter:Regular',sans-serif] font-normal text-[13px] mt-[2px]"
                style={{ color: t.textPlaceholder }}
              >
                Accepted: 16:9 Video · Max 4K
              </p>
            </div>
            {/* Tabs */}
            <div
              className="px-[16px] pt-[12px] pb-[4px]"
              style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
            >
              <ScopeTabs
                tabs={tabs}
                active={activeTab}
                onChange={setActiveTab}
              />
            </div>
            {/* Search */}
            <div className="px-[16px] pt-[12px] pb-[8px]">
              <div
                className={`flex items-center gap-[8px] px-[10px] py-[8px] rounded-[${R.md}]`}
                style={{
                  background: t.bgInput,
                  border: `1px solid ${t.borderSubtle}`,
                }}
              >
                <IcSearch />
                <span
                  className="font-['Inter:Regular',sans-serif] font-normal text-[14px]"
                  style={{ color: t.textPlaceholder }}
                >
                  Placeholder_input
                </span>
              </div>
            </div>
            {/* Content list */}
            <div className="flex-1 overflow-y-auto px-[16px] flex flex-col gap-[8px] pb-[12px]">
              {CONTENT_ITEMS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedContent(i)}
                  className={`flex items-center gap-[12px] p-[12px] rounded-[${R.sm}] text-left transition-colors`}
                  style={{
                    background:
                      selectedContent === i
                        ? `${t.accentCyan}12`
                        : "transparent",
                    border: `1px solid ${
                      selectedContent === i ? t.accentCyan : t.borderSubtle
                    }`,
                  }}
                >
                  <div
                    className={`w-[64px] h-[44px] rounded-[${R.sm}] shrink-0`}
                    style={{ background: t.borderSubtle }}
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.5] truncate"
                      style={{ color: t.textPrimary }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[1.4]"
                      style={{ color: t.textPlaceholder }}
                    >
                      {item.meta}
                    </p>
                    {item.tag && (
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[1.4] mt-[2px]"
                        style={{ color: t.accentCyan }}
                      >
                        {item.tag}
                      </p>
                    )}
                  </div>
                  <div
                    className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center shrink-0"
                    style={{
                      background:
                        selectedContent === i ? t.accentCyan : "transparent",
                      border: `1px solid ${
                        selectedContent === i ? t.accentCyan : t.borderMuted
                      }`,
                    }}
                  >
                    {selectedContent === i && (
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M1.5 5L4.5 8L10.5 2"
                          stroke="#141414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
            {/* Footer */}
            <div
              className="flex items-center justify-end gap-[12px] px-[20px] py-[16px]"
              style={{ borderTop: `1px solid ${t.borderSubtle}` }}
            >
              <SecondaryButton label="Cancel" onClick={onClose} />
              <PrimaryButton label="Assign to slot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SCREEN: Client Accounts ──────────────────────────────────────────────

type UserRole = "Admin" | "Editor" | "Viewer"

type AccountRow = {
  initials: string
  name: string
  email: string
  org: string
  role: UserRole
  status: "Active" | "Invited"
  lastActive: string
}

const ACCOUNT_ROWS: AccountRow[] = [
  {
    initials: "MM",
    name: "Max Müller",
    email: "max.mueller@example.de",
    org: "Muster Systems Inc.",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
  },
  {
    initials: "MM",
    name: "Max Müller",
    email: "max.mueller@example.de",
    org: "Muster Systems Inc.",
    role: "Editor",
    status: "Active",
    lastActive: "2 hours ago",
  },
  {
    initials: "MM",
    name: "Max Müller",
    email: "max.mueller@example.de",
    org: "Muster Systems Inc.",
    role: "Viewer",
    status: "Invited",
    lastActive: "2 hours ago",
  },
  {
    initials: "MM",
    name: "Max Müller",
    email: "max.mueller@example.de",
    org: "Muster Systems Inc.",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
  },
]

function UserAvatar({ initials }: { initials: string }) {
  const { t } = useT()
  return (
    <div
      className="flex-none w-[36px] h-[36px] rounded-[18px] flex items-center justify-center shrink-0"
      style={{ background: t.bgSurface }}
    >
      <span
        className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px]"
        style={{ color: t.textPrimary }}
      >
        {initials}
      </span>
    </div>
  )
}

function RoleBadge({ role }: { role: UserRole }) {
  const { t } = useT()
  type BadgeStyle = { bg: string border: string text: string faded?: boolean }
  const cfg: Record<UserRole, BadgeStyle> = {
    Admin: {
      bg: "rgba(255,155,29,0.1)",
      border: t.accentOrange,
      text: t.accentOrange,
    },
    Editor: { bg: "rgba(5,5,7,0.1)", border: t.borderMuted, text: t.textMuted },
    Viewer: {
      bg: "rgba(208,208,208,0.1)",
      border: "none",
      text: t.textMuted,
      faded: true,
    },
  }
  const s = cfg[role]
  return (
    <div
      className={`relative rounded-[${R.sm}] shrink-0 inline-block`}
      style={{ background: s.bg, opacity: s.faded ? 0.6 : undefined }}
    >
      {s.border !== "none" && (
        <div
          aria-hidden
          className={`absolute border border-solid inset-0 pointer-events-none rounded-[${R.sm}]`}
          style={{ borderColor: s.border }}
        />
      )}
      <div className="content-stretch flex items-center px-[10px] py-[4px] relative">
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic shrink-0 text-[12px] whitespace-nowrap"
          style={{ color: s.text }}
        >
          {role}
        </p>
      </div>
    </div>
  )
}

function ClientAccountsScreen({ onNav }: { onNav: (s: NavSection) => void }) {
  const { t } = useT()
  const [hovered, setHovered] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState<number | null>(null)

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
      onClick={() => setMenuOpen(null)}
    >
      <Sidebar active="accounts" onNav={onNav} svgPaths={svgJ} />
      <div className="flex flex-1 flex-col gap-[24px] items-start min-w-px px-[40px] py-[32px] self-stretch overflow-y-auto">
        {/* Page header */}
        <div className="flex items-center justify-between w-full shrink-0">
          <div>
            <p
              className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[32px] text-[28px]"
              style={{ color: t.textPrimary }}
            >
              Client Accounts
            </p>
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] mt-[4px]"
              style={{ color: t.textMuted }}
            >
              Manage user access, roles, and client permissions across spatial
              environments
            </p>
          </div>
          <PrimaryButton label="+ Invite User" />
        </div>
        {/* Toolbar */}
        <div
          className={`relative rounded-[${R.lg}] shrink-0 w-full`}
          style={{
            background: t.bgCard,
            boxShadow: t.shadowCard,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          <div className="flex gap-[12px] items-center p-[16px]">
            <div
              className={`flex-1 min-w-0 relative rounded-[${R.md}]`}
              style={{
                background: t.bgInput,
                border: `1px solid ${t.borderSubtle}`,
              }}
            >
              <div className="flex items-center gap-[8px] px-[12px] py-[10px]">
                <IcSearch />
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] truncate"
                  style={{ color: t.textPlaceholder }}
                >
                  Search by user name or email
                </p>
              </div>
            </div>
            <div
              className={`relative rounded-[${R.sm}] h-[50px] shrink-0`}
              style={{
                background: t.bgFilter,
                border: `1px solid ${t.borderMuted}`,
              }}
            >
              <div className="flex items-center gap-[8px] px-[17px] h-full">
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] whitespace-nowrap"
                  style={{ color: t.textPrimary }}
                >
                  Status: All
                </p>
                <IcChevronDown />
              </div>
            </div>
            <div
              className={`relative rounded-[${R.sm}] h-[50px] shrink-0`}
              style={{
                background: t.bgFilter,
                border: `1px solid ${t.borderMuted}`,
              }}
            >
              <div className="flex items-center gap-[8px] px-[17px] h-full">
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] whitespace-nowrap"
                  style={{ color: t.textPrimary }}
                >
                  Sort: Last Active
                </p>
                <IcSort />
              </div>
            </div>
          </div>
        </div>
        {/* User table */}
        <div
          className={`relative rounded-[${R.md}] w-full overflow-hidden`}
          style={{
            background: t.bgCard,
            boxShadow: t.shadowCard,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[minmax(200px,1fr)_minmax(160px,1fr)_100px_120px_minmax(160px,1fr)_48px] px-[16px] py-[14px]"
            style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
          >
            {[
              "User",
              "Weight/Duration",
              "Role",
              "Status",
              "Last active",
              "Actions",
            ].map((h) => (
              <div key={h} className="flex items-center">
                <p
                  className="font-['Exo_2:Medium',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.02em]"
                  style={{ color: t.textMuted }}
                >
                  {h}
                </p>
              </div>
            ))}
          </div>
          {/* Rows */}
          {ACCOUNT_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[minmax(200px,1fr)_minmax(160px,1fr)_100px_120px_minmax(160px,1fr)_48px] px-[16px] items-center h-[68px] relative transition-colors"
              style={{
                borderBottom:
                  i < ACCOUNT_ROWS.length - 1
                    ? `1px solid ${t.borderSubtle}`
                    : "none",
                background: hovered === i ? t.bgRowHover : "transparent",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* User */}
              <div className="flex items-center gap-[12px] overflow-hidden pr-[12px]">
                <UserAvatar initials={row.initials} />
                <div className="overflow-hidden min-w-0">
                  <p
                    className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px] truncate"
                    style={{ color: t.textPrimary }}
                  >
                    {row.name}
                  </p>
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] truncate mt-[2px]"
                    style={{ color: t.textMuted }}
                  >
                    {row.email}
                  </p>
                </div>
              </div>
              {/* Organization */}
              <p
                className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px] truncate pr-[12px]"
                style={{ color: t.textPrimary }}
              >
                {row.org}
              </p>
              {/* Role */}
              <div className="flex items-center">
                <RoleBadge role={row.role} />
              </div>
              {/* Status */}
              <div className="flex items-center">
                <StatusBadge status={row.status} />
              </div>
              {/* Last active */}
              <p
                className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[17px]"
                style={{ color: t.textMuted }}
              >
                {row.lastActive}
              </p>
              {/* Actions */}
              <div className="flex items-center justify-center relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setMenuOpen(menuOpen === i ? null : i)
                  }}
                  className={`rounded-[${R.sm}] size-[32px] flex items-center justify-center transition-colors`}
                  style={{ background: t.bgSurface }}
                >
                  <IcDots />
                </button>
                {menuOpen === i && (
                  <div
                    className={`absolute right-0 top-[36px] w-[168px] rounded-[${R.md}] overflow-hidden z-20`}
                    style={{
                      background: t.bgDropdown,
                      border: `1px solid ${t.borderSubtle}`,
                      boxShadow: t.shadowHeavy,
                    }}
                  >
                    {["Edit permissions", "Resend invite"].map((label) => (
                      <button
                        key={label}
                        onClick={() => setMenuOpen(null)}
                        className="w-full text-left px-[14px] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[14px] transition-colors"
                        style={{ color: t.accentOrange }}
                      >
                        {label}
                      </button>
                    ))}
                    <div
                      className="h-px mx-[14px]"
                      style={{ background: t.borderSubtle }}
                    />
                    <div className="p-[8px]">
                      <button
                        onClick={() => setMenuOpen(null)}
                        className={`w-full text-center rounded-[${R.md}] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[14px] transition-colors`}
                        style={{ background: t.accentOrange, color: "#141414" }}
                      >
                        Deactivate account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Screen nav bar ────────────────────────────────────────────────────────

const SCREEN_LABELS = [
  "Islands — Empty",
  "Islands — Grid",
  "Islands — Table",
  "Content — Empty",
  "Content — Table",
  "Link Content",
  "Client Accounts",
] as const
type ScreenId = typeof SCREEN_LABELS[number]

// ─── Root App ──────────────────────────────────────────────────────────────

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [screen, setScreen] = useState<ScreenId>("Islands — Grid")

  const t: Tokens = isDark ? DARK : LIGHT
  const themeVal: ThemeCtxVal = {
    t,
    isDark,
    toggle: () => setIsDark((d) => !d),
  }

  function handleNav(s: NavSection) {
    if (s === "islands") setScreen("Islands — Grid")
    if (s === "content") setScreen("Content — Table")
    if (s === "accounts") setScreen("Client Accounts")
  }

  function renderScreen() {
    switch (screen) {
      case "Islands — Empty":
        return <EmptyIslandsScreen onNav={handleNav} />
      case "Islands — Grid":
        return (
          <IslandsGridScreen
            onNav={handleNav}
            onViewToggle={() => setScreen("Islands — Table")}
            onLinkContent={() => setScreen("Link Content")}
          />
        )
      case "Islands — Table":
        return (
          <IslandsTableScreen
            onNav={handleNav}
            onViewToggle={() => setScreen("Islands — Grid")}
            onLinkContent={() => setScreen("Link Content")}
          />
        )
      case "Content — Empty":
        return <EmptyContentScreen onNav={handleNav} />
      case "Content — Table":
        return (
          <ContentTableScreen
            onNav={handleNav}
            onLinkContent={() => setScreen("Link Content")}
          />
        )
      case "Link Content":
        return (
          <LinkContentScreen
            onNav={handleNav}
            onClose={() => setScreen("Content — Table")}
          />
        )
      case "Client Accounts":
        return <ClientAccountsScreen onNav={handleNav} />
    }
  }

  return (
    <ThemeCtx.Provider value={themeVal}>
      <div
        className="relative size-full flex flex-col"
        style={{ background: t.bgBase, transition: "background 0.2s" }}
      >
        <div className="flex-1 min-h-0 overflow-auto">{renderScreen()}</div>
      </div>
    </ThemeCtx.Provider>
  )
}
