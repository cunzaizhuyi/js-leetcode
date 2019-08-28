// 819 easy 最常见的单词

// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。
// 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
//
//
// 示例：
// 输入:
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// 输出: "ball"
// 解释:
// "hit" 出现了3次，但它是一个禁用的单词。
// "ball" 出现了2次 (同时没有其他单词出现2次)，所以它是段落里出现次数最多的，且不在禁用列表中的单词。
// 注意，所有这些单词在段落里不区分大小写，标点符号需要忽略（即使是紧挨着单词也忽略， 比如 "ball,"），
// "hit"不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。
//  
//
// 说明：
// 1 <= 段落长度 <= 1000.
// 1 <= 禁用单词个数 <= 100.
// 1 <= 禁用单词长度 <= 10.
// 答案是唯一的, 且都是小写字母 (即使在 paragraph 里是大写的，即使是一些特定的名词，答案都是小写的。)
// paragraph 只包含字母、空格和下列标点符号!?',;.
//     不存在没有连字符或者带有连字符的单词。
// 单词里只包含字母，不会出现省略号或者其他标点符号。


/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.split(/,|\.|\?|!|\s|;|'/)
    let hash = {}
    for(let i = 0; i < words.length; i++){
        let desStr = words[i].toLowerCase().trim()
        if(desStr){ // 单词分割出来有空串
            if(!hash[desStr]) hash[desStr]=1
            else{
                hash[desStr]++;
            }
        }
    }

    let kv = Object.entries(hash)
    kv.sort((a, b) => {
        if(a[1] >= b[1]){
            return -1
        } else {
            return 1;
        }
    })
    for(let i = 0; i < kv.length; i++){
        if(banned.indexOf(kv[i][0].toLowerCase()) === -1){
            return kv[i][0]
        }
    }
};

// console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ['hit']))

console.log(mostCommonWord("j. t? T. z! R, v, F' x! L; l! W. M; S. y? r! n; O. q; I? h; w. t; y; X? y, p. k! k, h, J, r? w! U! V; j' u; R! z. s. T' k. P? M' I' j! y. P, T! e; X. w? M! Y, X; G; d, X? S' F, K? V, r' v, v, D, w, K! S? Q! N. n. V. v. t? t' x! u. j; m; n! F, V' Y! h; c! V, v, X' X' t? n; N' r; x. W' P? W; p' q, S' X, J; R. x; z; z! G, U; m. P; o. P! Y; I, I' l' J? h; Q; s? U, q, x. J, T! o. z, N, L; u, w! u, S. Y! V; S? y' E! O; p' X, w. p' M, h! R; t? K? Y' z? T? w; u. q' R, q, T. R? I. R! t, X, s? u; z. u, Y, n' U; m; p? g' P? y' v, o? K? R. Q? I! c, X, x. r' u! m' y. t. W; x! K? B. v; m, k; k' x; Z! U! p. U? Q, t, u' E' n? S' w. y; W, x? r. p! Y? q, Y. t, Z' V, S. q; W. Z, z? x! k, I. n; x? z; V? s! g, U; E' m! Z? y' x? V! t, F. Z? Y' S! z, Y' T? x? v? o! l; d; G' L. L, Z? q. w' r? U! E, H. C, Q! O? w! s? w' D. R, Y? u. w, N. Z? h. M? o, B, g, Z! t! l, W? z, o? z, q! O? u, N; o' o? V; S! z; q! q. o, t! q! w! Z? Z? w, F? O' N' U' p? r' J' L; S. M; g' V. i, P, v, v, f; W? L, y! i' z; L? w. v, s! P?"
,["m","q","e","l","c","i","z","j","g","t","w","v","h","p","d","b","a","r","x","n"]))

// console.log(mostCommonWord("a, a, a, a, b,b,b,c, c",
//     ["a"]))

