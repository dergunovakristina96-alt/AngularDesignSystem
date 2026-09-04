import { createContext, useContext, useState, useRef, useEffect, useId, ReactNode, Dispatch, SetStateAction } from "react"
import { createPortal } from "react-dom"
import svgJ from "../imports/svg-j2kbbgpe3g"
import svgZ from "../imports/svg-zjclb3wvx2"
import hexSvg from "./imports/SldTrackWithDots/svg-jrz8oioebo"
import scopeTabSvg from "./imports/ScopeTabsSegmentControl/svg-um1qir0taj"
import imgLinkContentPreview from "./imports/LinkContent/ea9698d5098b41b3b44c22082e453767.png"

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
  borderStrong: "#727272",
  textPrimary: "#fdfdff",
  textMuted: "#d0d0d0",
  textPlaceholder: "#a1a1a1",
  iconMuted: "#D0D0D0",
  accentCyan: "#4FCDFF",
  accentOrange: "#FF9B1D",
  accentPurple: "#892CA3",
  accentRed: "#FF4D5E",
  secondaryBg: "#434343",
  secondaryText: "#FF9B1D",
  shadowCard: "0 4px 24px rgba(0,0,0,0.24)",
  shadowHeavy: "0 8px 32px rgba(0,0,0,0.48)",
}

const LIGHT = {
  bgBase: "#DCDCDC",
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
  borderStrong: "#7A7A9A",
  textPrimary: "#141420",
  textMuted: "#5A5A72",
  textPlaceholder: "#6E6E88",
  iconMuted: "#7878A0",
  accentCyan: "#1A9FCC",
  accentOrange: "#E88500",
  accentPurple: "#892CA3",
  accentRed: "#D92424",
  secondaryBg: "#141414",
  secondaryText: "#FDFDFF",
  shadowCard: "0 2px 16px rgba(0,0,0,0.08)",
  shadowHeavy: "0 8px 32px rgba(0,0,0,0.16)",
}

type Tokens = typeof DARK

type ThemeCtxVal = { t: Tokens; isDark: boolean; toggle: () => void }
const ThemeCtx = createContext<ThemeCtxVal>({
  t: DARK,
  isDark: true,
  toggle: () => {},
})
function useT() {
  return useContext(ThemeCtx)
}

// Focus trap + Escape-to-close + focus restore for modal dialogs (WCAG 2.1.1 / 2.4.3 / 4.1.2)
function useModalA11y(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const node = ref.current
    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

    function getFocusable(): HTMLElement[] {
      if (!node) return []
      return Array.from(node.querySelectorAll<HTMLElement>(focusableSelector))
    }

    const focusables = getFocusable()
    ;(focusables[0] ?? node)?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation()
        closeRef.current()
        return
      }
      if (e.key === "Tab") {
        const items = getFocusable()
        if (items.length === 0) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown, true)
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true)
      previouslyFocused?.focus?.()
    }
  }, [])

  return { ref, titleId }
}

type SvgPaths = Record<string, string>

// ─── Icons (theme-aware) ──────────────────────────────────────────────────

function IcSearch() {
  const { t } = useT()
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="3.5" r="1.25" fill={color ?? t.iconMuted} />
      <circle cx="8" cy="8" r="1.25" fill={color ?? t.iconMuted} />
      <circle cx="8" cy="12.5" r="1.25" fill={color ?? t.iconMuted} />
    </svg>
  )
}

