const Course = require('./models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then((course) => {
        res.render('courses/show.hbs')
      })
      .catch(next);
  }
}

// Xuat module ra ngoai
module.exports = new CourseController();
