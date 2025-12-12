function convertToTitle(columnNumber: number): string {
  if (columnNumber === 0) return "";

  columnNumber--; // 关键：将1-26映射到0-25
  const lastLetter = columnNumber % 26;

  const letter = String.fromCharCode(lastLetter + 65);
  const remaining = Math.floor(columnNumber / 26);

  return convertToTitle(remaining) + letter;
}
