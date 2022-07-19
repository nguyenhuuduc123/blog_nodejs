const course = require('../Models/course');
class SiteController {
  // [get] /home
  index(req, res) {
    course.find({}, function(err,docs){
  //       if(!err){
  //         res.json(docs)
  //       }
  //       else
  //       res.status(404).json({error : "loi"})
  course.find({}).
  then(courses => {
    courses = courses.map(course =>course.toObject());
    res.render('home',{course : courses})
  }).
  catch(err => next(err))
   });  
  // course.find({}).then().catch()
   // res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
