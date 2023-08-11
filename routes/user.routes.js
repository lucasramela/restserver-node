
    const { getUser, putUser, postUser, patchUser, deleteUser } = require('../controllers/user.controller');
    
    const { Router } = require('express');
    const router = Router();

    router.get('/', getUser);

    router.put('/:id', putUser);

    router.post('/', postUser);

    router.patch('/', patchUser);

    router.delete('/', deleteUser);


    module.exports  = router;