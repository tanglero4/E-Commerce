const router = require('express').Router();
const { Category, Product } = require('../../models');
router.get('/', async (req, res) => {
  try{
    const categoryDetail = await Category.findAll ({
      include: [{model: Product}]
    })
    res.status(200).json(categoryDetail)
  }
  
  catch (err) {
    res.status(500).json(err)
  }
});
router.get('/:id', async (req, res) => {
  try{
    const categoryDetail = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    if (!categoryDetail) {
      res.status(404).json({message: "No category found"})
      return
    }
  }
  catch (err) {
    res.status(500).json(err)
  }
});
router.post('/', async (req, res) => {
  try{
    const categoryDetail = await Category.create(req.body)
    res.status(200).json(categoryDetail)
  }
  catch (err) {
    res.status(400).json(err)
  }
});
router.put('/:id', async (req, res) => {
  try{
    const categoryDetail = await Category.update(req.body, {
      where: {id: req.params.id}
    })
    if (!categoryDetail) {
      res.status(404).json({message: "no categories"})
      return
    }
  }
  catch (err) {
    res.status(500).json(err)
  }
});
router.delete('/:id', async (req, res) => {
  try{
    const categoryDetail = await Category.destroy({
      where: {id: req.params.id}
    })
    if (!categoryDetail) {
      res.status(404).json({message: "no categories"})
      return
    }
  }
  catch (err) {
    res.status(500).json(error)
  }
});

module.exports = router;