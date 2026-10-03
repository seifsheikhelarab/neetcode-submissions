class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let subMat = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let val = board[row][col];

            if (val === ".") continue;
            else if (rows[row].has(val)) return false;
            else rows[row].add(val);

            if (cols[col].has(val)) return false;
            else cols[col].add(val);

            let idx = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            if (subMat[idx].has(val)) return false;
            else subMat[idx].add(val);
        }
    }

    return true;
}
}
