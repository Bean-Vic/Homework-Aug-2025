// Time O(81) ≈ O(1) — we visit each of the 81 cells at most once.
// Space O(1) — at most 9 digits per row/col/box, bounded by constants.
function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const ch = board[r][c];
      if (ch === '.') continue;

      const b = Math.floor(r / 3) * 3 + Math.floor(c / 3); // box index 0..8

      if (rows[r].has(ch) || cols[c].has(ch) || boxes[b].has(ch)) return false;

      rows[r].add(ch);
      cols[c].add(ch);
      boxes[b].add(ch);
    }
  }
  return true;
}
