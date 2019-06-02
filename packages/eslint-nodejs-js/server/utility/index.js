module.exports = {
  convertDate(date, format) {
    if (!date) {
      return date;
    }
    if (!(date instanceof Date)) {
      const dateFormat = new Date(+date || date);
      if (String(dateFormat) === 'Invalid Date') {
        return date;
      }
      return module.exports.convertDate(dateFormat, format);
    }
    let str = format;
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    };
    if (/(Y+)/.test(format)) {
      str = str.replace(RegExp.$1,
        (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }

    Object.keys(o).map((k) => {
      if (new RegExp(`(${k})`).test(format)) {
        str = str.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k].toString()
            : `00${o[k]}`.substr(o[k].toString().length),
        );
      }
      return null;
    });

    if (new RegExp('(w+)').test(format)) {
      str = str.replace(RegExp.$1, week[date.getDay()]);
    }

    return str;
  },
};
