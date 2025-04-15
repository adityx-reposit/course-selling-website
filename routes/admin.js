const { Router } = require("express");

const adminRouter = Router();

// adminRouter.use(adminmiddleware)

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "heloo",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "welcome back",
  });
});

adminRouter.post("/createCourse", (req, res) => {
  res.json({
    message: "create a course",
  });
});
adminRouter.post("/changeCourse", (req, res) => {
  res.json({
    message: "change the course here",
  });
});

adminRouter.put("/course/bulk", (req, res) => {
  res.json({
    message: "see all the courses here",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
