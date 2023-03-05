const Course = require('./models/Course')

class SiteController {
  // [GET] /
  index(req, res) {

    try {
      Course.find({}).then(
        courses => res.json(courses)
      )
    } catch (error) {
      res.status(404).json({error: 'Error!!!'})
    }
    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

// Xuat module ra ngoai
module.exports = new SiteController();
