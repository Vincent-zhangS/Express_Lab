const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    console.log('here');
});
app.listen(3030);

