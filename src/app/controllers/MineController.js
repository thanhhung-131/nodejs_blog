const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MineController {
  // [GET] /mine/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('mine/stored-courses', {
          courses: multipleMongooseToObject(courses)
        });
      })
      .catch(next)
  }
}

// Xuat module ra ngoai
module.exports = new MineController();