function IcChevronRight({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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

function IcLock({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="5.5"
        width="7"
        height="5"
        rx="1"
        stroke={color ?? t.textPlaceholder}
        strokeWidth="1.1"
      />
      <path
        d="M4 5.5V3.75C4 2.7835 4.7835 2 5.75 2H6.25C7.2165 2 8 2.7835 8 3.75V5.5"
        stroke={color ?? t.textPlaceholder}
        strokeWidth="1.1"
        strokeLinecap="round"
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
      aria-hidden="true"
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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M10.6669 14V12.6667C10.6669 11.9594 10.3859 11.2811 9.88577 10.781C9.38563 10.281 8.7073 10 8 10H3.99968C3.29238 10 2.61405 10.281 2.11391 10.781C1.61377 11.2811 1.3328 11.9594 1.3328 12.6667V14M10.6669 2.08529C11.2388 2.23353 11.7452 2.56746 12.1068 3.03466C12.4683 3.50186 12.6645 4.07588 12.6645 4.66662C12.6645 5.25736 12.4683 5.83138 12.1068 6.29858C11.7452 6.76578 11.2388 7.09971 10.6669 7.24795M14.6672 13.9999V12.6666C14.6668 12.0757 14.4701 11.5018 14.1081 11.0348C13.746 10.5678 13.2392 10.2343 12.667 10.0866M8.66672 4.66667C8.66672 6.13943 7.47272 7.33333 5.99984 7.33333C4.52696 7.33333 3.33296 6.13943 3.33296 4.66667C3.33296 3.19391 4.52696 2 5.99984 2C7.47272 2 8.66672 3.19391 8.66672 4.66667Z"
        stroke={c}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IcAnalytics({ color }: { color?: string }) {
  const { t } = useT()
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path
        d="M11.9082 2.24023C13.8372 1.19726 16.1628 1.19726 18.0918 2.24023L21.3438 3.99805L24.5049 5.94238C26.3725 7.09142 27.5353 9.10494 27.5967 11.2969L27.6992 15L27.5967 18.7031C27.5353 20.8951 26.3725 22.9086 24.5049 24.0576L21.3438 26.001L18.0918 27.7598C16.1628 28.8027 13.8372 28.8027 11.9082 27.7598L8.65527 26.001L5.49512 24.0576C3.62746 22.9086 2.4647 20.8951 2.40332 18.7031L2.2998 15L2.40332 11.2969C2.4647 9.10494 3.62746 7.09142 5.49512 5.94238L8.65527 3.99805L11.9082 2.24023Z"
        stroke={c}
      />
      <path
        d="M11.9082 5.24023C13.8372 4.19726 16.1628 4.19726 18.0918 5.24023L20.0361 6.29199L21.9072 7.44238C23.7748 8.59144 24.9367 10.605 24.998 12.7969L25.0596 15L24.998 17.2031C24.9367 19.395 23.7748 21.4086 21.9072 22.5576L20.0361 23.707L18.0918 24.7598C16.1628 25.8027 13.8372 25.8027 11.9082 24.7598L9.96289 23.707L8.09277 22.5576C6.22524 21.4086 5.06333 19.395 5.00195 17.2031L4.93945 15L5.00195 12.7969C5.06333 10.605 6.22524 8.59144 8.09277 7.44238L9.96289 6.29199L11.9082 5.24023Z"
        stroke={c}
      />
      <path
        d="M11.9082 8.24023C13.8372 7.19726 16.1628 7.19726 18.0918 8.24023L18.7041 8.57129L19.3086 8.94238C21.1763 10.0914 22.339 12.1049 22.4004 14.2969L22.4189 15L22.4004 15.7031C22.339 17.8951 21.1763 19.9086 19.3086 21.0576L18.7041 21.4277L18.0918 21.7598C16.1628 22.8027 13.8372 22.8027 11.9082 21.7598L11.2949 21.4277L10.6914 21.0576C8.82375 19.9086 7.66099 17.8951 7.59961 15.7031L7.58008 15L7.59961 14.2969C7.66099 12.1049 8.82375 10.0914 10.6914 8.94238L11.2949 8.57129L11.9082 8.24023Z"
        stroke={c}
      />
    </svg>
  )
}

function IcContent({ active }: { active: boolean }) {
  const { t } = useT()
  const c = active ? t.accentCyan : t.iconMuted
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM3 13V3H13V13H3Z"
        fill={c}
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
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center gap-[10px] w-fit px-[12px] py-[10px] rounded-[${R.sm}] transition-colors`}
      style={{ color: t.textMuted }}
    >
      {/* Hex slider toggle */}
      <div className="relative shrink-0" style={{ width: 48, height: 20 }} aria-hidden="true">
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
        {/* Active fill — tints the whole track to match the current theme */}
        <div
          className="absolute rounded-[2px] transition-colors duration-200"
          style={{
            left: 10,
            right: 10,
            top: 6,
            bottom: 6,
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
              "drop-shadow(0px 4px 10px rgba(20,20,20,0.4)) drop-shadow(0px -4px 20px rgba(222,105,255,0.25))",
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
                stroke={isDark ? "#892CA3" : "#4FCDFF"}
                strokeMiterlimit="1.30541"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <span className="ml-auto border border-solid" aria-hidden="true" style={{ color: t.textMuted, borderColor: "transparent", background: "none" }}>
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
  const items: { id: NavSection; label: string; icon: ReactNode }[] = [
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
          <nav aria-label="Primary" className="w-full">
            <ul className="flex flex-col gap-[8px] items-start py-[16px] w-full list-none m-0 p-0">
              {items.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id} className="w-full">
                    <button
                      onClick={() => onNav(item.id)}
                      aria-current={isActive ? "page" : undefined}
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
                          style={{ border: `1px solid ${t.borderSubtle}` }}
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
                  </li>
                )
              })}
            </ul>
          </nav>
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
            border: `1px solid ${t.borderStrong}`,
          }}
        >
          <div className="flex items-center gap-[8px] p-[12px]">
            <p
              className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] truncate"
              style={{ color: t.textPlaceholder }}
            >
              {placeholder}
            </p>
            <IcSearch />
          </div>
        </div>
        {/* Status filter */}
        <button
          type="button"
          aria-haspopup="listbox"
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
        </button>
        {/* Sort */}
        <button
          type="button"
          aria-haspopup="listbox"
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
        </button>
        {showGridToggle && onViewToggle && (
          <button
            onClick={onViewToggle}
            aria-label={viewMode === "grid" ? "Switch to list view" : "Switch to grid view"}
            aria-pressed={viewMode === "grid"}
            className="flex items-center justify-center w-[44px] h-[44px] p-[10px] shrink-0 transition-opacity hover:opacity-70"
          >
            {viewMode === "grid" ? <IcListView /> : <IcGridView />}
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Row actions dropdown (portal, escapes table's overflow-hidden) ────────

function ActionsMenuPortal({
  anchorEl,
  onClose,
  top,
  right,
  width,
  children,
}: {
  anchorEl: HTMLElement | null
  onClose: () => void
  top: number
  right: number
  width: number
  children: ReactNode
}) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function updatePosition() {
      const rect = anchorEl?.getBoundingClientRect()
      if (!rect) return
      setPos({ top: rect.top + top, left: rect.right - right - width })
    }
    updatePosition()
    window.addEventListener("scroll", updatePosition, true)
    window.addEventListener("resize", updatePosition)
    return () => {
      window.removeEventListener("scroll", updatePosition, true)
      window.removeEventListener("resize", updatePosition)
    }
  }, [anchorEl, top, right, width])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      if (anchorEl?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      onClose()
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation()
        onClose()
        anchorEl?.focus()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown, true)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown, true)
    }
  }, [anchorEl, onClose])

  useEffect(() => {
    const firstItem = menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]:not([disabled])')
    firstItem?.focus()
  }, [])

  if (!pos) return null

  return createPortal(
    <div
      ref={menuRef}
      role="menu"
      style={{ position: "fixed", top: pos.top, left: pos.left, zIndex: 50 }}
    >
      {children}
    </div>,
    document.body
  )
}

// ─── Status badge ──────────────────────────────────────────────────────────

type StatusType = "Published" | "Draft" | "Archived" | "Ready" | "Processing" | "Error" | "Invited" | "Active"

function StatusBadge({ status }: { status: StatusType }) {
  const { t } = useT()
  type BadgeStyle = { bg: string; border: string; text: string; faded?: boolean }
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
      bg: "rgba(5,5,7,0.1)",
      border: t.borderMuted,
      text: t.textMuted,
    },
    Error: {
      bg: "rgba(255,77,94,0.1)",
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

type ButtonVariant = "primary" | "secondary" | "outline" | "text"

function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  className = "",
}: {
  label: string
  onClick?: () => void
  variant?: ButtonVariant
  disabled?: boolean
  type?: "button" | "submit"
  className?: string
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ds-btn ds-btn-${variant} shrink-0 ${className}`}
    >
      {label}
    </button>
  )
}

function PrimaryButton({
  label,
  onClick,
  onCta,
  disabled,
}: {
  label: string
  onClick?: () => void
  onCta?: () => void
  disabled?: boolean
}) {
  return <Button label={label} onClick={onClick ?? onCta} variant="primary" disabled={disabled} />
}

function SecondaryButton({
  label,
  onClick,
  disabled,
}: {
  label: string
  onClick?: () => void
  disabled?: boolean
}) {
  return <Button label={label} onClick={onClick} variant="secondary" disabled={disabled} />
}

function DestructiveButton({
  label,
  onClick,
  disabled,
}: {
  label: string
  onClick?: () => void
  disabled?: boolean
}) {
  return <Button label={label} onClick={onClick} variant="primary" disabled={disabled} />
}

function OutlineButton({
  label,
  onClick,
  disabled,
}: {
  label: string
  onClick?: () => void
  disabled?: boolean
}) {
  return <Button label={label} onClick={onClick} variant="outline" disabled={disabled} />
}

function TextButton({
  label,
  onClick,
  disabled,
}: {
  label: string
  onClick?: () => void
  disabled?: boolean
}) {
  return <Button label={label} onClick={onClick} variant="text" disabled={disabled} />
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
        <h1
          className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[28px] m-0"
          style={{ color: t.textPrimary }}
        >
          {title}
        </h1>
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

// ─── Create Island modal ────────────────────────────────────────────────────

function IcClose() {
  const { t } = useT()
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.8793 9.60795C15.9652 9.52788 16.0344 9.43168 16.0831 9.32484C16.1318 9.218 16.159 9.10261 16.1631 8.98526C16.1672 8.86791 16.1482 8.75091 16.1071 8.64092C16.066 8.53093 16.0036 8.43012 15.9235 8.34424C15.8435 8.25835 15.7472 8.18908 15.6404 8.14038C15.5336 8.09168 15.4182 8.06449 15.3008 8.06038C15.1835 8.05627 15.0665 8.07532 14.9565 8.11643C14.8465 8.15754 14.7457 8.21991 14.6598 8.29998L12.0439 10.7389L9.60493 8.12207C9.44174 7.95492 9.21961 7.85829 8.98608 7.85284C8.75254 7.8474 8.52615 7.93357 8.35534 8.09293C8.18454 8.25228 8.08289 8.47216 8.07214 8.70551C8.0614 8.93886 8.14241 9.16715 8.29785 9.34153L10.7368 11.9575L8.11994 14.3964C8.03102 14.4757 7.95884 14.5719 7.90763 14.6794C7.85643 14.787 7.82723 14.9037 7.82175 15.0227C7.81627 15.1417 7.83462 15.2605 7.87573 15.3723C7.91684 15.4841 7.97987 15.5866 8.06113 15.6737C8.14238 15.7608 8.24023 15.8307 8.34891 15.8795C8.45758 15.9283 8.57491 15.9548 8.69399 15.9576C8.81307 15.9604 8.93151 15.9393 9.04234 15.8957C9.15318 15.852 9.25417 15.7867 9.3394 15.7035L11.9553 13.2655L14.3943 15.8814C14.473 15.972 14.5692 16.0457 14.6771 16.0983C14.7849 16.1509 14.9023 16.1813 15.0221 16.1875C15.142 16.1938 15.2619 16.1759 15.3746 16.1349C15.4874 16.0938 15.5908 16.0305 15.6786 15.9487C15.7663 15.8668 15.8367 15.7682 15.8856 15.6585C15.9344 15.5489 15.9607 15.4306 15.9628 15.3106C15.9649 15.1906 15.9429 15.0714 15.898 14.9601C15.853 14.8488 15.7862 14.7477 15.7014 14.6628L13.2633 12.0469L15.8793 9.60795Z"
        fill={t.textPrimary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.78979 12C1.78979 6.36114 6.3612 1.78973 12 1.78973C17.6389 1.78973 22.2103 6.36114 22.2103 12C22.2103 17.6388 17.6389 22.2102 12 22.2102C6.3612 22.2102 1.78979 17.6388 1.78979 12ZM12 21C10.8181 21 9.64782 20.7672 8.55589 20.3149C7.46396 19.8626 6.47181 19.1997 5.63608 18.3639C4.80035 17.5282 4.13742 16.5361 3.68512 15.4441C3.23283 14.3522 3.00004 13.1819 3.00004 12C3.00004 10.8181 3.23283 9.64776 3.68512 8.55583C4.13742 7.4639 4.80035 6.47174 5.63608 5.63602C6.47181 4.80029 7.46396 4.13735 8.55589 3.68506C9.64782 3.23277 10.8181 2.99998 12 2.99998C14.387 2.99998 16.6762 3.94819 18.364 5.63602C20.0518 7.32384 21 9.61303 21 12C21 14.3869 20.0518 16.6761 18.364 18.3639C16.6762 20.0518 14.387 21 12 21Z"
        fill={t.textPrimary}
      />
    </svg>
  )
}

function IcInfo() {
  const { t } = useT()
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" stroke={t.accentOrange} strokeWidth="1.5" />
      <circle cx="12" cy="8" r="1.15" fill={t.accentOrange} />
      <rect x="11.1" y="10.8" width="1.8" height="6.4" rx="0.9" fill={t.accentOrange} />
    </svg>
  )
}

const ISLAND_SLUG_PREFIX = "audibkk-hexagon1-"

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function CreateIslandModal({
  onClose,
  onCreate,
}: {
  onClose: () => void
  onCreate: (name: string) => void
}) {
  const { t } = useT()
  const [name, setName] = useState("Plaza_BKK")
  const slug = ISLAND_SLUG_PREFIX + slugify(name)
  const canCreate = name.trim().length > 0
  const { ref, titleId } = useModalA11y(onClose)
  const islandNameId = useId()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] w-full max-w-[480px] flex flex-col gap-[24px] p-[24px]`}
        style={{ background: t.bgCard, border: `1px solid ${t.borderSubtle}`, boxShadow: t.shadowHeavy }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full">
          <p
            id={titleId}
            className="font-['Exo_2:Medium',sans-serif] font-medium leading-[23px] text-[20px]"
            style={{ color: t.textPrimary }}
          >
            Create Island
          </p>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex items-center justify-center size-[44px] -m-[10px]"
          >
            <IcClose />
          </button>
        </div>

        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col gap-[4px] w-full">
            <label
              htmlFor={islandNameId}
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]"
              style={{ color: t.textMuted }}
            >
              Island name
            </label>
            <div
              className={`rounded-[${R.md}] p-[12px] w-full`}
              style={{ background: t.bgInput, border: `1px solid ${t.borderMuted}` }}
            >
              <input
                id={islandNameId}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent outline-none focus-visible:ring-2 font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: t.textPrimary }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[4px] w-full">
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]"
              style={{ color: t.textPlaceholder }}
            >
              Island Slug
            </p>
            <div
              className={`rounded-[${R.md}] p-[12px] w-full`}
              style={{ background: t.borderMuted, border: `1px solid ${t.borderSubtle}` }}
            >
              <p
                className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] truncate"
                style={{ color: t.textMuted }}
              >
                {slug}
              </p>
            </div>
            <p
              className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] text-[12px] text-right w-full"
              style={{ color: t.accentCyan }}
            >
              Auto-Generated
            </p>
          </div>

          <div className="flex flex-col gap-[8px] w-full">
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] whitespace-nowrap"
              style={{ color: t.textMuted }}
            >
              Client Organization
            </p>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-label="Client Organization: Muster Systems Inc."
              className={`flex items-center justify-between px-[16px] py-[13px] rounded-[${R.sm}] w-full`}
              style={{ background: t.bgSurface, border: `1px solid ${t.borderSubtle}` }}
            >
              <p
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: t.textPrimary }}
              >
                Muster Systems Inc.
              </p>
              <IcChevronDown />
            </button>
          </div>
        </div>

        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <PrimaryButton label="Create Island" onClick={() => onCreate(name)} disabled={!canCreate} />
        </div>
      </div>
    </div>
  )
}

function ArchiveConfirmDialog({
  islandName,
  onClose,
  onConfirm,
}: {
  islandName: string
  onClose: () => void
  onConfirm: () => void
}) {
  const { t } = useT()
  const { ref, titleId } = useModalA11y(onClose)
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] w-full max-w-[480px] flex flex-col gap-[24px] p-[24px]`}
        style={{ background: t.bgCard, border: `1px solid ${t.borderSubtle}`, boxShadow: t.shadowHeavy }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-[12px] w-full">
          <IcInfo />
          <p
            id={titleId}
            className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[28px] text-[20px]"
            style={{ color: t.textPrimary }}
          >
            Archive Island
          </p>
        </div>
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] w-full"
          style={{ color: t.textMuted }}
        >
          {"Are you sure you want to archive "}
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold" style={{ color: t.textPrimary }}>
            {islandName}
          </span>
          {"? This action will revoke active public user access keys and move the configuration to read-only status."}
        </p>
        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <DestructiveButton label="Archive" onClick={onConfirm} />
        </div>
      </div>
    </div>
  )
}

