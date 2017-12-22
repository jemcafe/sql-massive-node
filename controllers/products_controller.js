module.exports = {
    create (req, res, next) {
        const dbInstance = req.app.get('db');

        dbInstance.create_products( )
                  .then( () => res.status(200).send() )
                  .catch( err => console.error(err) );
    },
    getOne (req, res) {
        const dbInstance = req.app.get('db');

        dbInstance.create_products( )
                  .then( product => res.status(200).send( product ) )
                  .catch( err => console.error(err) );
    },
    getAll (req, res) {
        const dbInstance = req.app.get('db');

        dbInstance.create_products( )
                  .then( products => res.status(200).send( products ) )
                  .catch( err => console.error(err) );
    },
    update (req, res) {
        const dbInstance = req.app.get('db');

        dbInstance.create_products( )
                  .then( () => res.status(200).send() )
                  .catch( err => console.error(err) );
    },
    delete (req, res) {
        const dbInstance = req.app.get('db');

        dbInstance.create_products( )
                  .then( () => res.status(200).send() )
                  .catch( err => console.error(err) );
    }
}