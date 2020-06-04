//const IS_DEBUG = process.env.NODE_ENV !== 'production';

const apiLoader = {};
const validEndpoints = ['search'];

apiLoader.searchGet = function (req, res) {
    res.send(`sample json for POST:<br><br>{ term: 'keyword' }`);
};
apiLoader.searchPost = function (req, res) {
    res.json({ found: true });
};

apiLoader.register = function (expressApp, rootUrl) {
    expressApp.get(rootUrl, (req, res) => {
        res.json({ success: true, endpoints: validEndpoints });
    });
    expressApp.get(rootUrl + '/search', (req, res) => {
        this.searchGet(req, res);
    });
    expressApp.post(rootUrl + '/search', (req, res) => {
        this.searchPost(req, res);
    });
};

module.exports = apiLoader;