function DeleteConfirmDialog({
  islandName,
  onClose,
  onConfirm,
}: {
  islandName: string
  onClose: () => void
  onConfirm: () => void
}) {
  const { t } = useT()
  const { ref, titleId } = useModalA11y(onClose)
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] w-full max-w-[480px] flex flex-col gap-[24px] p-[24px]`}
        style={{ background: t.bgCard, border: `1px solid ${t.borderSubtle}`, boxShadow: t.shadowHeavy }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-[12px] w-full">
          <IcInfo />
          <p
            id={titleId}
            className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[28px] text-[20px]"
            style={{ color: t.textPrimary }}
          >
            Delete Island
          </p>
        </div>
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] w-full"
          style={{ color: t.textMuted }}
        >
          {"Are you sure you want to delete "}
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold" style={{ color: t.textPrimary }}>
            {islandName}
          </span>
          {"? This action cannot be undone and will permanently remove this island."}
        </p>
        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <DestructiveButton label="Delete" onClick={onConfirm} />
        </div>
      </div>
    </div>
  )
}

function DeactivateAccountConfirmDialog({
  userName,
  onClose,
  onConfirm,
}: {
  userName: string
  onClose: () => void
  onConfirm: () => void
}) {
  const { t } = useT()
  const { ref, titleId } = useModalA11y(onClose)
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] w-full max-w-[480px] flex flex-col gap-[24px] p-[24px]`}
        style={{ background: t.bgCard, border: `1px solid ${t.borderSubtle}`, boxShadow: t.shadowHeavy }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-[12px] w-full">
          <IcInfo />
          <p
            id={titleId}
            className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[28px] text-[20px]"
            style={{ color: t.textPrimary }}
          >
            Deactivate account
          </p>
        </div>
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] w-full"
          style={{ color: t.textMuted }}
        >
          {"Are you sure you want to deactivate "}
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold" style={{ color: t.textPrimary }}>
            {userName}
          </span>
          {"'s account? They will immediately lose access until the account is reactivated."}
        </p>
        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <DestructiveButton label="Deactivate" onClick={onConfirm} />
        </div>
      </div>
    </div>
  )
}

function IcCloudUpload() {
  const { t } = useT()
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M9.5 24C6.46 24 4 21.54 4 18.5C4 15.7 6.1 13.38 8.82 13.04C9.52 9.98 12.3 7.75 15.5 7.75C19 7.75 21.9 10.28 22.42 13.62C24.7 14.02 26.5 16.02 26.5 18.4C26.5 21.03 24.36 23.17 21.73 23.17"
        stroke={t.textMuted}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 27V17.5M16 17.5L12.5 21M16 17.5L19.5 21"
        stroke={t.accentOrange}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RadioDot({ selected }: { selected: boolean }) {
  const { t } = useT()
  if (!selected) {
    return (
      <div
        className="relative shrink-0 size-[16px] rounded-full"
        style={{ border: `1.5px solid ${t.textPlaceholder}` }}
      />
    )
  }
  return (
    <div
      className="relative shrink-0 size-[16px] rounded-full flex items-center justify-center"
      style={{ border: `1.5px solid ${t.accentPurple}` }}
    >
      <div className="rounded-full size-[8px]" style={{ background: t.accentPurple }} />
    </div>
  )
}

const CONTENT_TABS = [
  "Video / Stream",
  "Audio / Sound",
  "3D Model (.GLB)",
  "Document / HTML",
] as const

function UploadContentModal({
  title,
  onClose,
  onSave,
}: {
  title: string
  onClose: () => void
  onSave: () => void
}) {
  const { t } = useT()
  const [tab, setTab] = useState<(typeof CONTENT_TABS)[number]>("Video / Stream")
  const [source, setSource] = useState<"file" | "stream">("file")
  const [name, setName] = useState(title)
  const [location, setLocation] = useState("")
  const [streamUrl, setStreamUrl] = useState("")
  const [description, setDescription] = useState(
    "Introduction media displayed during the initial user walkthrough"
  )
  const { ref, titleId } = useModalA11y(onClose)
  const streamUrlId = useId()
  const contentTitleId = useId()
  const spaceSelectId = useId()
  const descriptionId = useId()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] flex flex-col items-start overflow-y-auto max-h-[90vh]`}
        style={{
          boxSizing: "border-box",
          width: 571,
          maxWidth: "100%",
          height: 870,
          padding: "20px 24px",
          gap: 20,
          background: "#14141F",
          border: "1px solid #2A2A38",
          boxShadow: t.shadowHeavy,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex items-center justify-between w-full">
            <p
              id={titleId}
              className="font-['Exo_2:Medium',sans-serif] font-medium leading-[23px] text-[20px]"
              style={{ color: t.textPrimary }}
            >
              Upload &amp; Create Content
            </p>
            <button onClick={onClose} aria-label="Close" className="flex items-center justify-center size-[44px] -m-[10px]">
              <IcClose />
            </button>
          </div>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]"
            style={{ color: t.textMuted }}
          >
            Add media assets, 3D models, or live streams for virtual spaces
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Content type"
          className="flex gap-[4px] items-start px-[12px] py-[4px] rounded-[10px] w-full"
          style={{ background: t.bgInput, border: `1px solid ${t.borderSubtle}` }}
        >
          {CONTENT_TABS.map((tabName) => (
            <button
              key={tabName}
              role="tab"
              aria-selected={tab === tabName}
              onClick={() => setTab(tabName)}
              className="flex-[1_0_0] min-w-0 px-[16px] py-[8px] rounded-[6px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[13.8px] whitespace-nowrap transition-colors"
              style={{
                background: tab === tabName ? t.accentPurple : "transparent",
                color: tab === tabName ? "#141414" : t.textMuted,
              }}
            >
              {tabName}
            </button>
          ))}
        </div>

        <div role="radiogroup" aria-label="Content source" className="flex gap-[24px] items-center w-full flex-wrap">
          <button role="radio" aria-checked={source === "file"} className="flex gap-[8px] items-center" onClick={() => setSource("file")}>
            <RadioDot selected={source === "file"} />
            <p
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px]"
              style={{ color: source === "file" ? t.textPrimary : t.textMuted }}
            >
              File Upload
            </p>
          </button>
          <button role="radio" aria-checked={source === "stream"} className="flex gap-[8px] items-center" onClick={() => setSource("stream")}>
            <RadioDot selected={source === "stream"} />
            <p
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px]"
              style={{ color: source === "stream" ? t.textPrimary : t.textMuted }}
            >
              Live Stream URL / Sandboxed HTML Feed
            </p>
          </button>
        </div>

        {source === "file" ? (
          <div
            className="flex flex-col gap-[12px] items-center justify-center px-[24px] py-[12px] rounded-[16px] w-full"
            style={{ background: "#141414", border: `1px dashed ${t.borderMuted}` }}
          >
            <IcCloudUpload />
            <p
              className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[24px] text-center"
              style={{ color: t.textMuted }}
            >
              {"Drag & drop your file or "}
              <span className="underline" style={{ color: t.accentOrange }}>
                Browse
              </span>
            </p>
            <p
              className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[14px] text-center"
              style={{ color: t.textMuted }}
            >
              Supports MP4, MOV, GLB, PDF, PPTX
              <br />
              (PDF/PPT automatically converts to slide sequence)
            </p>
          </div>
        ) : (
          <div
            className="flex flex-col items-start p-[24px] rounded-[16px] w-full"
            style={{ background: "#141414", border: `1px dashed ${t.borderMuted}` }}
          >
            <div className="flex flex-col gap-[4px] w-full">
              <label
                htmlFor={streamUrlId}
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: t.textMuted }}
              >
                Insert link
              </label>
              <div
                className={`rounded-[${R.md}] p-[12px] w-full`}
                style={{ background: t.bgInput, border: "1px solid #727272" }}
              >
                <input
                  id={streamUrlId}
                  type="url"
                  value={streamUrl}
                  onChange={(e) => setStreamUrl(e.target.value)}
                  placeholder="e.g. https://example.com"
                  className="w-full bg-transparent outline-none focus-visible:ring-2 font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                  style={{ color: t.textPrimary }}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-[6px] w-full">
          <div
            className="h-[4px] rounded-[2px] w-full overflow-hidden"
            style={{ background: t.borderSubtle }}
          >
            <div className="h-full" style={{ width: "78%", background: t.accentCyan }} />
          </div>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[normal]"
            style={{ color: t.textMuted }}
          >
            Uploading... 78% (122 MB / 156 MB)
          </p>
        </div>

        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex flex-col gap-[4px] w-full">
            <label
              htmlFor={contentTitleId}
              className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
              style={{ color: t.textMuted }}
            >
              Title
            </label>
            <div
              className={`rounded-[${R.md}] p-[12px] w-full`}
              style={{ background: t.bgInput, border: "1px solid #727272" }}
            >
              <input
                id={contentTitleId}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent outline-none focus-visible:ring-2 font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: t.textPrimary }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-full">
            <label htmlFor={spaceSelectId} className="sr-only">
              Select space
            </label>
            <div
              className={`rounded-[${R.md}] p-[12px] w-full flex items-center justify-between gap-[4px]`}
              style={{ background: t.bgInput, border: "1px solid #727272" }}
            >
              <select
                id={spaceSelectId}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 min-w-0 bg-transparent outline-none focus-visible:ring-2 appearance-none font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: location ? t.textPrimary : t.textPlaceholder }}
              >
                <option value="" disabled hidden>
                  Select space
                </option>
                <option value="LobbyRoom">LobbyRoom</option>
                <option value="MainEntrance">Main Entrance</option>
                <option value="Auditorium">Auditorium</option>
              </select>
              <IcChevronDown />
            </div>
          </div>
          <div className="flex flex-col gap-[4px] w-full">
            <label
              htmlFor={descriptionId}
              className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
              style={{ color: t.textMuted }}
            >
              Description
            </label>
            <div
              className={`rounded-[${R.md}] p-[12px] w-full`}
              style={{ background: t.bgInput, border: "1px solid #727272" }}
            >
              <textarea
                id={descriptionId}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="w-full bg-transparent outline-none focus-visible:ring-2 resize-none font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: t.textPrimary }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <DestructiveButton
            label="Create Content"
            onClick={() => {
              onSave()
              onClose()
            }}
          />
        </div>
      </div>
    </div>
  )
}

function DeleteContentConfirmDialog({
  onClose,
  onConfirm,
}: {
  onClose: () => void
  onConfirm: () => void
}) {
  const { t } = useT()
  const { ref, titleId } = useModalA11y(onClose)
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] w-full max-w-[480px] flex flex-col gap-[24px] p-[24px]`}
        style={{ background: t.bgCard, border: `1px solid ${t.borderSubtle}`, boxShadow: t.shadowHeavy }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-[12px] w-full">
          <IcInfo />
          <p
            id={titleId}
            className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[28px] text-[20px]"
            style={{ color: t.textPrimary }}
          >
            Delete Content
          </p>
        </div>
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] w-full"
          style={{ color: t.textMuted }}
        >
          {"Are you sure you want to "}
          <span className="font-['Inter:Bold',sans-serif] font-bold" style={{ color: t.textMuted }}>
            delete
          </span>
          {" this content? This action cannot be undone and will remove the asset from all islands where it is currently used."}
        </p>
        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <DestructiveButton label="Delete" onClick={onConfirm} />
        </div>
      </div>
    </div>
  )
}

// ─── Shared modal bits: org selector, role segmented control, checkboxes ───

function OrgSelectField({ value, label }: { value: string; label: string }) {
  const { t } = useT()
  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-label={`${label}: ${value}`}
      className="flex items-center justify-between px-[16px] py-[13px] rounded-[4px] w-full"
      style={{ background: t.bgSurface, border: `1px solid ${t.borderSubtle}` }}
    >
      <p
        className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
        style={{ color: t.textPrimary }}
      >
        {value}
      </p>
      <IcChevronDown />
    </button>
  )
}

