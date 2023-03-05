class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send('NEWS DETAILS!');
  }
}

// Xuat module ra ngoai
module.exports = new NewsController();
