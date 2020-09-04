const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  options['separator'] = options['separator'] || '+';
  options['additionSeparator'] = options['additionSeparator'] || '|';
  let addition, result;
  if (options['additionRepeatTimes']) {
    addition =
      (options['addition'] + options['additionSeparator']).repeat(
        options['additionRepeatTimes'] - 1
      ) + options['addition'];
  } else {
    addition = options['addition'] || '';
  }
  if (options['repeatTimes']) {
    result =
      (str + addition + options['separator']).repeat(
        options['repeatTimes'] - 1
      ) +
      str +
      addition;
  } else {
    result = str + addition;
  }
  return result;
};