const ROLE_OPTIONS: UserRole[] = ["Admin", "Editor", "Viewer"]

function RoleSegmentedControl({
  value,
  onChange,
}: {
  value: UserRole
  onChange: (r: UserRole) => void
}) {
  const { t } = useT()
  return (
    <div
      className="flex items-center gap-[4px] px-[4px] py-[4px] rounded-[10px] w-full"
      style={{ background: t.bgInput, border: `1px solid ${t.borderSubtle}` }}
    >
      {ROLE_OPTIONS.map((role) => (
        <button
          key={role}
          onClick={() => onChange(role)}
          className="flex-[1_0_0] min-w-0 px-[16px] py-[8px] rounded-[6px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[13.8px] whitespace-nowrap transition-colors"
          style={{
            background: value === role ? t.accentPurple : "transparent",
            color: value === role ? "#141414" : t.textMuted,
          }}
        >
          {role}
        </button>
      ))}
    </div>
  )
}

function IcCheckbox({ checked }: { checked: boolean }) {
  const { t } = useT()
  if (!checked) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
        <rect x="1" y="1" width="16" height="16" rx="4" stroke={t.iconMuted} strokeWidth="1.5" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <rect x="1" y="1" width="16" height="16" rx="4" stroke={t.accentCyan} strokeWidth="1.5" />
      <path d="M4.5 9.2L7.2 12L13.5 5.5" stroke={t.accentOrange} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IcCheckCircle() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="shrink-0" aria-hidden="true">
      <circle cx="15" cy="15" r="15" fill="#892CA3" />
      <path d="M9 15.5L13 19.5L21 10.5" stroke="#FDFDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Modal: Edit Permissions ────────────────────────────────────────────────

function EditPermissionsModal({
  row,
  onClose,
  onSave,
}: {
  row: AccountRow
  onClose: () => void
  onSave: (role: UserRole) => void
}) {
  const { t } = useT()
  const [role, setRole] = useState<UserRole>(row.role)
  const [perms, setPerms] = useState({
    manageContent: true,
    inviteUsers: false,
    deleteIslands: false,
  })
  const { ref, titleId } = useModalA11y(onClose)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] w-full max-w-[520px] flex flex-col gap-[24px] p-[24px]`}
        style={{ background: t.bgCard, border: `1px solid ${t.borderSubtle}`, boxShadow: t.shadowHeavy }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full">
          <p id={titleId} className="font-['Exo_2:Medium',sans-serif] font-medium leading-[23px] text-[20px]" style={{ color: t.textPrimary }}>
            Edit Permissions
          </p>
          <button onClick={onClose} aria-label="Close" className="flex items-center justify-center size-[44px] -m-[10px]">
            <IcClose />
          </button>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[12px]">
            <UserAvatar initials={row.initials} />
            <div>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px]" style={{ color: t.textPrimary }}>
                {row.name}
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px]" style={{ color: t.textMuted }}>
                {row.email}
              </p>
            </div>
          </div>
          <RoleBadge role={role} />
        </div>

        <div className="h-px w-full" style={{ background: t.borderSubtle }} />

        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col gap-[4px] w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]" style={{ color: t.textMuted }}>
              Client Organization
            </p>
            <OrgSelectField value={row.org} label="Client Organization" />
          </div>

          <div className="flex flex-col gap-[4px] w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]" style={{ color: t.textMuted }}>
              Role Assignment *
            </p>
            <RoleSegmentedControl value={role} onChange={setRole} />
          </div>

          <div className="flex flex-col gap-[12px] w-full">
            {[
              { key: "manageContent" as const, label: "Can manage content" },
              { key: "inviteUsers" as const, label: "Can invite users" },
              { key: "deleteIslands" as const, label: "Can delete islands" },
            ].map((p) => (
              <button
                key={p.key}
                role="checkbox"
                aria-checked={perms[p.key]}
                onClick={() => setPerms((prev) => ({ ...prev, [p.key]: !prev[p.key] }))}
                className="flex items-center gap-[10px] w-full text-left"
              >
                <IcCheckbox checked={perms[p.key]} />
                <span
                  className="font-['Inter:Medium',sans-serif] font-medium text-[13px]"
                  style={{ color: perms[p.key] ? t.textPrimary : t.textMuted }}
                >
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <PrimaryButton label="Save changes" onClick={() => onSave(role)} />
        </div>
      </div>
    </div>
  )
}

// ─── Modal: Invite New User ─────────────────────────────────────────────────

function InviteUserModal({
  onClose,
  onInvite,
}: {
  onClose: () => void
  onInvite: () => void
}) {
  const { t } = useT()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<UserRole>("Admin")
  const { ref, titleId } = useModalA11y(onClose)
  const fullNameId = useId()
  const emailId = useId()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[24px]"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative rounded-[${R.lg}] w-full max-w-[520px] flex flex-col gap-[24px] p-[24px]`}
        style={{ background: t.bgCard, border: `1px solid ${t.borderSubtle}`, boxShadow: t.shadowHeavy }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full">
          <p id={titleId} className="font-['Exo_2:Medium',sans-serif] font-medium leading-[23px] text-[20px]" style={{ color: t.textPrimary }}>
            Invite New User
          </p>
          <button onClick={onClose} aria-label="Close" className="flex items-center justify-center size-[44px] -m-[10px]">
            <IcClose />
          </button>
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col gap-[4px] w-full">
            <label htmlFor={fullNameId} className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]" style={{ color: t.textMuted }}>
              Full name *
            </label>
            <div className={`rounded-[${R.md}] p-[12px] w-full`} style={{ background: t.bgInput, border: `1px solid ${t.borderStrong}` }}>
              <input
                id={fullNameId}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Max Musterman"
                required
                aria-required="true"
                className="w-full bg-transparent outline-none focus-visible:ring-2 font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: t.textPrimary }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[4px] w-full">
            <label htmlFor={emailId} className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]" style={{ color: t.textMuted }}>
              Email Address *
            </label>
            <div className={`rounded-[${R.md}] p-[12px] w-full`} style={{ background: t.bgInput, border: `1px solid ${t.borderStrong}` }}>
              <input
                id={emailId}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@company.com"
                required
                aria-required="true"
                className="w-full bg-transparent outline-none focus-visible:ring-2 font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px]"
                style={{ color: t.textPrimary }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[4px] w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] whitespace-nowrap" style={{ color: t.textMuted }}>
              Client Organization
            </p>
            <OrgSelectField value="Muster Systems Inc." label="Client Organization" />
          </div>

          <div className="flex flex-col gap-[4px] w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px]" style={{ color: t.textMuted }}>
              Role Assignment *
            </p>
            <RoleSegmentedControl value={role} onChange={setRole} />
          </div>
        </div>

        <div className="flex items-end justify-end gap-[16px] w-full">
          <SecondaryButton label="Cancel" onClick={onClose} />
          <PrimaryButton
            label="Send invite"
            onClick={fullName.trim() && email.trim() ? onInvite : undefined}
          />
        </div>
      </div>
    </div>
  )
}

// ─── Toast notification ─────────────────────────────────────────────────────

function ToastNotification({
  message,
  onDismiss,
}: {
  message: string
  onDismiss: () => void
}) {
  const { t } = useT()
  useEffect(() => {
    const id = setTimeout(onDismiss, 4000)
    return () => clearTimeout(id)
  }, [onDismiss])

  return (
    <div className="fixed bottom-[24px] right-[24px] z-50" role="status" aria-live="polite">
      <div
        className="flex items-center gap-[12px] p-[16px] rounded-[16px]"
        style={{
          background: t.bgCard,
          border: `1px solid ${t.borderSubtle}`,
          boxShadow: "0 8px 12px rgba(0,0,0,0.5)",
        }}
      >
        <IcCheckCircle />
        <p
          className="font-['Inter:Regular',sans-serif] font-normal text-[14px] whitespace-nowrap"
          style={{ color: t.textPrimary }}
        >
          {message}
        </p>
      </div>
    </div>
  )
}

// ─── Empty-state illustration ──────────────────────────────────────────────

function AccentHexagonIllustration() {
  const { t } = useT()
  return (
    <div className="flex h-[100px] items-center justify-center relative rounded-[8px] shrink-0 w-[160px]">
      <div className="relative shrink-0 size-[30px]">
        <svg className="block size-full" fill="none" viewBox="0 0 30 30">
          <path
            d="M11.9082 2.24023C13.8372 1.19726 16.1628 1.19726 18.0918 2.24023L21.3438 3.99805L24.5049 5.94238C26.3725 7.09142 27.5353 9.10494 27.5967 11.2969L27.6992 15L27.5967 18.7031C27.5353 20.8951 26.3725 22.9086 24.5049 24.0576L21.3438 26.001L18.0918 27.7598C16.1628 28.8027 13.8372 28.8027 11.9082 27.7598L8.65527 26.001L5.49512 24.0576C3.62746 22.9086 2.4647 20.8951 2.40332 18.7031L2.2998 15L2.40332 11.2969C2.4647 9.10494 3.62746 7.09142 5.49512 5.94238L8.65527 3.99805L11.9082 2.24023Z"
            stroke={t.accentCyan}
          />
          <path
            d="M11.9082 5.24023C13.8372 4.19726 16.1628 4.19726 18.0918 5.24023L20.0361 6.29199L21.9072 7.44238C23.7748 8.59144 24.9367 10.605 24.998 12.7969L25.0596 15L24.998 17.2031C24.9367 19.395 23.7748 21.4086 21.9072 22.5576L20.0361 23.707L18.0918 24.7598C16.1628 25.8027 13.8372 25.8027 11.9082 24.7598L9.96289 23.707L8.09277 22.5576C6.22524 21.4086 5.06333 19.395 5.00195 17.2031L4.93945 15L5.00195 12.7969C5.06333 10.605 6.22524 8.59144 8.09277 7.44238L9.96289 6.29199L11.9082 5.24023Z"
            stroke={t.accentCyan}
          />
          <path
            d="M11.9082 8.24023C13.8372 7.19726 16.1628 7.19726 18.0918 8.24023L18.7041 8.57129L19.3086 8.94238C21.1763 10.0914 22.339 12.1049 22.4004 14.2969L22.4189 15L22.4004 15.7031C22.339 17.8951 21.1763 19.9086 19.3086 21.0576L18.7041 21.4277L18.0918 21.7598C16.1628 22.8027 13.8372 22.8027 11.9082 21.7598L11.2949 21.4277L10.6914 21.0576C8.82375 19.9086 7.66099 17.8951 7.59961 15.7031L7.58008 15L7.59961 14.2969C7.66099 12.1049 8.82375 10.0914 10.6914 8.94238L11.2949 8.57129L11.9082 8.24023Z"
            stroke={t.accentCyan}
          />
        </svg>
      </div>
    </div>
  )
}

// ─── SCREEN: Empty Islands ─────────────────────────────────────────────────

