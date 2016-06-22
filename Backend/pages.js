exports.mainPage = function(req, res) {
    res.render('index', {
        pageTitle: 'Lost & Found'
    });
};

exports.addAdvertPage = function(req, res) {
    res.render('addAdvert', {
        pageTitle: 'Додати оголошення'
    });

exports.advertDetailsPage = function(req, res) {
    res.render('advert', {
        pageTitle: 'Оголошення'
    });
};