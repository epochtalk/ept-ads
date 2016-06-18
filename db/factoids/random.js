var path = require('path');
var dbc = require(path.normalize(__dirname + '/../db'));
var db = dbc.db;
var helper = dbc.helper;

module.exports = function() {
  var q = `
  SELECT *
  FROM factoids
  WHERE enabled = true
  ORDER BY random() limit 1;
  `;
  return db.sqlQuery(q)
  .then(function(rows) {
    if (rows.length > 0) { return rows[0]; }
    else { return; }
  })
  .then(helper.slugify);
};
