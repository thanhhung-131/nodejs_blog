const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MineController {
  // [GET] /mine/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        res.render("mine/stored-courses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /mine/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("mine/trash-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

// Xuat module ra ngoai
module.exports = new MineController();
