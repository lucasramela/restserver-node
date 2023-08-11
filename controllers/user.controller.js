
    const { response, request } = require('express');
    

    const getUser = (req = request, res = response) => {

        // req para los querys params
        //const query = req.query;
        const { q, palabra, apikey } = req.query;
        
        res.json({

            msg: 'get API - controller', 
            q,
            palabra,
            apikey

        })

    }

    const putUser = (req = request, res = response) => {

        // req para los params
        //const id = req.params.id;
        const { id } = req.params;

        // const body = req.body;
        const {nombre, edad} = req.body;

        res.json({

            msg: 'put API - controller',
            nombre,
            edad,
            id

        })

    }

    const postUser = (req = request, res = response) => {

        const {nombre, edad} = req.body;

        res.json({

            msg: 'post API - controller',
            nombre,
            edad

        })

    }

    const patchUser = (req = request, res = response) => {

        const {nombre, edad} = req.body;

        res.json({

            msg: 'patch API - controller',
            nombre,
            edad

        })

    }

    const deleteUser = (req = request, res = response) => {

        const {nombre, edad} = req.body;

        res.json({

            msg: 'delete API - controller',
            nombre,
            edad

        })

    }

    module.exports = {

        getUser,
        putUser,
        postUser,
        patchUser,
        deleteUser

    }