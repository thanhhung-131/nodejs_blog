class SiteController {
  // [GET] /
  index(req, res) {
    res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

// Xuat module ra ngoai
module.exports = new SiteController();
