const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> 
{
    res.send('User List');
});  
router.get('/new',(req, res)=>
{
    res.send('New User Form');
}); 
router.post('/', (req, res) => {
    const firstName = req.body.firstName;
    const isValid = firstName !== ""; // Check if they are there, added

    if (isValid) {
        console.log(`Adding User: ${firstName}`);
        users.push({ name: firstName });
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!");
    }
    else {
        console.log("Error adding user!");
        res.render("users/new", { firstName: firstName });
    }
});

router.route("/:id").get((req,res)=>{
    res.send(`Getting User Data: ${req.params.id}`);
}).delete((req,res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req,res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});
const users = [{name:"Vincent"},{name:"Yes"}];
router.param("id",(req, res, next, id)=>{
    console.log(`Accesing user #${id}`);
    next();
});

module.exports =router;