const IS_DEBUG = process.env.NODE_ENV != 'production';

const apiLoader = {};
const validEndpoints = ['search'];

apiLoader.search = function (req, res) {
    res.json({ found: true });
};

apiLoader.register = function (expressApp, rootUrl) {
    expressApp.get(rootUrl, (req, res) => {
        res.json({ success: true, endpoints: validEndpoints });
    });
    expressApp.get(rootUrl + '/search', (req, res) => {
        this.search(req, res);
    });
};

module.exports = apiLoader;
