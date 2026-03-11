import React from 'react';

interface SidexSidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * SidexSidePanel — responsive right-hand panel.
 *
 * Desktop (≥ md): slides in as a flex sibling, sitting side-by-side with the
 * main content. Width animates from 0 → ~50 vw.
 *
 * Mobile (< md): fixed full-screen overlay that slides in from the right edge,
 * with a semi-transparent backdrop behind it.
 */
export default function SidexSidePanel({ isOpen, onClose, children }: SidexSidePanelProps) {
  return (
    <>
      {/* ── Mobile backdrop ─────────────────────────────────────────────────── */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Panel ────────────────────────────────────────────────────────────── */}
      {/*
        Mobile  : fixed full-screen, slides in/out via translateX
        Desktop : static flex-shrink-0 item, animates width 0 ↔ 48–62 vw
      */}
      <div
        className={`
          flex flex-col overflow-hidden bg-white border-l border-[#e0e0e0]
          transition-[transform,width] duration-300 ease-in-out

          fixed inset-0 z-50 w-full h-full
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}

          md:static md:inset-auto md:z-auto md:h-screen md:flex-shrink-0 md:translate-x-0
          ${isOpen ? 'md:w-[48vw] lg:w-[55vw] xl:w-[62vw]' : 'md:w-0'}
        `}
        style={{ boxShadow: isOpen ? '-2px 0 8px rgba(0,0,0,0.08)' : 'none' }}
      >
        {isOpen && children}
      </div>
    </>
  );
}
