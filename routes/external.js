var express = require("express");
var app = express();
session = require("express-session");
path = require("path");

module.exports = function(app, passport) {

    app.get("/", async function(req, res) {
        res.render('index.ejs')
    });
    app.get("/caregivers-team", async function(req, res) {
        res.render('caregivers-team.ejs')
    });

    app.get("/media", async function(req, res) {
        res.render('media.ejs')
    });
    app.get("/careers", async function(req, res) {
        res.render('careers.ejs')
    });
    app.get("/gallery", async function(req, res) {
        res.render('gallery.ejs')
    });
     app.get("/event", async function(req, res) {
        res.render('event.ejs')
    });
    app.get("/contact-us", async function(req, res) {
        res.render('contact-us.ejs')
    });
    app.get("/about-our-company", async function(req, res) {
        res.render('about-our-company.ejs')
    });
    app.get("/product-portfolio", async function(req, res) {
        res.render('product-portfolio.ejs')
    });

    app.get("/commitments", async function(req, res) {
        res.render('commitments.ejs')
    });
    app.get("/core-values", async function(req, res) {
        res.render('core-values.ejs')
    });
    app.get("/our-strengths", async function(req, res) {
        res.render('our-strengths.ejs')
    });


};