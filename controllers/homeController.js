"use strict"


module.exports = {

    dashboard: (req, res) => {

        res.render('dashboard', {
            user: req.user,
            isAuthenticated: req.isAuthenticated()
        });

    },

    preventivos: (req, res) => {

        res.render('preventivos', {
            isAuthenticated: req.isAuthenticated()
        })

    },

    correctivos: (req, res) => {

        res.render('correctivos', {
            isAuthenticated: req.isAuthenticated()
        })

    }

};