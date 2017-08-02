import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';

let router = express.Router();

router.post('/',(req, res) => {
  let file = req.body;
  file._id - new mongodb.ObjectID(req.body._id);
  database.db.collection('files').save(file).then(()=> {
    res.end();
  })
})

// GET products
router.get('/', (req, res) => {
  database.db.collection('products').find().toArray().then((products)=>{
    res.json(products);
  })
});
router.delete('/:id', (req, res) =>{
  let fileId= new mongodb.ObjectID(req.params['id']);
  database.db.collection('files').remove({_id: fileId}).then(()=>{
    res.end();
  })
} )
export default router;
