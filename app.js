const express = require('express');
const path = require('path');
const userModel = require('./models/user');
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render("index");
})

app.post('/create', async (req, res) => {
  let { name, email, image } = req.body;

  let userExists = await userModel.findOne({email: email});
  if (userExists) {
    res.render("index", {msg: "User already exists!"})
  } else {

    //When both name are same you can directly pass variable name
    let createdUser = await userModel.create({
      name,
      email,
      image
    })

    res.redirect("read");
  }
})

app.get('/read', async (req, res) => {
  let allUsers = await userModel.find();

  res.render("read", { users: allUsers });
})

app.get('/edit/:userid', async (req, res) => {
  let user = await userModel.findOne({_id: req.params.userid});
  res.render("edit", {user: user});
})

app.post('/update', async (req, res) => {
  let {id, name, email, image} = req.body;

  let user = await userModel.findOneAndUpdate({_id: id},
    {name, email, image},
    {new: true}
  );
  res.redirect("read");
})

app.get('/delete/:userid', async (req, res) => {
  let userID = req.params.userid;

  let delUser = await userModel.findOneAndDelete({_id: userID})

  res.redirect("/read")
})

app.listen(3000)