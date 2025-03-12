const User = require('../models/user');

// GET all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET user by id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.getUserById(req.params.id);
        user ? res.status(200).json(user) : res.status(404).json({ message: 'User not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST register
app.post('/users/register', async (req, res) => {

});

// POST login
app.post('/users/login', async (req, res) => {

});

// POST logout
app.post('/users/logout', async (req, res) => {

});

// PUT update user
app.put('/users/:id', async (req, res) => {

});

// PATCH update user first name
app.patch('/users/:id/first_name', async (req, res) => {
    
});

// PATCH update user last name
app.patch('/users/:id/last_name', async (req, res) => {
    
});

// PATCH update user email
app.patch('/users/:id/email', async (req, res) => {

});

// PATCH update user password
app.patch('/users/:id/password', async (req, res) => {

});

// PATCH update user avatar
app.patch('/users/:id/avatar', async (req, res) => {

});

// DELETE user
app.post('/users', async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body;
        if (!name || !lastName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await User.createUser({ name, lastName, email, password });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT update user
app.put('/users/:id', async (req, res) => {
    try {
        const { name, lastName, email, password } = req.body;
        if (!name || !lastName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const user = await User.updateUser(req.params.id, { name, lastName, email, password });
        user ? res.status(200).json(user) : res.status(404).json({ message: 'User not found' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE user
app.delete('/users/:id', async (req, res) => {
    try {
        await User.deleteUser(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
