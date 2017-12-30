module.exports = {
    create: ( req, res, next ) => {
        const dbInst = req.app.get('db');  // An instance of the database
        dbInst.create_product().then( () => {
            res.status(200).send() 
        }).catch( () => { 
            res.status(500).send()
        });
    },
    getOne: ( req, res, next ) => {
        const dbInst = req.app.get('db');

        dbInst.read_product().then( product => {
            res.status(200).send( product ) 
        }).catch( () => { 
            res.status(500).send()
        });
    },
    getAll: ( req, res, next ) => {
        const dbInst = req.app.get('db');

        dbInst.read_products().then( products => {
            res.status(200).send( products ) 
        }).catch( () => { 
            res.status(500).send()
        });
    },
    update: ( req, res, next ) => {
        const dbInst = req.app.get('db');

        dbInst.update_product().then( () => {
            res.status(200).send() 
        }).catch( () => { 
            res.status(500).send()
        });
    },
    delete: ( req, res, next ) => {
        const dbInst = req.app.get('db');

        dbInst.delete_product().then( () => {
            res.status(200).send() 
        }).catch( () => { 
            res.status(500).send()
        });
    }
}