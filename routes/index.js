var express = require('express');
var router = express.Router();

/* GET home page. */
function index(req, res) {
    res.render('index', {
        title: 'Express & Hogan.js',
        partials: {
            index: 'index',
            css: 'css',
            js: 'js',
            header: 'header',
            footer: 'footer',
            'top-bar': 'top-bar',
            layout: 'layout'
        }
    });
}
router.get('/', index);
router.get('/index.html', index);

module.exports = router;