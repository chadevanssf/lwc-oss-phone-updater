//const IS_DEBUG = process.env.NODE_ENV !== 'production';

const apiLoader = {};
const validEndpoints = ['search'];

apiLoader.updateGet = function (req, res) {
    res.send(
        `sample json for POST:<br><br>{ firstName: 'fn', lastName: 'ln', email: 'e@mail.com', phone: '123-456-7890' }`
    );
};
apiLoader.updatePost = function (req, res) {
    res.json({ found: true });
};

apiLoader.register = function (expressApp, rootUrl) {
    expressApp.get(rootUrl, (req, res) => {
        res.json({ success: true, endpoints: validEndpoints });
    });
    expressApp.get(rootUrl + '/update', (req, res) => {
        this.updateGet(req, res);
    });
    expressApp.post(rootUrl + '/update', (req, res) => {
        this.updatePost(req, res);
    });
};

module.exports = apiLoader;
