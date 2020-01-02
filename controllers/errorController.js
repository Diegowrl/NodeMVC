exports.error404 = (req,res,next) => {
    res.render('404',{
        pageTitle:"Not found",
        path : '',
        formatCSS: true,
        productCSS:true,
        activeAddProduct:true
    });
};