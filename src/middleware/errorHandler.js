module.exports = function(err, req, res, next) {
    let message = err.flashMessage || "Something went wrong";
    let redirect = err.redirect || "/";

    if (req.path === "/weather") {
        message = "Could not fetch weather data. Please try again.";
        redirect = "/home";
    } else if (req.path.startsWith("/save")) {
        message = "Could not save city. Please try again.";
        redirect = "/home";
    } else if (req.path === "/register") {
        redirect = "/account/register";
    } else if (req.path === "/login") {
        redirect = "/account/login";
    }

    req.flash("error", message);
    return res.redirect(redirect);
};
