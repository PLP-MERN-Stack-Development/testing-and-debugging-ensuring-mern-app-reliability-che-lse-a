const Bug = require('../models/bugModel');
const { validateBugPayload } = require('../utils/validation');
exports.createBug = async (req, res, next) => {
  try {
    const { valid, errors } = validateBugPayload(req.body);
    if (!valid) return res.status(400).json({ errors });
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) { next(err); }
};
exports.getBugs = async (req, res, next) => {
  try { const bugs = await Bug.find(); res.json(bugs); } catch (err) { next(err); }
};
exports.updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bug) return res.status(404).json({ message: 'Not found' });
    res.json(bug);
  } catch (err) { next(err); }
};
exports.deleteBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true });
  } catch (err) { next(err); }
};
