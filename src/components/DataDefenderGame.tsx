"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type GameStatus = "ready" | "playing" | "gameover";
type FallingItem = {
  id: number;
  label: string;
  kind: "good" | "bad";
  x: number;
  y: number;
  speed: number;
  radius: number;
};
type GameSnapshot = {
  width: number;
  height: number;
  status: GameStatus;
  score: number;
  lives: number;
  level: number;
  playerX: number;
  items: FallingItem[];
  spawnIn: number;
  message: string;
};

const gameTitle = "מגן האתר של נביא נס ישראל";
const goodItems = ["בינה", "דאטה", "מהירות", "אמון", "מכירות"];
const badItems = ["תקלה", "אתר איטי", "נטישה", "קידום חלש", "סיכון"];

const initialHud = {
  score: 0,
  lives: 3,
  level: 1,
  status: "ready" as GameStatus,
  message: "לחצו רווח או התחלה כדי להפעיל את מגן האתר.",
};

export function DataDefenderGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const itemIdRef = useRef<number>(0);
  const controlsRef = useRef({ left: false, right: false });
  const hudTimeRef = useRef<number>(0);
  const shieldCooldownRef = useRef<number>(0);
  const shieldUntilRef = useRef<number>(0);
  const gameRef = useRef({
    width: 860,
    height: 470,
    status: "ready" as GameStatus,
    score: 0,
    lives: 3,
    level: 1,
    playerX: 430,
    items: [] as FallingItem[],
    spawnIn: 0,
    message: "לחצו רווח או התחלה כדי להפעיל את מגן האתר.",
  });
  const [hud, setHud] = useState(initialHud);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const syncCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(320, Math.floor(rect.width || 860));
      const height = Math.max(330, Math.floor(rect.height || 470));
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      const context = canvas.getContext("2d");
      if (context) {
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      }
      gameRef.current.width = width;
      gameRef.current.height = height;
      gameRef.current.playerX = Math.min(Math.max(gameRef.current.playerX, 42), width - 42);
    };

    const observer = new ResizeObserver(syncCanvasSize);
    observer.observe(canvas);
    syncCanvasSize();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", " ", "Space", "a", "A", "d", "D"].includes(event.key)) {
        event.preventDefault();
      }
      if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") controlsRef.current.left = true;
      if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") controlsRef.current.right = true;
      if (event.key === " " || event.key === "Space") activateAction();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") controlsRef.current.left = false;
      if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") controlsRef.current.right = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const tick = (time: number) => {
      const delta = Math.min((time - (lastTimeRef.current || time)) / 1000, 0.034);
      lastTimeRef.current = time;
      updateGame(delta, time);
      drawGame(time);
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function publishHud(force = false) {
    const now = performance.now();
    if (!force && now - hudTimeRef.current < 140) return;
    hudTimeRef.current = now;
    const game = gameRef.current;
    setHud({
      score: game.score,
      lives: game.lives,
      level: game.level,
      status: game.status,
      message: game.message,
    });
  }

  function startGame() {
    const width = gameRef.current.width;
    const height = gameRef.current.height;
    gameRef.current = {
      width,
      height,
      status: "playing",
      score: 0,
      lives: 3,
      level: 1,
      playerX: width / 2,
      items: [],
      spawnIn: 0.45,
      message: "המשחק התחיל. אספו דאטה טובה והתחמקו מתקלות.",
    };
    shieldCooldownRef.current = 0;
    shieldUntilRef.current = 0;
    lastTimeRef.current = performance.now();
    publishHud(true);
  }

  function activateAction() {
    const game = gameRef.current;
    if (game.status !== "playing") {
      startGame();
      return;
    }

    const now = performance.now();
    if (now < shieldCooldownRef.current) {
      game.message = "המגן נטען. עוד רגע אפשר להפעיל שוב.";
      publishHud(true);
      return;
    }

    shieldUntilRef.current = now + 850;
    shieldCooldownRef.current = now + 2600;
    const before = game.items.length;
    game.items = game.items.filter((item) => item.kind === "good" || Math.abs(item.x - game.playerX) > 120 || item.y < game.height - 230);
    const removed = before - game.items.length;
    game.message = removed > 0 ? `מגן האתר הסיר ${removed} סיכונים קרובים.` : "מגן האתר הופעל. שמרו על הקו.";
    publishHud(true);
  }

  function spawnItem() {
    const game = gameRef.current;
    const kind: FallingItem["kind"] = Math.random() < 0.62 ? "good" : "bad";
    const labelPool = kind === "good" ? goodItems : badItems;
    const levelBoost = Math.min(game.level * 10, 70);
    game.items.push({
      id: itemIdRef.current++,
      label: labelPool[Math.floor(Math.random() * labelPool.length)],
      kind,
      x: 48 + Math.random() * Math.max(1, game.width - 96),
      y: -34,
      speed: 108 + levelBoost + Math.random() * 80,
      radius: kind === "good" ? 27 : 30,
    });
  }

  function updateGame(delta: number, time: number) {
    const game = gameRef.current;
    if (game.status !== "playing") return;

    const moveSpeed = 355 + game.level * 18;
    if (controlsRef.current.left) game.playerX -= moveSpeed * delta;
    if (controlsRef.current.right) game.playerX += moveSpeed * delta;
    game.playerX = Math.min(Math.max(game.playerX, 42), game.width - 42);

    game.spawnIn -= delta;
    if (game.spawnIn <= 0) {
      spawnItem();
      game.spawnIn = Math.max(0.42, 1.08 - game.level * 0.08 - Math.random() * 0.24);
    }

    const playerY = game.height - 58;
    const nextItems: FallingItem[] = [];
    for (const item of game.items) {
      item.y += item.speed * delta;
      const xDistance = Math.abs(item.x - game.playerX);
      const yDistance = Math.abs(item.y - playerY);
      const hit = xDistance < item.radius + 36 && yDistance < item.radius + 20;
      if (hit) {
        if (item.kind === "good") {
          game.score += 10;
          const nextLevel = 1 + Math.floor(game.score / 90);
          if (nextLevel > game.level) {
            game.level = nextLevel;
            game.message = `עליתם לשלב ${nextLevel}. המהירות עולה.`;
          } else {
            game.message = `נאסף: ${item.label}. האתר מתחזק.`;
          }
        } else if (time <= shieldUntilRef.current) {
          game.score += 4;
          game.message = `המגן בלם: ${item.label}.`;
        } else {
          game.lives -= 1;
          game.message = `נפגעתם מ${item.label}. נשארו ${game.lives} חיים.`;
          if (game.lives <= 0) {
            game.status = "gameover";
            game.message = "המשחק נגמר. לחצו התחלה מחדש כדי להגן שוב על האתר.";
            game.items = [];
            publishHud(true);
            return;
          }
        }
      } else if (item.y < game.height + 50) {
        nextItems.push(item);
      }
    }
    game.items = nextItems;
    publishHud();
  }

  function drawGame(time: number) {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const game = gameRef.current;
    const width = game.width;
    const height = game.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);

    const background = context.createLinearGradient(0, 0, 0, height);
    background.addColorStop(0, "#020004");
    background.addColorStop(0.5, "#07000d");
    background.addColorStop(1, "#000000");
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    drawBackdrop(context, width, height, time);
    drawItems(context, game.items);
    drawPlayer(context, game.playerX, height - 58, time <= shieldUntilRef.current);
    drawScreenOverlay(context, game, width, height);
  }

  function setDirection(direction: "left" | "right", active: boolean) {
    controlsRef.current[direction] = active;
  }

  return (
    <article className="command-glass mb-6 overflow-hidden rounded-[1.85rem] p-3 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.35fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold text-glowred">משחק ארקייד מרכזי</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-5xl">{gameTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            הגן על האתר, אסוף דאטה טובה, התחמק מתקלות ושמור על העסק חכם ומהיר.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <StatusPill label="ניקוד" value={String(hud.score)} />
            <StatusPill label="חיים" value={String(hud.lives)} />
            <StatusPill label="שלב" value={String(hud.level)} />
          </div>
          <p className="mt-4 rounded-[1.15rem] border border-purple-200/18 bg-black/35 p-4 text-base font-semibold leading-7 text-zinc-200" aria-live="polite">
            {hud.message}
          </p>
          <div className="mt-5 grid gap-2 text-sm leading-6 text-zinc-400">
            <p>מחשב: חצים ימינה ושמאלה לתנועה, רווח להתחלה או להפעלת מגן.</p>
            <p>מובייל: החזיקו שמאלה או ימינה לתנועה, ולחצו פעולה להפעלת מגן.</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative max-w-full touch-none select-none rounded-[1.6rem] border border-purple-200/18 bg-black shadow-[0_0_80px_rgba(168,85,247,0.18)]" style={{ touchAction: "none" }}>
            <canvas
              aria-label="מגן האתר של נביא נס ישראל, משחק ארקייד להגנה על אתר"
              className="block h-[320px] w-full max-w-full touch-none rounded-[1.6rem] sm:h-[430px] lg:h-[470px]"
              ref={canvasRef}
              style={{ touchAction: "none" }}
            />
          </div>
          <div className="mt-3 grid touch-none grid-cols-3 gap-2 select-none" style={{ touchAction: "none" }}>
            <ControlButton
              label="ימינה"
              onDown={() => setDirection("right", true)}
              onUp={() => setDirection("right", false)}
            />
            <button className="min-h-16 touch-none rounded-[1.05rem] border border-purple-200/30 bg-purple-500/20 px-3 text-base font-semibold text-white shadow-[0_0_32px_rgba(168,85,247,0.22)] transition hover:bg-purple-500/28 active:scale-[0.98]" onClick={activateAction} style={{ touchAction: "manipulation" }} type="button">
              {hud.status === "gameover" ? "התחלה מחדש" : hud.status === "ready" ? "התחלה" : "פעולה"}
            </button>
            <ControlButton
              label="שמאלה"
              onDown={() => setDirection("left", true)}
              onUp={() => setDirection("left", false)}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function StatusPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/10 bg-white/[0.045] px-3 py-2">
      <p className="text-xs font-semibold text-zinc-400">{label}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function ControlButton({ label, onDown, onUp }: { label: string; onDown: () => void; onUp: () => void }) {
  function handlePointerDown(event: ReactPointerEvent<HTMLButtonElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    onDown();
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLButtonElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    onUp();
  }

  return (
    <button
      className="min-h-16 touch-none rounded-[1.05rem] border border-white/10 bg-white/[0.06] px-3 text-lg font-semibold text-purple-100 transition hover:border-purple-200/40 hover:bg-purple-500/12 active:scale-[0.98]"
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      style={{ touchAction: "none" }}
      type="button"
    >
      {label}
    </button>
  );
}

function drawBackdrop(context: CanvasRenderingContext2D, width: number, height: number, time: number) {
  context.save();
  context.strokeStyle = "rgba(168,85,247,0.12)";
  context.lineWidth = 1;
  for (let x = 30; x < width; x += 58) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x - 45, height);
    context.stroke();
  }
  for (let y = 42; y < height; y += 58) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  for (let index = 0; index < 32; index += 1) {
    const x = ((index * 97) % Math.max(width, 1)) + Math.sin(time / 1000 + index) * 5;
    const y = ((index * 53) % Math.max(height, 1)) + Math.cos(time / 1300 + index) * 4;
    const glow = 0.25 + Math.sin(time / 700 + index) * 0.18;
    context.fillStyle = `rgba(216,180,254,${glow})`;
    context.beginPath();
    context.arc(x, y, index % 5 === 0 ? 2.2 : 1.25, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

function drawItems(context: CanvasRenderingContext2D, items: FallingItem[]) {
  for (const item of items) {
    const width = Math.max(58, item.label.length * 12 + 30);
    const height = 34;
    const x = item.x - width / 2;
    const y = item.y - height / 2;
    context.save();
    context.shadowColor = item.kind === "good" ? "rgba(216,180,254,0.55)" : "rgba(248,113,113,0.5)";
    context.shadowBlur = 20;
    roundedRect(context, x, y, width, height, 17);
    context.fillStyle = item.kind === "good" ? "rgba(88,28,135,0.72)" : "rgba(80,18,32,0.8)";
    context.fill();
    context.strokeStyle = item.kind === "good" ? "rgba(233,213,255,0.58)" : "rgba(252,165,165,0.65)";
    context.lineWidth = 1.5;
    context.stroke();
    context.shadowBlur = 0;
    context.direction = "rtl";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "800 15px Heebo, Arial";
    context.fillStyle = "#ffffff";
    context.fillText(item.label, item.x, item.y + 1);
    context.restore();
  }
}

function drawPlayer(context: CanvasRenderingContext2D, x: number, y: number, shieldActive: boolean) {
  context.save();
  if (shieldActive) {
    const shield = context.createRadialGradient(x, y, 18, x, y, 82);
    shield.addColorStop(0, "rgba(216,180,254,0.38)");
    shield.addColorStop(1, "rgba(168,85,247,0)");
    context.fillStyle = shield;
    context.beginPath();
    context.arc(x, y, 82, 0, Math.PI * 2);
    context.fill();
  }

  const shipGlow = context.createRadialGradient(x, y + 8, 12, x, y + 8, 78);
  shipGlow.addColorStop(0, "rgba(216,180,254,0.46)");
  shipGlow.addColorStop(1, "rgba(168,85,247,0)");
  context.fillStyle = shipGlow;
  context.beginPath();
  context.arc(x, y + 4, 78, 0, Math.PI * 2);
  context.fill();

  context.shadowColor = "rgba(216,180,254,0.72)";
  context.shadowBlur = 32;
  const body = context.createLinearGradient(x - 58, y - 28, x + 58, y + 30);
  body.addColorStop(0, "rgba(255,255,255,0.96)");
  body.addColorStop(0.42, "rgba(216,180,254,0.92)");
  body.addColorStop(1, "rgba(91,33,182,0.9)");

  context.beginPath();
  context.moveTo(x, y - 34);
  context.bezierCurveTo(x + 34, y - 18, x + 52, y + 3, x + 62, y + 22);
  context.lineTo(x + 24, y + 16);
  context.lineTo(x + 10, y + 34);
  context.lineTo(x, y + 21);
  context.lineTo(x - 10, y + 34);
  context.lineTo(x - 24, y + 16);
  context.lineTo(x - 62, y + 22);
  context.bezierCurveTo(x - 52, y + 3, x - 34, y - 18, x, y - 34);
  context.closePath();
  context.fillStyle = body;
  context.fill();
  context.strokeStyle = "rgba(255,255,255,0.78)";
  context.lineWidth = 1.7;
  context.stroke();

  const cockpit = context.createRadialGradient(x, y - 7, 3, x, y - 7, 18);
  cockpit.addColorStop(0, "rgba(255,255,255,0.98)");
  cockpit.addColorStop(1, "rgba(168,85,247,0.82)");
  context.fillStyle = cockpit;
  context.beginPath();
  context.ellipse(x, y - 6, 14, 18, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "rgba(255,255,255,0.62)";
  context.stroke();

  context.shadowColor = "rgba(168,85,247,0.8)";
  context.shadowBlur = 18;
  context.fillStyle = "rgba(216,180,254,0.86)";
  context.beginPath();
  context.moveTo(x - 18, y + 26);
  context.lineTo(x - 8, y + 48);
  context.lineTo(x, y + 28);
  context.lineTo(x + 8, y + 48);
  context.lineTo(x + 18, y + 26);
  context.closePath();
  context.fill();
  context.shadowBlur = 0;
  context.direction = "rtl";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "900 12px Heebo, Arial";
  context.fillStyle = "#ffffff";
  context.fillText("נביא נס", x, y + 16);
  context.restore();
}

function drawScreenOverlay(context: CanvasRenderingContext2D, game: GameSnapshot, width: number, height: number) {
  if (game.status === "playing") return;
  context.save();
  context.fillStyle = "rgba(0,0,0,0.58)";
  context.fillRect(0, 0, width, height);
  context.direction = "rtl";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#ffffff";
  context.font = "900 28px Heebo, Arial";
  context.fillText(game.status === "ready" ? gameTitle : "המשחק נגמר", width / 2, height / 2 - 34);
  context.font = "700 16px Heebo, Arial";
  context.fillStyle = "rgba(233,213,255,0.92)";
  context.fillText(game.status === "ready" ? "לחצו התחלה או רווח כדי להתחיל" : `ניקוד סופי: ${game.score}. לחצו התחלה מחדש`, width / 2, height / 2 + 8);
  context.restore();
}

function roundedRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  const limitedRadius = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + limitedRadius, y);
  context.lineTo(x + width - limitedRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + limitedRadius);
  context.lineTo(x + width, y + height - limitedRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - limitedRadius, y + height);
  context.lineTo(x + limitedRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - limitedRadius);
  context.lineTo(x, y + limitedRadius);
  context.quadraticCurveTo(x, y, x + limitedRadius, y);
  context.closePath();
}
