// http://testone.woa.com/tool-manager#/tool-detail/plugin-manager?toolName=%E5%90%8E%E5%8F%B0%E5%BD%95%E5%88%B6%E5%9B%9E%E6%94%BE%E5%B7%A5%E5%85%B7&toolId=27&uniqueEngName=logreplay&hasPermission=true
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }
    const dp = new Array(s.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length).fill(false);
    }
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }
    let begin = 0;
    let maxLen = 1;
    for (let L = 2; L <= s.length; L++) {
        // 枚举左边界，左边界的上限设置可以宽松一些
        for (let i = 0; i < s.length; i++) {
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            let j = L + i - 1;
            // 如果右边界越界，就可以退出当前循环
            if (j >= s.length) {
                break;
            }

            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin+maxLen);
};