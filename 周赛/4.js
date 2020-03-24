
var hasValidPath = function(grid) {
    let f = true;
    let row = grid.length-1;
    let col = grid[0].length-1;
    let fn = (r,c,pr,pc,grid) => {
        if(r > row || r < 0 || c > col || c < 0) return false;
        if(r===row && c===col){
            return true;
        }
        let v = grid[r][c]
        let pv = grid[pr][pc]
        if (v === 1){
            if(pc + 1=== c){
                fn(c+1, r, pc+1, pr, grid);
            }else{
                fn(c-1, r, pc-1, pr, grid);
            }
        }else if(v===2){
            if (pr + 1 === r){ // 上面来
                fn(c, r+1, pc, pr+1)
            }else{
                fn(c, r-1, pc, pr-1)
            }

        }else if(v===3){
            if(pc + 1=== c){ // 左边
                fn(c, r+1, pc, pr+1, grid);
            }else{ // 下
                fn(c-1, r, pc-1, pr, grid);
            }
        }else if(v===4){
            if(pc - 1=== c){ // 有边
                fn(c, r+1, pc, pr+1, grid);
            }else{ // 下
                fn(c+1, r, pc+1, pr, grid);
            }

        }else if(v===5){
            if(pc + 1=== c){ // zuo
                fn(c, r-1, pc, pr-1, grid);
            }else{ // shang
                fn(c-1, r, pc-1, pr, grid);
            }
        }else{
            if(pc - 1=== c){ // you边
                fn(c, r-1, pc, pr-1, grid);
            }else{ // shang
                fn(c+1, r, pc+1, pr, grid);
            }
        }
    };
    fn(0,0,0,0,grid)
    return f;
}

console.log(hasValidPath([[1,2,1],[1,2,1]]))