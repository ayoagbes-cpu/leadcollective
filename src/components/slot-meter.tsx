export function SlotMeter({ taken, cap }: { taken: number; cap: number }) {
  const left = cap - taken;
  return (
    <div className="flex gap-2">
      {Array.from({ length: taken }).map((_, i) => (
        <div key={`t-${i}`} className="flex-1 h-2 rounded-full bg-terracotta" />
      ))}
      {Array.from({ length: left }).map((_, i) => (
        <div key={`e-${i}`} className="flex-1 h-2 rounded-full bg-sand" />
      ))}
    </div>
  );
}
