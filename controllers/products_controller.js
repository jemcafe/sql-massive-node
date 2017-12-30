module.exports = {
    create: ( req, res, next ) => {
        const dbInst = req.app.get('db');  // An instance of the database
        const { name, description, price, imageurl } = req.body;
        // The arguments are for the parameters in the sql file  
        dbInst.create_product( [name, description, price, imageurl] ).then( () => {
            res.status(200).send() 
        }).catch( () => { 
            res.status(500).send()
        });
    },
    getOne: ( req, res, next ) => {
        const dbInst = req.app.get('db');
        // The arguments are for the parameters in the sql file
        dbInst.read_product( [req.params.id] ).then( product => {
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
        // The arguments are for the parameters in the sql file
        dbInst.update_product( [req.params.id, req.query.desc] ).then( () => {
            res.status(200).send() 
        }).catch( () => { 
            res.status(500).send()
        });
    },
    delete: ( req, res, next ) => {
        const dbInst = req.app.get('db');
        // The arguments are for the parameters in the sql file
        dbInst.delete_product( [req.params.id] ).then( () => {
            res.status(200).send() 
        }).catch( () => { 
            res.status(500).send()
        });
    }
}