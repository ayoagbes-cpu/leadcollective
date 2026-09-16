export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ink rounded-[34px] p-2.5">
      <div className="bg-shell rounded-[26px] overflow-hidden">
        <div className="px-5 pt-3.5 flex justify-between text-[11px] font-mono text-faint">
          <span>9:41</span>
          <span>▮▮▮</span>
        </div>
        {children}
      </div>
    </div>
  );
}
