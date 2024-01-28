// adminte functionalities ezhuthaan login pg , login functions
// userinte login pg, functionalities signup,

const { CURSOR_FLAGS } = require("mongodb");
const { render, response } = require("../app");
const adminHelper = require("../helpers/adminHelper");

module.exports = {
  viewUserspage: (req, res, next) => {
    adminHelper.getUsersData().then(async (usersdata) => {
      console.log(
        "usersdatacdfefnekjln##@@@$$%%&&*%%$#@@!!@@@##$$$%",
        usersdata
      );
      res.render("admin/viewUser", {
        usersdata,
      });
    });
  },

  loginpage: (req,res,next) => {
    res.render("admin/adminLogin");
  },

  resultPage: (req, res) => {
    res.render("admin/result");
  },

  resultPage: (req, res, next) => {
    adminHelper.getcandidatedata().then(async (canddata) => {
      console.log("!!!!!@@#$%%%%%^^&&***((()))))(((^&^", canddata);
      res.render("admin/result", {
        canddata,
      });
    });
  },

  unblocked: async (req, res, next) => {
    console.log(req.body);

    try {
      adminHelper.dounblock(req.body.userId);
    } catch (error) {
      console.log(error);
    }
  },

  addcandidatePage: (req, res, next) => {
    res.render("admin/addCandidates");
  },

  Candidatesadd: (req, res) => {
    console.log(",2#R#$%");
    console.log(req.body);
    try {
      adminHelper.addCandidate(req.body).then((response) => {
        console.log(response);
        res.redirect("/admin/result");
      });
    } catch (error) {
      console.log(error);
    }
  },
};
