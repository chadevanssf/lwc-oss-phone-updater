const pg = require('pg');

//const IS_DEBUG = process.env.NODE_ENV !== 'production';

const apiLoader = {};
const validEndpoints = ['update'];

apiLoader.updateGet = function (req, res) {
    res.send(
        `sample json for POST:<br><br>{ firstName: 'fn', lastName: 'ln', email: 'e@mail.com', phone: '123-456-7890' }`
    );
};
apiLoader.updatePost = function (req, res) {
    pg.connect(process.env.DATABASE_URL, function (connErr, conn, done) {
        // watch for any connect issues
        if (connErr) {
            console.log(connErr);
            res.status(400).json({ error: connErr.message });
        }
        conn.query(
            'UPDATE salesforce.Contact SET Phone = $1, MobilePhone = $1 WHERE LOWER(FirstName) = LOWER($2) AND LOWER(LastName) = LOWER($3) AND LOWER(Email) = LOWER($4)',
            [
                req.body.phone.trim(),
                req.body.firstName.trim(),
                req.body.lastName.trim(),
                req.body.email.trim()
            ],
            function (connUpdateErr, connResult) {
                if (connUpdateErr != null || connResult.rowCount === 0) {
                    conn.query(
                        'INSERT INTO salesforce.Contact (Phone, MobilePhone, FirstName, LastName, Email) VALUES ($1, $2, $3, $4, $5)',
                        [
                            req.body.phone.trim(),
                            req.body.phone.trim(),
                            req.body.firstName.trim(),
                            req.body.lastName.trim(),
                            req.body.email.trim()
                        ],
                        function (connInsertErr, connInsertResult) {
                            done();
                            if (connInsertErr) {
                                res.status(400).json({
                                    error: connInsertErr.message
                                });
                            } else {
                                // this will still cause jquery to display 'Record updated!'
                                // eventhough it was inserted
                                res.json(connInsertResult);
                            }
                        }
                    );
                } else {
                    done();
                    res.json(connResult);
                }
            }
        );
    });
};

apiLoader.register = function (expressApp, rootUrl, express) {
    expressApp.get(rootUrl, (req, res) => {
        res.json({ success: true, endpoints: validEndpoints });
    });
    expressApp.get(rootUrl + '/update', (req, res) => {
        this.updateGet(req, res);
    });
    expressApp.post(
        rootUrl + '/update',
        express.json({ type: '*/*' }),
        (req, res) => {
            this.updatePost(req, res);
        }
    );
};

module.exports = apiLoader;
