/* eslint-disable class-methods-use-this */

function numerics(key, value) {
  return { [key]: value };
}

function strings(key, value) {
  return { [key]: value.trim() };
}

function booleans(key, value) {
  if (typeof value === 'string' && value.toLowerCase() === 'false') {
    return { [key]: false };
  } if (typeof value === 'string' && value.toLowerCase() === 'true') {
    return { [key]: true };
  }
  return { [key]: value };
}

// eslint-disable-next-line no-unused-vars
function serialize(req = {}, res = {}, next) {
  const { query } = req;

  const conditions = [];
  Object.keys(query).map((key) => {
    if (!isNaN(query[key])) {
      conditions.push(numerics(key, query[key]));
    } else if (query[key] === true || query[key] === false) {
      conditions.push(booleans(key, query[key]));
    } else if (typeof query[key] === 'string') {
      if (query[key].toLowerCase() === 'true' || query[key].toLowerCase() === 'false') {
        conditions.push(booleans(key, query[key]));
      } else {
        conditions.push(strings(key, query[key]));
      }
    } else {
      conditions.push({ [key]: query[key] });
    }

    return conditions;
  });

  req.conditions = conditions;

  return next();
}

module.exports = serialize;
