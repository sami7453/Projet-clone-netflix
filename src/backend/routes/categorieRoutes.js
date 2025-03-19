const Categorie = require('../models/categorie');

// ----------------- CRUD -----------------

// GET all categories
app.get('/categories', async (req, res) => {
    try {
        const categories = await Categorie.getAllCategories();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET category by id
app.get('/categories/:id', async (req, res) => {
    try {
        const category = await Categorie.getCategorieById(req.params.id);
        category ? res.status(200).json(category) : res.status(404).json({ message: 'Category not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST category
app.post('/categories', async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const category = await Categorie.createCategorie(name);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT category
app.put('/categories/:id', async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const category = await Categorie.updateCategorie(req.params.id, name);
        category ? res.status(200).json(category) : res.status(404).json({ message: 'Category not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE category
app.delete('/categories/:id', async (req, res) => {
    try {
        const category = await Categorie.deleteCategorie(req.params.id);
        category ? res.status(200).json(category) : res.status(404).json({ message: 'Category not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
