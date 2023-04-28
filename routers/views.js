const express = require('express');
const { config } = require('../config/config');
const router = express.Router();

router.get(
  '/pages/:folder1/:filename',
  async (req, res) => {
    const { folder1, filename } = req.params;
    res.render(`../pages/${folder1}/${filename}`);
  }
);

router.get(
  '/pages/:filename',
  async (req, res) => {
    const { filename } = req.params;
    res.render(`../pages/${filename}`);
  }
);

router.get(
  '/v2/:folder1/:filename',
  async (req, res) => {
    const { folder1, filename } = req.params;
    res.render(
      'v2/layout',
      {
        page: './login',
        role: config.role,
      },
    );
  }
);

router.get(
  '/v2/:filename',
  async (req, res) => {
    const { filename } = req.params;
    res.render(
      '../v2/layout',
      {
        page: `./${filename}`,
        role: config.role,
      });
  }
);

module.exports = router;
