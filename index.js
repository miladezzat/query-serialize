
const serialize = (req = {}, res = {}, next) => {
    let query = req.query;
    let conditions = [];
    for (const q in query) {
        if (!isNaN(query[q])) {
            conditions.push(numeric(q, query[q]));
        } else if (query[q] === true || query[q] === false) {
            conditions.push(boolean(q, query[q]));
        } else if (typeof query[q] === 'string') {
            if (query[q].toLowerCase() === "true" || query[q].toLowerCase() === "false") {
                conditions.push(boolean(q, query[q]));
            } else {
                conditions.push(string(q, query[q]));
            }
        }

    }
    req.conditions = { $and: conditions };
    next()
};

const numeric = (key, value) => ({ [key]: value });
const boolean = (key, value) => {
    if (typeof value === 'string') {
        if (value.toLowerCase() === "false") {
            return { [key]: false }
        } else {
            return { [key]: true }
        }
    }
    return { [key]: value };

};
const string = (key, value) => ({ [key]: value.trim() });
module.exports = serialize;