function IslandsEmptyState({ onCreateIsland }: { onCreateIsland?: () => void }) {
  const { t } = useT()
  return (
    <div
      className="flex flex-1 flex-col gap-[24px] items-center justify-center min-h-px p-[80px] relative rounded-[16px] w-full"
      style={{ background: t.bgCard }}
    >
      <div
        className="absolute inset-0 rounded-[16px] pointer-events-none"
        style={{ border: "1px dashed rgba(67,67,67,0.13)" }}
      />
      <AccentHexagonIllustration />
      <div className="flex flex-col gap-[8px] items-center text-center">
        <p
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[20px]"
          style={{ color: t.textPrimary }}
        >
          No islands yet
        </p>
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] max-w-[420px]"
          style={{ color: t.textMuted }}
        >
          Create your first island to start deploying spatial environments
        </p>
      </div>
      <PrimaryButton label="+ Create Island" onClick={onCreateIsland} />
    </div>
  )
}

function EmptyIslandsScreen({
  onNav,
  onCreateIsland,
}: {
  onNav: (s: NavSection) => void
  onCreateIsland?: () => void
}) {
  const { t } = useT()
  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div role="main" className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <PageHeader
          title="Islands"
          subtitle="Deploy and monitor enterprise spatial environments"
          cta="+ Create Island"
          onCta={onCreateIsland}
        />
        <Toolbar
          placeholder="Search by island's name"
          showGridToggle
          viewMode="grid"
        />
        <IslandsEmptyState onCreateIsland={onCreateIsland} />
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
      <div role="main" className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <PageHeader
          title="Content"
          subtitle="Manage media assets, 3D models and interactive blocks"
          cta="+ Create content"
        />
        <Toolbar placeholder="Search by content's name" />
        <div
          className="flex flex-1 flex-col gap-[24px] items-center justify-center min-h-px p-[80px] relative rounded-[16px] w-full"
          style={{ background: t.bgCard }}
        >
          <div
            className="absolute inset-0 rounded-[16px] pointer-events-none"
            style={{ border: "1px dashed rgba(67,67,67,0.13)" }}
          />
          <AccentHexagonIllustration />
          <div className="flex flex-col gap-[8px] items-center text-center">
            <p
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[20px]"
              style={{ color: t.textPrimary }}
            >
              No content yet
            </p>
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] max-w-[420px]"
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
type CardData = {
  name: string
  slug: string
  version: string
  status: CardStatus
  dim?: boolean
}
const CARD_DATA: CardData[] = [
  { name: "Muster Plaza", slug: "audibkk-hexagon1-plaza", version: "1.0.2", status: "Published" },
  { name: "Muster Plaza", slug: "audibkk-hexagon1-plaza", version: "1.0.2", status: "Draft" },
  { name: "Muster Plaza", slug: "audibkk-hexagon1-plaza", version: "1.0.2", status: "Archived", dim: true },
  { name: "Muster Plaza", slug: "audibkk-hexagon1-plaza", version: "1.0.2", status: "Published" },
  { name: "Muster Plaza", slug: "audibkk-hexagon1-plaza", version: "1.0.2", status: "Draft" },
  { name: "Muster Plaza", slug: "audibkk-hexagon1-plaza", version: "1.0.2", status: "Archived", dim: true },
]

function IslandCard({
  imgUrl,
  name,
  slug,
  version,
  status,
  dim,
  menuOpen,
  onMenuClick,
  onLinkContent,
  onUnpublish,
  onArchive,
  onDelete,
}: {
  imgUrl: string
  name: string
  slug: string
  version: string
  status: CardStatus
  dim?: boolean
  menuOpen: boolean
  onMenuClick: () => void
  onLinkContent?: () => void
  onUnpublish?: () => void
  onArchive?: () => void
  onDelete?: () => void
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
        {dim && <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />}
        <div className="absolute top-[10px] right-[10px] z-20">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMenuClick()
            }}
            aria-label={`More actions for ${name}`}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            className={`rounded-[${R.sm}] size-[40px] flex items-center justify-center transition-colors`}
            style={{ background: t.bgDropdown }}
          >
            <IcDots />
          </button>
          {menuOpen && (
            <div
              role="menu"
              aria-label={`Actions for ${name}`}
              className={`absolute right-0 top-[36px] w-[112px] rounded-[${R.sm}] overflow-hidden z-30`}
              style={{
                background: t.bgDropdown,
                border: `1px solid ${t.borderSubtle}`,
                boxShadow: "0 8px 8px rgba(0,0,0,0.25)",
              }}
            >
              {[
                { label: "Link content", action: onLinkContent, disabled: false },
                { label: "Unpublish", action: onUnpublish, disabled: status === "Draft" },
                { label: "Archive", action: onArchive, disabled: false },
              ].map((item) => (
                <button
                  key={item.label}
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => {
                    if (item.disabled) return
                    onMenuClick()
                    item.action?.()
                  }}
                  className="w-full text-left px-[10px] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] transition-colors"
                  style={{ color: item.disabled ? t.textMuted : t.accentOrange, opacity: item.disabled ? 0.6 : 1, cursor: item.disabled ? "not-allowed" : "pointer" }}
                >
                  {item.label}
                </button>
              ))}
              <div
                className="h-px mx-[10px]"
                style={{ background: t.borderSubtle }}
              />
              <div className="p-[8px]">
                <button
                  role="menuitem"
                  onClick={() => {
                    onMenuClick()
                    onDelete?.()
                  }}
                  className={`w-full text-center rounded-[${R.md}] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] transition-colors`}
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
            {name}
          </p>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px] truncate"
            style={{ color: t.textMuted }}
          >
            {slug}
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <StatusBadge status={status} />
          <p
            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px]"
            style={{ color: t.textMuted }}
          >
            Version {version}
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
  onCreateIsland,
  cards,
  setCards,
}: {
  onNav: (s: NavSection) => void
  onViewToggle?: () => void
  onLinkContent?: () => void
  onCreateIsland?: () => void
  cards: CardData[]
  setCards: Dispatch<SetStateAction<CardData[]>>
}) {
  const { t } = useT()
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [archiveIndex, setArchiveIndex] = useState<number | null>(null)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
      onClick={() => setOpenMenu(null)}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div role="main" className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch overflow-y-auto">
        <PageHeader
          title="Islands"
          subtitle="Deploy and monitor enterprise spatial environments"
          cta="+ Create Island"
          onCta={onCreateIsland}
        />
        <Toolbar
          placeholder="Search by island's name"
          showGridToggle
          viewMode="grid"
          onViewToggle={onViewToggle}
        />
        {cards.length === 0 ? (
          <IslandsEmptyState onCreateIsland={onCreateIsland} />
        ) : (
          <>
            <div className="grid grid-cols-4 gap-[24px] w-full">
              {cards.map((card, i) => (
                <IslandCard
                  key={i}
                  imgUrl={ISLAND_IMAGES[i % ISLAND_IMAGES.length]}
                  name={card.name}
                  slug={card.slug}
                  version={card.version}
                  status={card.status}
                  dim={card.dim}
                  menuOpen={openMenu === i}
                  onMenuClick={() => setOpenMenu(openMenu === i ? null : i)}
                  onLinkContent={onLinkContent}
                  onUnpublish={() => {
                    setOpenMenu(null)
                    setCards((prev) =>
                      prev.map((card, idx) =>
                        idx === i ? { ...card, status: "Draft", dim: false } : card
                      )
                    )
                  }}
                  onArchive={() => {
                    setOpenMenu(null)
                    setArchiveIndex(i)
                  }}
                  onDelete={() => {
                    setOpenMenu(null)
                    setDeleteIndex(i)
                  }}
                />
              ))}
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center gap-[8px] pt-[8px] pb-0 px-0 w-full h-full">
              {["‹", "1", "2", "3", "4", "....", "8", "›"].map((p, i) => {
                const isArrow = p === "‹" || p === "›"
                const size = isArrow ? 50 : 40
                const label =
                  p === "‹" ? "Previous page" : p === "›" ? "Next page" : p === "...." ? "More pages" : `Page ${p}`
                return (
                  <button
                    key={i}
                    aria-label={label}
                    aria-current={p === "1" ? "page" : undefined}
                    className="rounded-[6px] font-['Inter:Regular',sans-serif] font-normal text-[16px] flex items-center justify-center transition-colors"
                    style={{
                      width: size,
                      height: size,
                      background: p === "1" ? t.accentPurple : t.bgCard,
                      border: isArrow
                        ? "none"
                        : `1px solid ${p === "1" ? t.accentPurple : t.borderMuted}`,
                      color: p === "1" ? "#FDFDFF" : t.textMuted,
                    }}
                  >
                    <span aria-hidden="true">{p}</span>
                  </button>
                )
              })}
            </div>
          </>
        )}
      </div>
      {archiveIndex !== null && (
        <ArchiveConfirmDialog
          islandName={cards[archiveIndex]?.name ?? "Muster Plaza"}
          onClose={() => setArchiveIndex(null)}
          onConfirm={() => {
            setCards((prev) =>
              prev.map((card, i) =>
                i === archiveIndex ? { ...card, status: "Archived", dim: true } : card
              )
            )
            setArchiveIndex(null)
          }}
        />
      )}
      {deleteIndex !== null && (
        <DeleteConfirmDialog
          islandName={cards[deleteIndex]?.name ?? "Muster Plaza"}
          onClose={() => setDeleteIndex(null)}
          onConfirm={() => {
            setCards((prev) => prev.filter((_, i) => i !== deleteIndex))
            setDeleteIndex(null)
          }}
        />
      )}
    </div>
  )
}

// ─── SCREEN: Islands Table ─────────────────────────────────────────────────

