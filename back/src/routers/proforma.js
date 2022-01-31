const express = require('express')
const router = express.Router();
const proforma = require('../controller/ctrl_proforma')



router.get('/proforma', proforma.get)
router.get('/proforma/:id', proforma.get_only)
//router.post ('/', proforma.add)
//router.patch ('/proforma/:id', proforma.add_proforma)
//router.put('/:id', proforma.update)
//router.delete('/:id', proforma.delete)





module.exports = router;