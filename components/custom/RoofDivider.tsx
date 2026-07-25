export function RoofDividerInverted() {
  return (
    <div className="w-full overflow-hidden leading-none bg-primary">
      <svg viewBox="0 0 375 70" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <polygon points="0,0 375,0 375,50 180,12 0,45" fill="var(--background)" />
      </svg>
    </div>
  );
}

export function RoofDividerPrimary() {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg viewBox="0 0 375 70" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <polygon points="0,0 375,0 375,50 180,12 0,45" fill="var(--primary)" />
      </svg>
    </div>
  );
}
