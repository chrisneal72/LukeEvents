const Page = require("../models/page");

// @desc    Get single page
// @route   GET /api/page/:id
exports.getPage = async (req, res, next) => {
  const page = await Page.find(
    { title: req.params.id }
  );

  res.status(200).json({ success: true, data: page });
};

// @desc    Create page
// @route   POST /api/page
exports.createPage = async (req, res, next) => {
  const page = await Page.create(req.body);

  res.status(201).json({ success: true, data: page });
};

// @desc    Update page
// @route   PUT /api/page/:id
exports.updatePage = async (req, res, next) => {
  const page = await Page.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: page });
};

// @desc    Delete page
// @route   DELETE /api/page/:id
exports.deletePage = async (req, res, next) => {
  const page = await Page.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, data: {} });
};
