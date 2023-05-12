// 1797. 设计一个验证系统

// 你需要设计一个包含验证码的验证系统。每一次验证中，用户会收到一个新的验证码，这个验证码在 currentTime 时刻之后 timeToLive 秒过期。如果验证码被更新了，那么它会在 currentTime （可能与之前的 currentTime 不同）时刻延长 timeToLive 秒。

// 请你实现 AuthenticationManager 类：

// AuthenticationManager(int timeToLive) 构造 AuthenticationManager 并设置 timeToLive 参数。
// generate(string tokenId, int currentTime) 给定 tokenId ，在当前时间 currentTime 生成一个新的验证码。
// renew(string tokenId, int currentTime) 将给定 tokenId 且 未过期 的验证码在 currentTime 时刻更新。如果给定 tokenId 对应的验证码不存在或已过期，请你忽略该操作，不会有任何更新操作发生。
// countUnexpiredTokens(int currentTime) 请返回在给定 currentTime 时刻，未过期 的验证码数目。
// 如果一个验证码在时刻 t 过期，且另一个操作恰好在时刻 t 发生（renew 或者 countUnexpiredTokens 操作），过期事件 优先于 其他操作。

// 输入：
// ["AuthenticationManager", "renew", "generate", "countUnexpiredTokens", "generate", "renew", "renew", "countUnexpiredTokens"]
// [[5], ["aaa", 1], ["aaa", 2], [6], ["bbb", 7], ["aaa", 8], ["bbb", 10], [15]]
// 输出：
// [null, null, null, 1, null, null, null, 0]

// 通过测试得知：
// 1. 无论过期与否，tokenId始终存在，只是 countUnexpiredTokens 时不被记录
// 2. currentTime 输入的时候，一定是严格递增的，后一次操作中的 currentTime 一定大于前一次的 currentTime，测试用例会保证这一点

class AuthenticationManager {
  constructor(timeToLive) {
    this.timeToLive = timeToLive;
    this.tokenList = {};
  }

  checkOverdue(tokenId, currentTime) {
    if (tokenId in this.tokenList) {
      return this.tokenList[tokenId] + this.timeToLive > currentTime;
    }
    return false;
  }

  generate(tokenId, currentTime) {
    this.tokenList[tokenId] = currentTime;
  }

  renew(tokenId, currentTime) {
    if (this.checkOverdue(tokenId, currentTime)) {
      this.tokenList[tokenId] = currentTime;
    }
  }

  countUnexpiredTokens(currentTime) {
    let count = 0;
    Object.keys(this.tokenList).forEach(item => {
      this.checkOverdue(item, currentTime) && count++;
    });
    return count;
  }
}

const a = new AuthenticationManager(5);
a.renew('aaa', 1);
a.generate('aaa', 2);
console.log(a.countUnexpiredTokens(6));
a.generate('bbb', 7);
a.renew('aaa', 8);
a.renew('bbb', 10);
console.log(a.countUnexpiredTokens(15));
