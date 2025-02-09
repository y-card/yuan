export const isElemVisible = (el: HTMLElement, innerHeight: number) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top + 200; // 200 = buffer
  const elemBottom = rect.bottom;
  return elemTop < innerHeight && elemBottom >= 0;
};
