export function URLParamsFormat(urlTerm: string) {
  return new URLSearchParams(urlTerm).toString();
}
