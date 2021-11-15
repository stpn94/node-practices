//sum이라는 함수를 외부에서 불러와서 쓸꺼다.
module.exports = {
  sum: function () {
    var sum = 0;
    //sum[10,20,30] 이면 arguments[1] = 10, [2]= 20, [3]= 30 arguments는 유사배열이다.
    // 유사배열 배열객체로 만들어주는거
    Array.from(arguments).forEach(function (e) {
      sum += e;
    });

    return sum;
  },
  max: function () {
    // 제일 작은 값
    var max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(function (e) {
      max = e > max ? e : max;
    });
    return max;
  },
  min: function () {
    var min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(function (e) {
      min = e < min ? e : min;
    });

    return min;
  },
};
