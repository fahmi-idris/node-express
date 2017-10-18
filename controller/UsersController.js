/**
 * Get all home controller
 * @param req
 * @param res
 */
module.exports = function(req, res, next) {
  res.send(req.params.id);
}