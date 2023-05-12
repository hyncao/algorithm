// 原题目：实现一个批量请求函数，能够限制并发量（滴滴）

// 个人理解：
// 该函数接受两个参数，requestList Request 数组）和 concurrency （并发数）
// 返回：所有 request 结果的数组（默认所有 request 均 resolve）

// 辅助函数
const delay = (t = 1000, content) => new Promise(res => setTimeout(res, t, content));

const mockRequest = () => [1, 2, 3, 3, 1].map((i, index) => [delay, [i * 1000, index]]);

// Request 类型示例
// [(a, b) => a + b, [3, 5]];
// [delay, [1, '我是响应结果']];

/**
 * type Request = [function, any[]];
 *
 * @param {*} requestList Request[]
 * @param {*} concurrency Number
 * @returns Promise[]
 */
const request = async (requestList, concurrency) => {
  const fn = async (list, prev) => {
    const current = await Promise.all(list.map(i => i[0].call(null, ...i[1])));
    return prev.concat(current);
  };
  let res = [];
  let i = 0;
  while (i < requestList.length) {
    res = await fn(requestList.slice(i, i + concurrency), res);
    i += concurrency;
  }
  return res;
};

const requestList = mockRequest();
const concurrency = 3;

const excute = () => {
  console.time('执行用时');
  request(requestList, concurrency).then(res => {
    console.log(res);
    console.timeEnd('执行用时');
  });
};

excute();
