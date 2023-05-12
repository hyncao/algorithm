// 1604. 警告一小时内使用相同员工卡大于等于三次的人

// 力扣公司的员工都使用员工卡来开办公室的门。每当一个员工使用一次他的员工卡，安保系统会记录下员工的名字和使用时间。如果一个员工在一小时时间内使用员工卡的次数大于等于三次，这个系统会自动发布一个 警告 。

// 给你字符串数组 keyName 和 keyTime ，其中 [keyName[i], keyTime[i]] 对应一个人的名字和他在 某一天 内使用员工卡的时间。

// 使用时间的格式是 24小时制 ，形如 "HH:MM" ，比方说 "23:51" 和 "09:49" 。

// 请你返回去重后的收到系统警告的员工名字，将它们按 字典序升序 排序后返回。

// 请注意 "10:00" - "11:00" 视为一个小时时间范围内，而 "23:51" - "00:10" 不被视为一小时内，因为系统记录的是某一天内的使用情况。

// ========= 垃圾力扣的文案不对，正确理解是时间只能从小到大判断，即"00:10" - "23:51"而不是"23:51" - "00:10"
// ========= 给定的数组并不是按照打卡顺序给的，而是乱序的，给的都是某一个人 同一天 所有的打卡时间

// 输入：keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
// 输出：["daniel"]

const alertNames = (keyName, keyTime) => {
  const map = {};
  keyName.forEach((item, i) => {
    if (map[item]) {
      map[item].push(keyTime[i]);
    } else {
      map[item] = [keyTime[i]];
    }
  });

  const inOneHour = (start, end) => {
    const startDate = new Date(`2000/01/01 ${start}`);
    const endDate = new Date(`2000/01/01 ${end}`);
    if (endDate < startDate) return false;
    return (endDate - startDate) / 1000 / 60 / 60 <= 1;
  };

  return Object.keys(map)
    .filter(name => {
      const arr = map[name];
      let flag = false;
      arr.sort((a, b) => {
        if (a.substring(0, 2) === b.substring(0, 2)) {
          return a.substring(3) - b.substring(3);
        }
        return a.substring(0, 2) - b.substring(0, 2);
      });
      for (let i = 0; i < arr.length; i++) {
        if (flag && inOneHour(arr[i - 1], arr[i + 1])) {
          return true;
        } else if (i === arr.length - 2) {
          return false;
        }
        flag = inOneHour(arr[i], arr[i + 1]);
      }
      return flag;
    })
    .sort();
};

const keyName = ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b'];

const keyTime = ['23:20', '11:09', '23:30', '23:02', '15:28', '22:57', '23:40', '03:43', '21:55', '20:38', '00:19'];

console.log(alertNames(keyName, keyTime));
