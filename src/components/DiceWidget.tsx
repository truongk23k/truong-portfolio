"use client";

import { useState, useRef, useEffect } from "react";

const S = 85; // half-size → 170px cube

const DOTS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[32, 32], [68, 68]],
  3: [[32, 32], [50, 50], [68, 68]],
  4: [[32, 32], [68, 32], [32, 68], [68, 68]],
  5: [[32, 32], [68, 32], [50, 50], [32, 68], [68, 68]],
  6: [[32, 22], [68, 22], [32, 50], [68, 50], [32, 78], [68, 78]],
};

// Each face: [CSS transform, face number] — uniform colour, no fake lighting
const FACES = [
  { t: `translateZ(${S}px)`,                face: 1 },
  { t: `rotateY(90deg) translateZ(${S}px)`, face: 2 },
  { t: `rotateX(-90deg) translateZ(${S}px)`,face: 3 },
  { t: `rotateX(90deg) translateZ(${S}px)`, face: 4 },
  { t: `rotateY(-90deg) translateZ(${S}px)`,face: 5 },
  { t: `rotateY(180deg) translateZ(${S}px)`,face: 6 },
];

// To show face N toward camera
const FACE_ROT: Record<number, { x: number; y: number }> = {
  1: { x: 0,   y: 0   },
  2: { x: 0,   y: -90 },
  3: { x: 90,  y: 0   },
  4: { x: -90, y: 0   },
  5: { x: 0,   y: 90  },
  6: { x: 0,   y: 180 },
};

export default function DiceWidget() {
  const [rotX, setRotX] = useState(-22);
  const [rotY, setRotY] = useState(30);
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const drag = useRef({ active: false, startX: 0, startY: 0, lastX: 0, lastY: 0, moved: false });
  const rotXRef = useRef(-22);
  const rotYRef = useRef(30);
  const rollingRef = useRef(false);
  const rollRef = useRef<() => void>(() => {});

  rollRef.current = () => {
    if (rollingRef.current) return;
    const face = Math.floor(Math.random() * 6) + 1;
    const target = FACE_ROT[face];

    let dX = target.x - (rotXRef.current % 360);
    let dY = target.y - (rotYRef.current % 360);
    if (dX > 180) dX -= 360;
    if (dX < -180) dX += 360;
    if (dY > 180) dY -= 360;
    if (dY < -180) dY += 360;

    const newX = rotXRef.current + dX + 4 * 360;
    const newY = rotYRef.current + dY + 4 * 360;
    rotXRef.current = newX;
    rotYRef.current = newY;

    rollingRef.current = true;
    setRolling(true);
    setResult(null);
    setRotX(newX);
    setRotY(newY);

    setTimeout(() => {
      rollingRef.current = false;
      setRolling(false);
      setResult(face);
    }, 950);
  };

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!drag.current.active || rollingRef.current) return;
      const dx = e.clientX - drag.current.lastX;
      const dy = e.clientY - drag.current.lastY;
      // Use total distance from mousedown origin, not per-frame delta
      const totalDx = e.clientX - drag.current.startX;
      const totalDy = e.clientY - drag.current.startY;
      if (totalDx * totalDx + totalDy * totalDy > 64) drag.current.moved = true; // 8px radius
      rotXRef.current -= dy * 0.55;
      rotYRef.current += dx * 0.55;
      setRotX(rotXRef.current);
      setRotY(rotYRef.current);
      drag.current.lastX = e.clientX;
      drag.current.lastY = e.clientY;
    }
    function onMouseUp() {
      if (!drag.current.active) return;
      if (!drag.current.moved) rollRef.current();
      drag.current.active = false;
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  function onMouseDown(e: React.MouseEvent) {
    if (rollingRef.current) return;
    e.preventDefault();
    setResult(null);
    drag.current = { active: true, startX: e.clientX, startY: e.clientY, lastX: e.clientX, lastY: e.clientY, moved: false };
  }

  const touch = useRef({ lastX: 0, lastY: 0, moved: false });

  function onTouchStart(e: React.TouchEvent) {
    if (rollingRef.current) return;
    const t = e.touches[0];
    setResult(null);
    touch.current = { lastX: t.clientX, lastY: t.clientY, moved: false };
  }
  function onTouchMove(e: React.TouchEvent) {
    if (rollingRef.current) return;
    const t = e.touches[0];
    const dx = t.clientX - touch.current.lastX;
    const dy = t.clientY - touch.current.lastY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) touch.current.moved = true;
    rotXRef.current -= dy * 0.55;
    rotYRef.current += dx * 0.55;
    setRotX(rotXRef.current);
    setRotY(rotYRef.current);
    touch.current.lastX = t.clientX;
    touch.current.lastY = t.clientY;
  }
  function onTouchEnd() {
    if (!touch.current.moved) rollRef.current();
  }

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      {/* Scene wrapper with ground shadow */}
      <div className="relative">
        {/* Ambient ground glow */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full blur-xl opacity-40"
          style={{ width: S * 1.6, height: 20, background: "radial-gradient(ellipse,#6366f1 0%,transparent 70%)" }}
        />

        {/* Perspective scene */}
        <div
          style={{ width: S * 2, height: S * 2, perspective: "560px" }}
          className="cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
              transition: rolling ? "transform 0.95s cubic-bezier(0.22,1,0.36,1)" : "none",
            }}
          >
            {FACES.map(({ t, face }, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: S * 2,
                  height: S * 2,
                  transform: t,
                  backfaceVisibility: "hidden",
                  backgroundColor: "#1e2d52",
                  borderRadius: 6,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.13)",
                }}
              >
                {/* Dots */}
                {DOTS[face].map(([dx, dy], di) => (
                  <div
                    key={di}
                    style={{
                      position: "absolute",
                      width: 15,
                      height: 15,
                      left: `${dx}%`,
                      top: `${dy}%`,
                      transform: "translate(-50%,-50%)",
                      borderRadius: "50%",
                      background: face === 1 ? "#f59e0b" : "#a5b4fc",
                      boxShadow: face === 1
                        ? "0 0 8px rgba(245,158,11,0.7)"
                        : "0 0 6px rgba(165,180,252,0.5)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Result display */}
      <div className="h-7 flex items-center justify-center">
        {result !== null ? (
          <p className="text-sm font-bold text-indigo-400 animate-fade-in tracking-wide">
            You rolled a <span className="text-white">{result}</span>!
          </p>
        ) : (
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Drag to spin · Click to roll
          </p>
        )}
      </div>
    </div>
  );
}