function IslandsTableScreen({
  onNav,
  onViewToggle,
  onLinkContent,
  onCreateIsland,
  cards,
  setCards,
}: {
  onNav: (s: NavSection) => void
  onViewToggle?: () => void
  onLinkContent?: () => void
  onCreateIsland?: () => void
  cards: CardData[]
  setCards: Dispatch<SetStateAction<CardData[]>>
}) {
  const { t } = useT()
  const [hovered, setHovered] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [archiveIndex, setArchiveIndex] = useState<number | null>(null)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const actionCellRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div role="main" className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <PageHeader
          title="Islands"
          subtitle="Deploy and monitor enterprise spatial environments"
          cta="+ Create Island"
          onCta={onCreateIsland}
        />
        <Toolbar
          placeholder="Search by island's name"
          showGridToggle
          viewMode="table"
          onViewToggle={onViewToggle}
        />
        {cards.length === 0 ? (
          <IslandsEmptyState onCreateIsland={onCreateIsland} />
        ) : (
        <div className="flex items-stretch gap-[10px] w-full">
        <div
          className={`relative rounded-[${R.md}] flex-1 min-w-0 overflow-hidden`}
          style={{
            background: t.bgCard,
            boxShadow: t.shadowCard,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[237px_235px_520px_1fr]"
            style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
          >
            {["Name / Slug", "Status", "Version", "Actions"].map((h) => (
              <div key={h} className="px-[20px] py-[16px]">
                <p
                  className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px]"
                  style={{ color: t.textMuted }}
                >
                  {h}
                </p>
              </div>
            ))}
          </div>
          {cards.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[237px_235px_520px_1fr] transition-colors"
              style={{
                border: `1px solid ${t.borderMuted}`,
                borderTop: "none",
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
              <div
                ref={(el) => { actionCellRefs.current[i] = el }}
                className="px-[12px] py-[16px] flex items-center justify-center relative"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setMenuOpen(menuOpen === i ? null : i)
                  }}
                  aria-label={`More actions for ${row.name}`}
                  aria-haspopup="menu"
                  aria-expanded={menuOpen === i}
                  className="p-[12px] rounded-[6px] transition-colors"
                >
                  <IcDots />
                </button>
                {menuOpen === i && (
                  <ActionsMenuPortal
                    anchorEl={actionCellRefs.current[i]}
                    onClose={() => setMenuOpen(null)}
                    top={40}
                    right={12}
                    width={160}
                  >
                    <div
                      aria-label={`Actions for ${row.name}`}
                      className={`w-[160px] rounded-[${R.md}] overflow-hidden`}
                      style={{
                        background: t.bgDropdown,
                        border: `1px solid ${t.borderSubtle}`,
                        boxShadow: t.shadowHeavy,
                      }}
                    >
                      {[
                        { label: "Link content", action: onLinkContent, disabled: false },
                        {
                          label: "Unpublish",
                          action: () => {
                            setCards((prev) =>
                              prev.map((card, idx) =>
                                idx === i ? { ...card, status: "Draft", dim: false } : card
                              )
                            )
                          },
                          disabled: row.status === "Draft",
                        },
                        {
                          label: "Archive",
                          action: () => setArchiveIndex(i),
                          disabled: false,
                        },
                      ].map((item) => (
                        <button
                          key={item.label}
                          role="menuitem"
                          disabled={item.disabled}
                          onClick={() => {
                            if (item.disabled) return
                            setMenuOpen(null)
                            item.action?.()
                          }}
                          className="w-full text-left px-[14px] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[14px] transition-colors"
                          style={{ color: item.disabled ? t.textMuted : t.accentOrange, opacity: item.disabled ? 0.6 : 1, cursor: item.disabled ? "not-allowed" : "pointer" }}
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
                          role="menuitem"
                          onClick={() => {
                            setMenuOpen(null)
                            setDeleteIndex(i)
                          }}
                          className={`w-full text-center rounded-[${R.md}] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[14px] transition-colors`}
                          style={{ background: t.accentOrange, color: "#141414" }}
                        >
                          Delete Island
                        </button>
                      </div>
                    </div>
                  </ActionsMenuPortal>
                )}
              </div>
            </div>
          ))}
        </div>
        <ScrollSlider />
        </div>
        )}
      </div>
      {archiveIndex !== null && (
        <ArchiveConfirmDialog
          islandName={cards[archiveIndex]?.name ?? "Muster Plaza"}
          onClose={() => setArchiveIndex(null)}
          onConfirm={() => {
            setCards((prev) =>
              prev.map((card, i) =>
                i === archiveIndex ? { ...card, status: "Archived", dim: true } : card
              )
            )
            setArchiveIndex(null)
          }}
        />
      )}
      {deleteIndex !== null && (
        <DeleteConfirmDialog
          islandName={cards[deleteIndex]?.name ?? "Muster Plaza"}
          onClose={() => setDeleteIndex(null)}
          onConfirm={() => {
            setCards((prev) => prev.filter((_, i) => i !== deleteIndex))
            setDeleteIndex(null)
          }}
        />
      )}
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

function ScrollSlider() {
  const { t } = useT()
  return (
    <div className="relative self-stretch shrink-0 w-[24px]" data-name="Sld_Base">
      <div
        className="-translate-x-1/2 absolute bottom-0 left-1/2 rounded-[2px] top-0"
        style={{
          width: 4,
          background: t.borderSubtle,
          boxShadow: "0px 2px 2.5px rgba(0,0,0,0.25)",
        }}
        data-name="Sld_Track"
      />
      <div
        className="-translate-x-1/2 absolute left-1/2 rounded-[2px]"
        style={{ top: 10, width: 4, height: 40, background: t.accentCyan }}
        data-name="Sld_ActiveTrack"
      />
      <div
        className="-translate-x-1/2 absolute left-1/2"
        style={{ top: 0, width: 20, height: 20 }}
        data-name="Tex_Icon"
      >
        <div className="absolute inset-[0.81%_6.73%]">
          <svg
            className="block size-full"
            fill="none"
            height="19.6742"
            preserveAspectRatio="none"
            viewBox="0 0 17.3064 19.6742"
            width="17.3064"
            style={{
              filter:
                "drop-shadow(0px 4px 5px rgba(20,20,20,0.4)) drop-shadow(0px -4px 10px rgba(222,105,255,0.25))",
            }}
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
  const [rows, setRows] = useState<ContentRow[]>(CONTENT_ROWS)
  const [expanded, setExpanded] = useState<number | null>(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [placementsOpen, setPlacementsOpen] = useState(true)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const [changeIndex, setChangeIndex] = useState<number | null>(null)
  const [createOpen, setCreateOpen] = useState(false)

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="content" onNav={onNav} svgPaths={svgZ} />
      <div role="main" className="flex flex-1 flex-col gap-[24px] items-start min-w-px pl-[24px] pr-[48px] py-[32px] self-stretch">
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <div>
            <h1 className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[28px] m-0" style={{ color: t.textPrimary }}>Content</h1>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] mt-[4px]" style={{ color: t.textMuted }}>Manage media assets, 3D models and interactive blocks</p>
          </div>
          <PrimaryButton label="+ Create content" onClick={() => setCreateOpen(true)} />
        </div>
        <Toolbar placeholder="Search by island's name" />
        <div className="flex items-stretch gap-[12px] w-full">
        <div
          className={`relative rounded-[${R.lg}] flex-1 min-w-0 overflow-hidden`}
          style={{
            background: t.bgCard,
            boxShadow: t.shadowCard,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[44px_1fr_120px_104px_176px_169px]"
            style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
          >
            {[
              "",
              "Name",
              "Weight/Duration",
              "Connections",
              "Status",
              "Last modified",
            ].map((h, i) => (
              <div key={i} className="px-[16px] py-[16px]">
                {h && (
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px]"
                    style={{ color: t.textMuted }}
                  >
                    {h}
                  </p>
                )}
              </div>
            ))}
          </div>
          {rows.map((row, i) => (
            <div key={i}>
              <div
                role="button"
                tabIndex={0}
                aria-expanded={expanded === i}
                aria-label={`${row.name}, ${expanded === i ? "collapse" : "expand"} details`}
                className="grid grid-cols-[44px_1fr_120px_104px_176px_169px] cursor-pointer transition-colors"
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
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setExpanded(expanded === i ? null : i)
                  }
                }}
              >
                <div className="px-[12px] py-[16px] flex items-center justify-center">
                  <IcChevronExpand open={expanded === i} />
                </div>
                <div className="px-[16px] py-[16px] flex items-center gap-[12px]">
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[1.4]"
                    style={{ color: t.textPrimary }}
                  >
                    {row.name}
                  </p>
                </div>
                <div className="px-[16px] py-[16px] flex items-center">
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[1.4]"
                    style={{ color: t.textMuted }}
                  >
                    {row.duration}
                  </p>
                </div>
                <div className="px-[16px] py-[16px] flex items-center">
                  <p
                    className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[1.4]"
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
                    className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[1.4]"
                    style={{ color: t.textPlaceholder }}
                  >
                    {row.modified}
                  </p>
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
                        className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px] mb-[4px]"
                        style={{ color: t.textMuted }}
                      >
                        Support &amp; Notes:
                      </p>
                      <p
                        className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[1.5]"
                        style={{ color: t.textPrimary }}
                      >
                        Introduction video displayed during guest walkthrough
                      </p>
                      <p
                        className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[15px] mt-[12px] mb-[4px]"
                        style={{ color: t.textMuted }}
                      >
                        File Specs:
                      </p>
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px]"
                        style={{ color: t.textMuted }}
                      >
                        1080p H.264 • 156 MB • Aspect 16:9
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => setPlacementsOpen(!placementsOpen)}
                        aria-expanded={placementsOpen}
                        className="flex items-center justify-between w-full mb-[10px]"
                      >
                        <p
                          className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                          style={{ color: t.textPrimary }}
                        >
                          Active Placements (Linked to 2 Islands)
                        </p>
                        <IcChevronDown />
                      </button>
                      {placementsOpen && (
                        <div className="flex flex-col gap-[8px]">
                          {[
                            "AudiBKK → LobbyRoom (TV1 / TV2)",
                            "Muster Plaza → Main Entrance (Display)",
                          ].map((p) => (
                            <button
                              key={p}
                              className="text-left underline font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[normal]"
                              style={{ color: t.accentCyan }}
                            >
                              {p}
                            </button>
                          ))}
                          <p
                            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px]"
                            style={{ color: t.textMuted }}
                          >
                            Click location to open and manage slot in Island
                            Structure tree
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-[12px] pt-[4px]">
                    <DestructiveButton label="Delete content" onClick={() => setDeleteIndex(i)} />
                    <SecondaryButton label="Change content" onClick={() => setChangeIndex(i)} />
                    <div className="flex-1" />
                    <OutlineButton label="Link to another Island" onClick={onLinkContent} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <ScrollSlider />
        </div>
      </div>
      {deleteIndex !== null && (
        <DeleteContentConfirmDialog
          onClose={() => setDeleteIndex(null)}
          onConfirm={() => {
            setRows((prev) => prev.filter((_, i) => i !== deleteIndex))
            setExpanded((prev) => {
              if (prev === null) return prev
              if (prev === deleteIndex) return null
              return prev > deleteIndex ? prev - 1 : prev
            })
            setDeleteIndex(null)
          }}
        />
      )}
      {changeIndex !== null && (
        <UploadContentModal
          title={rows[changeIndex]?.name ?? "Content title"}
          onClose={() => setChangeIndex(null)}
          onSave={() => setChangeIndex(null)}
        />
      )}
      {createOpen && (
        <UploadContentModal
          title="Plaza_BKK"
          onClose={() => setCreateOpen(false)}
          onSave={() => setCreateOpen(false)}
        />
      )}
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
      label: "Hexagon1",
      tag: "(Building)",
      type: "building",
      children: [
        {
          label: "Plaza",
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
                  label: "Floor1",
                  tag: "(Building)",
                  type: "building",
                  children: [
                    {
                      label: "LobbyRoom",
                      tag: "(Building)",
                      type: "building",
                      children: [
                        { label: "TV 1", type: "slot-linked" },
                        { label: "TV 2", type: "slot-linked" },
                        { label: "Speaker", type: "slot-empty" },
                      ],
                    },
                  ],
                },
                {
                  label: "Floor2",
                  tag: "(Building)",
                  type: "building",
                  children: [
                    { label: "TV1", type: "slot-empty" },
                    { label: "Billboard1", type: "slot-empty" },
                    { label: "Soundbar", type: "slot-empty" },
                  ],
                },
              ],
            },
          ],
        },
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
    "slot-empty": "transparent",
    "slot-readonly": t.accentPurple,
  }
  const isSlot = node.type.startsWith("slot")
  const isActive = node.label === activeSlot
  const isReadOnlyRoot = node.type === "world"
  const activeBg = `${t.accentOrange}1F`

  function activate() {
    if (!isSlot && node.children) setOpen(!open)
    if (isSlot) onSelect(node.label)
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={!isSlot && node.children ? open : undefined}
        aria-current={isSlot && isActive ? "true" : undefined}
        className="flex items-center gap-[8px] py-[6px] rounded-[6px] cursor-pointer transition-colors"
        style={{
          paddingLeft: `${12 + depth * 16}px`,
          paddingRight: 12,
          background: isActive && isSlot ? activeBg : "transparent",
        }}
        onClick={activate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            activate()
          }
        }}
        onMouseEnter={(e) => {
          if (!(isActive && isSlot))
            (e.currentTarget as HTMLElement).style.background = t.bgNavHover
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.background =
            isActive && isSlot ? activeBg : "transparent"
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
            <IcChevronRight color={isReadOnlyRoot ? t.textPlaceholder : undefined} />
          </span>
        )}
        {!isSlot && !node.children && <span className="w-[12px] shrink-0" />}
        {isReadOnlyRoot && <IcLock />}
        {isSlot && node.type === "slot-empty" && (
          <span
            className="inline-block w-[8px] h-[8px] rounded-full shrink-0"
            style={{
              background: "transparent",
              border: `1px solid ${isActive ? t.accentOrange : t.borderStrong}`,
            }}
          />
        )}
        {isSlot && node.type !== "slot-empty" && (
          <span
            className="inline-block w-[8px] h-[8px] rounded-full shrink-0"
            style={{
              background: isActive ? t.accentOrange : slotColor[node.type] ?? t.iconMuted,
            }}
          />
        )}
        <span
          className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.5] whitespace-nowrap shrink-0"
          style={{
            color: isActive && isSlot ? t.accentOrange : isReadOnlyRoot ? t.textPlaceholder : t.textPrimary,
            fontWeight: isActive && isSlot ? 600 : 400,
          }}
        >
          {node.label}
        </span>
        {node.tag && (
          <span
            className="font-['Inter:Regular',sans-serif] font-normal text-[12px] whitespace-nowrap shrink-0"
            style={{ color: t.textPlaceholder }}
          >
            {node.tag}
          </span>
        )}
        {node.tagAccent && (
          <div
            className="content-stretch flex items-start rounded-[4px] shrink-0 ml-[4px] px-[6px] py-[2px]"
            style={{ background: `${t.accentCyan}1A` }}
          >
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic shrink-0 text-[10px] whitespace-nowrap"
              style={{ color: t.accentCyan }}
            >
              Your Assigned Space
            </p>
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
      aria-label={dir === "left" ? "Scroll tabs left" : "Scroll tabs right"}
      className="relative shrink-0 size-[36px] flex items-center justify-center transition-opacity hover:opacity-70"
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
        <div role="tablist" aria-label="Scope" className="flex items-center justify-center gap-[4px] flex-1 min-w-0 overflow-hidden">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              role="tab"
              aria-selected={i === active}
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

function Breadcrumb({ items }: { items: string[] }) {
  const { t } = useT()
  return (
    <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[14px]" style={{ color: t.textMuted }}>
      {items.join(" / ")}
    </p>
  )
}

const LINK_CONTENT_BREADCRUMB = [
  "Muster Plaza",
  "Hexagon1",
  "Plaza",
  "EcospaceBuilding",
  "Floor1",
  "LobbyRoom",
]

function findSlotType(node: TreeNode, label: string): TreeNode["type"] | undefined {
  if (node.label === label) return node.type
  for (const child of node.children ?? []) {
    const found = findSlotType(child, label)
    if (found) return found
  }
  return undefined
}

function updateSlotType(node: TreeNode, label: string, newType: TreeNode["type"]): TreeNode {
  if (node.label === label) return { ...node, type: newType }
  if (!node.children) return node
  return { ...node, children: node.children.map((child) => updateSlotType(child, label, newType)) }
}

function IcUnlinked() {
  const { t } = useT()
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path
        d="M11.9082 2.24023C13.8372 1.19726 16.1628 1.19726 18.0918 2.24023L21.3438 3.99805L24.5049 5.94238C26.3725 7.09142 27.5353 9.10494 27.5967 11.2969L27.6992 15L27.5967 18.7031C27.5353 20.8951 26.3725 22.9086 24.5049 24.0576L21.3438 26.001L18.0918 27.7598C16.1628 28.8027 13.8372 28.8027 11.9082 27.7598L8.65527 26.001L5.49512 24.0576C3.62746 22.9086 2.4647 20.8951 2.40332 18.7031L2.2998 15L2.40332 11.2969C2.4647 9.10494 3.62746 7.09142 5.49512 5.94238L8.65527 3.99805L11.9082 2.24023Z"
        stroke={t.accentCyan}
      />
      <path
        d="M11.9082 5.24023C13.8372 4.19726 16.1628 4.19726 18.0918 5.24023L20.0361 6.29199L21.9072 7.44238C23.7748 8.59144 24.9367 10.605 24.998 12.7969L25.0596 15L24.998 17.2031C24.9367 19.395 23.7748 21.4086 21.9072 22.5576L20.0361 23.707L18.0918 24.7598C16.1628 25.8027 13.8372 25.8027 11.9082 24.7598L9.96289 23.707L8.09277 22.5576C6.22524 21.4086 5.06333 19.395 5.00195 17.2031L4.93945 15L5.00195 12.7969C5.06333 10.605 6.22524 8.59144 8.09277 7.44238L9.96289 6.29199L11.9082 5.24023Z"
        stroke={t.accentCyan}
      />
      <path
        d="M11.9082 8.24023C13.8372 7.19726 16.1628 7.19726 18.0918 8.24023L18.7041 8.57129L19.3086 8.94238C21.1763 10.0914 22.339 12.1049 22.4004 14.2969L22.4189 15L22.4004 15.7031C22.339 17.8951 21.1763 19.9086 19.3086 21.0576L18.7041 21.4277L18.0918 21.7598C16.1628 22.8027 13.8372 22.8027 11.9082 21.7598L11.2949 21.4277L10.6914 21.0576C8.82375 19.9086 7.66099 17.8951 7.59961 15.7031L7.58008 15L7.59961 14.2969C7.66099 12.1049 8.82375 10.0914 10.6914 8.94238L11.2949 8.57129L11.9082 8.24023Z"
        stroke={t.accentCyan}
      />
    </svg>
  )
}

function LinkContentScreen({
  onNav,
  onClose,
}: {
  onNav: (s: NavSection) => void
  onClose?: () => void
}) {
  const { t, isDark } = useT()
  const [activeSlot, setActiveSlot] = useState("TV 1")
  const [mode, setMode] = useState<"preview" | "change">("preview")
  const [treeData, setTreeData] = useState<TreeNode>(TREE_DATA)
  const [assigned, setAssigned] = useState<{ name: string; meta: string } | null>(
    () => ({ name: CONTENT_ITEMS[0].name, meta: CONTENT_ITEMS[0].meta }),
  )
  const [selectedContent, setSelectedContent] = useState(0)
  const tabs = [
    "LobbyRoom (3)",
    "Floor 1 (8)",
    "EchoSpaceBuilding(15)",
    "Plaza (22)",
  ]
  const [activeTab, setActiveTab] = useState(0)
  const breadcrumb = [...LINK_CONTENT_BREADCRUMB, activeSlot]

  function handleSelectSlot(label: string) {
    setActiveSlot(label)
    setMode("preview")
    const type = findSlotType(treeData, label)
    setAssigned(
      type === "slot-empty"
        ? null
        : { name: CONTENT_ITEMS[0].name, meta: CONTENT_ITEMS[0].meta },
    )
  }

  function handleAssign() {
    const item = CONTENT_ITEMS[selectedContent]
    setAssigned({ name: item.name, meta: item.meta })
    setTreeData((prev) => updateSlotType(prev, activeSlot, "slot-linked"))
    setMode("preview")
  }

  function handleUnlink() {
    setAssigned(null)
    setTreeData((prev) => updateSlotType(prev, activeSlot, "slot-empty"))
  }

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
    >
      <Sidebar active="islands" onNav={onNav} svgPaths={svgJ} />
      <div role="main" className="flex flex-1 flex-col min-w-px pl-[24px] pr-[48px] py-[40px] self-stretch gap-[24px]">
        <div>
          <h1
            className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[1.4] text-[28px] m-0"
            style={{ color: t.textPrimary }}
          >
            Link Content
          </h1>
          <p
            className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] mt-[4px]"
            style={{ color: t.textMuted }}
          >
            Muster Plaza
          </p>
        </div>
        <div className="flex flex-row items-stretch flex-1 min-h-0 w-full gap-0">
          {/* Tree panel */}
          <div
            className="flex flex-col h-full shrink-0 overflow-hidden"
            style={{
              background: isDark ? t.bgCard : "#DCDCDC",
              borderRight: `1px solid ${t.borderSubtle}`,
            }}
          >
            <div className="flex flex-col gap-[12px] h-full min-w-[437px] p-[16px] min-h-0">
              <div className="flex-1 min-h-0 overflow-y-auto">
                <TreeNodeRow
                  node={treeData}
                  activeSlot={activeSlot}
                  onSelect={handleSelectSlot}
                />
              </div>
              <div className="flex items-center gap-[16px] shrink-0">
                <span className="flex items-center gap-[5px]">
                  <span
                    className="inline-block w-[8px] h-[8px] rounded-full"
                    style={{ background: t.accentCyan }}
                  />
                  <span
                    className="font-['Inter:Regular',sans-serif] font-normal text-[11px]"
                    style={{ color: t.textPlaceholder }}
                  >
                    Linked Slot
                  </span>
                </span>
                <span className="flex items-center gap-[5px]">
                  <span
                    className="inline-block w-[8px] h-[8px] rounded-full"
                    style={{ border: `1px solid ${t.textPlaceholder}` }}
                  />
                  <span
                    className="font-['Inter:Regular',sans-serif] font-normal text-[11px]"
                    style={{ color: t.textPlaceholder }}
                  >
                    Empty Slot
                  </span>
                </span>
                <span className="flex items-center gap-[5px]">
                  <IcLock />
                  <span
                    className="font-['Inter:Regular',sans-serif] font-normal text-[11px]"
                    style={{ color: t.textPlaceholder }}
                  >
                    Read-only
                  </span>
                </span>
              </div>
            </div>
          </div>
          {mode === "preview" ? (
            /* Detail panel — assigned-content preview */
            <div className="relative flex-1 min-w-0 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto flex flex-col gap-[24px] p-[24px]">
                <div className="flex flex-col gap-[8px] w-full shrink-0">
                  <div>
                    <div className="mb-[7px]">
                      <Breadcrumb items={breadcrumb} />
                    </div>
                    <p
                      className="font-['Exo_2:Medium',sans-serif] font-medium text-[20px] leading-[1.4]"
                      style={{ color: t.textPrimary }}
                    >
                      {assigned ? `${activeSlot} (Placeholder)` : `○ ${activeSlot}`}
                    </p>
                  </div>
                  {assigned && (
                    <div
                      className={`flex flex-row items-start shrink-0 grow-0 order-1 w-[183px] h-[21px] rounded-[${R.sm}] px-[10px] py-[4px] box-border`}
                      style={{ background: t.bgSurface }}
                    >
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[11px]"
                        style={{ color: t.accentCyan }}
                      >
                        Accepted: 16:9 Video • Max 4K
                      </p>
                    </div>
                  )}
                </div>
                {assigned ? (
                  <div
                    className={`flex flex-col gap-[12px] items-start rounded-[${R.sm}] shrink-0 w-full max-w-[513.5px]`}
                  >
                    <div className="relative rounded-[8px] w-full h-[300px] shrink-0 overflow-hidden">
                      <img
                        alt={`Preview of ${assigned.name}`}
                        className="absolute inset-0 size-full object-cover"
                        src={imgLinkContentPreview}
                      />
                      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
                    </div>
                    <div>
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.5]"
                        style={{ color: t.textPrimary }}
                      >
                        {assigned.name}
                      </p>
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[12px] mt-[4px]"
                        style={{ color: t.textMuted }}
                      >
                        {assigned.meta}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center gap-[24px] rounded-[12px] w-full max-w-[599px] h-[400px] p-[48px] shrink-0 box-border"
                    style={{ background: t.bgCard, border: "1px dashed rgba(67,67,67,0.2)" }}
                  >
                    <IcUnlinked />
                    <div className="flex flex-col items-center gap-[8px] text-center">
                      <p
                        className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px]"
                        style={{ color: t.textPrimary }}
                      >
                        No Content Linked
                      </p>
                      <p
                        className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[20px] max-w-[420px]"
                        style={{ color: t.textMuted }}
                      >
                        Select content from the library or upload new media to link to this slot.
                      </p>
                    </div>
                    <div className="flex items-center gap-[16px]">
                      <SecondaryButton label="Browse Library" onClick={() => setMode("change")} />
                      <PrimaryButton label="Upload New" onClick={() => setMode("change")} />
                    </div>
                  </div>
                )}
                {assigned && (
                  <div className="flex items-start justify-end gap-[12px] w-full max-w-[513.5px] shrink-0">
                    <SecondaryButton label="Unlink" onClick={handleUnlink} />
                    <PrimaryButton label="Change content" onClick={() => setMode("change")} />
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Content selector — choose new content for the slot */
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
                <div className="mb-[6px]">
                  <Breadcrumb items={breadcrumb} />
                </div>
                <p
                  className="font-['Exo_2:Medium',sans-serif] font-medium text-[20px] leading-[1.4]"
                  style={{ color: t.textPrimary }}
                >
                  Change Content for {activeSlot} (Placeholder)
                </p>
                <div
                  className={`inline-flex items-start rounded-[${R.sm}] mt-[6px] px-[10px] py-[4px]`}
                  style={{ background: t.bgSurface }}
                >
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[11px]" style={{ color: t.accentCyan }}>
                    Accepted: 16:9 Video • Max 4K
                  </p>
                </div>
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
                      className={`w-[120px] h-[68px] rounded-[${R.sm}] shrink-0`}
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
                          className="font-['Inter:Regular',sans-serif] font-normal text-[11px] leading-[1.4] mt-[2px]"
                          style={{ color: t.accentCyan }}
                        >
                          {item.tag}
                        </p>
                      )}
                    </div>
                    <div
                      className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center shrink-0"
                      style={{
                        background: "transparent",
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
                            stroke={t.accentOrange}
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
                <SecondaryButton label="Cancel" onClick={() => setMode("preview")} />
                <PrimaryButton label="Assign to slot" onClick={handleAssign} />
              </div>
            </div>
          )}
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
  type BadgeStyle = { bg: string; border: string; text: string; faded?: boolean }
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
  const [rows, setRows] = useState<AccountRow[]>(ACCOUNT_ROWS)
  const [hovered, setHovered] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState<number | null>(null)
  const [editPermissionsIndex, setEditPermissionsIndex] = useState<number | null>(null)
  const [inviteOpen, setInviteOpen] = useState(false)
  const [deactivateIndex, setDeactivateIndex] = useState<number | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const actionCellRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <div
      className="flex items-start size-full"
      style={{ background: t.bgBase }}
      onClick={() => setMenuOpen(null)}
    >
      <Sidebar active="accounts" onNav={onNav} svgPaths={svgJ} />
      <div role="main" className="flex flex-1 flex-col gap-[24px] items-start min-w-px px-[40px] py-[32px] self-stretch overflow-y-auto">
        {/* Page header */}
        <div className="flex items-center justify-between w-full shrink-0">
          <div>
            <h1
              className="font-['Exo_2:SemiBold',sans-serif] font-semibold leading-[32px] text-[28px] m-0"
              style={{ color: t.textPrimary }}
            >
              Client Accounts
            </h1>
            <p
              className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] mt-[4px]"
              style={{ color: t.textMuted }}
            >
              Manage user access, roles, and client permissions across spatial
              environments
            </p>
          </div>
          <PrimaryButton label="+ Invite User" onClick={() => setInviteOpen(true)} />
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
                border: `1px solid ${t.borderStrong}`,
              }}
            >
              <div className="flex items-center gap-[8px] p-[12px]">
                <p
                  className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] truncate"
                  style={{ color: t.textPlaceholder }}
                >
                  Search by user name or email
                </p>
                <IcSearch />
              </div>
            </div>
            <button
              type="button"
              aria-haspopup="listbox"
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
            </button>
            <button
              type="button"
              aria-haspopup="listbox"
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
            </button>
          </div>
        </div>
        {/* User table */}
        <div className="flex items-stretch gap-[12px] w-full">
        <div
          className={`relative rounded-[${R.lg}] flex-1 min-w-0 overflow-hidden`}
          style={{
            background: t.bgCard,
            boxShadow: t.shadowCard,
            border: `1px solid ${t.borderSubtle}`,
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[minmax(200px,1fr)_236px_100px_120px_minmax(160px,1fr)_48px] px-[16px] py-[16px]"
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
                  className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[16px]"
                  style={{ color: t.textMuted }}
                >
                  {h}
                </p>
              </div>
            ))}
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[minmax(200px,1fr)_236px_100px_120px_minmax(160px,1fr)_48px] px-[16px] items-center h-[68px] relative transition-colors"
              style={{
                borderBottom: `1px solid ${t.borderSubtle}`,
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
              <div
                ref={(el) => { actionCellRefs.current[i] = el }}
                className="flex items-center justify-center relative"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setMenuOpen(menuOpen === i ? null : i)
                  }}
                  aria-label={`More actions for ${row.name}`}
                  aria-haspopup="menu"
                  aria-expanded={menuOpen === i}
                  className={`rounded-[${R.sm}] size-[40px] flex items-center justify-center transition-colors`}
                  style={{ background: t.bgSurface }}
                >
                  <IcDots />
                </button>
                {menuOpen === i && (
                  <ActionsMenuPortal
                    anchorEl={actionCellRefs.current[i]}
                    onClose={() => setMenuOpen(null)}
                    top={36}
                    right={0}
                    width={168}
                  >
                    <div
                      aria-label={`Actions for ${row.name}`}
                      className={`w-[168px] rounded-[${R.md}] overflow-hidden`}
                      style={{
                        background: t.bgDropdown,
                        border: `1px solid ${t.borderSubtle}`,
                        boxShadow: t.shadowHeavy,
                      }}
                    >
                      {["Edit permissions", "Resend invite"].map((label) => (
                        <button
                          key={label}
                          role="menuitem"
                          onClick={() => {
                            setMenuOpen(null)
                            if (label === "Edit permissions") setEditPermissionsIndex(i)
                            if (label === "Resend invite")
                              setToast(`Invitation email resent to ${rows[i].name}`)
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
                          role="menuitem"
                          onClick={() => {
                            setMenuOpen(null)
                            setDeactivateIndex(i)
                          }}
                          className={`w-full text-center rounded-[${R.md}] py-[10px] font-['Inter:Regular',sans-serif] font-normal text-[14px] transition-colors`}
                          style={{ background: t.accentOrange, color: "#141414" }}
                        >
                          Deactivate account
                        </button>
                      </div>
                    </div>
                  </ActionsMenuPortal>
                )}
              </div>
            </div>
          ))}
        </div>
        <ScrollSlider />
        </div>
      </div>
      {editPermissionsIndex !== null && (
        <EditPermissionsModal
          row={rows[editPermissionsIndex]}
          onClose={() => setEditPermissionsIndex(null)}
          onSave={(newRole) => {
            const i = editPermissionsIndex
            setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, role: newRole } : r)))
            setEditPermissionsIndex(null)
            setToast(`${rows[i].name}'s role updated to ${newRole}`)
          }}
        />
      )}
      {inviteOpen && (
        <InviteUserModal
          onClose={() => setInviteOpen(false)}
          onInvite={() => {
            setInviteOpen(false)
            setToast("User added as 'Invited' - Invitation email sent")
          }}
        />
      )}
      {deactivateIndex !== null && (
        <DeactivateAccountConfirmDialog
          userName={rows[deactivateIndex].name}
          onClose={() => setDeactivateIndex(null)}
          onConfirm={() => {
            setDeactivateIndex(null)
            setToast(`${rows[deactivateIndex].name}'s account has been deactivated`)
          }}
        />
      )}
      {toast && <ToastNotification message={toast} onDismiss={() => setToast(null)} />}
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
  const [createIslandOpen, setCreateIslandOpen] = useState(false)
  const [cards, setCards] = useState<CardData[]>(CARD_DATA)

  function handleCreateIsland(name: string) {
    setCards((prev) => [
      {
        name,
        slug: ISLAND_SLUG_PREFIX + slugify(name),
        version: "1.0.0",
        status: "Draft",
      },
      ...prev,
    ])
    setCreateIslandOpen(false)
    setScreen("Islands — Grid")
  }

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
        return (
          <EmptyIslandsScreen
            onNav={handleNav}
            onCreateIsland={() => setCreateIslandOpen(true)}
          />
        )
      case "Islands — Grid":
        return (
          <IslandsGridScreen
            onNav={handleNav}
            onViewToggle={() => setScreen("Islands — Table")}
            onLinkContent={() => setScreen("Link Content")}
            onCreateIsland={() => setCreateIslandOpen(true)}
            cards={cards}
            setCards={setCards}
          />
        )
      case "Islands — Table":
        return (
          <IslandsTableScreen
            onNav={handleNav}
            onViewToggle={() => setScreen("Islands — Grid")}
            onLinkContent={() => setScreen("Link Content")}
            onCreateIsland={() => setCreateIslandOpen(true)}
            cards={cards}
            setCards={setCards}
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
        {createIslandOpen && (
          <CreateIslandModal
            onClose={() => setCreateIslandOpen(false)}
            onCreate={handleCreateIsland}
          />
        )}
      </div>
    </ThemeCtx.Provider>
  )
}
