

/**
 * 暴力法
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 逐行遍历
    for(let i = 0; i < board.length; i++){
        let hash = {}
        for(let j = 0; j < board[i].length; j++){
            if(!hash[board[i][j]])hash[board[i][j]] = 1
            else {
                if (board[i][j] !== '.'){return false}
            }
        }
    }

    // 逐列遍历
    for(let j = 0; j < board[0].length; j++){
        let hash = {}
        for(let i = 0; i < board.length; i++){
            if(!hash[board[i][j]])hash[board[i][j]] = 1
            else {
                if (board[i][j] !== '.'){return false}
            }
        }
    }

    // 9格遍历

};