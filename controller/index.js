// calling model for moongoosedb
const Index = require("../model/index")

exports.getHome = (req, res, next) => {
    Index.find({})
        .then(alish => {
            res.render("index.ejs", {
                alish
            })
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postHome = (req, res, next) => {
    console.log(req.body)
    Index.create({
        ...req.body
    })
        .then(result => {
            console.log("Success");
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
        })
}


exports.getEdited = (req, res, next) => {
    Index.findById(req.params.id)
        .then(data => {
            res.render('edit.ejs', {
                data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.update = (req, res) => {
    Index.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true }).then(e => {
        res.redirect('/')
    }).catch(err => {
        console.log(err);
    })
}
exports.getDeleted = (req, res, next) => {
    Index.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log("Deleted successfully");
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
        })
}



