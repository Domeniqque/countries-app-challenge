export function numberWithDots(x: any): string {
  if (!x) return '';

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
