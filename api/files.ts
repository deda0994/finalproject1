import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';
let router = express.Router();


// ADD OR EDIT FILE
router.post('/', (req, res) => {
  let file = req.body;
  file._id = new mongodb.ObjectID(req.body._id);
  database.db.collection('files').save(req.body).then((newfile) => {
    res.json(newfile);
  })
});

// GET FILES
router.get('/', (req, res) => {
  database.db.collection('files').find().toArray().then((file)=>{
    res.json(file);
  })
});

// DELETE FILE
router.delete('/:id', (req, res) => {
  let fileId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('files').remove({_id:fileId}).then(()=> {
    res.sendStatus(200);
  });
});

export default router;
