const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [{
  id: 1,
  title: "Todo 1",
  description: "This is todo 1",
  completed: false,
}, {
  id: 2,
  title: "Todo 2",
  description: "This is todo 2",
  completed: false,
}, {
  id: 3,
  title: "Todo 3",
  description: "This is todo 3",
  completed: false,

}, {
  id: 4,
  title: "Todo 4",
  description: "This is todo 4",
  completed: false,
}, {

  id: 5,
  title: "Todo 5",
  description: "This is todo 5",
  completed: false,
}]

app.get("/todo", (req, res) => {
  const todo = todos.find(t => t.id == req.query.id);
  res.json({
    todo
  })
})

app.get("/todos", (req, res) => {
  const randomTodos = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({
    todos: randomTodos,
  })
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  })

});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10)
  })

})

const QUOTES = [{
  id: 1,
  quote: "Opportunity does not knock, it presents itself when you beat down the door."
}, 
{
  id: 2,
  quote: "No bird soars too high if he soars with his own wings."
}, 
{
  id: 3,
  quote: "I am an optimist. It does not seem too much use being anything else."
}, 
{
  id: 4,
  quote: "The only way to do great work is to love what you do."
}, 
{
  id: 5,
  quote: "Success is not the key to happiness. Happiness is the key to success."
}, 
{
  id: 6,
  quote: "Believe you can and you're halfway there."
}, 
{
  id: 7,
  quote: "Act as if what you do makes a difference. It does."
}, 
{
  id: 8,
  quote: "The future belongs to those who believe in the beauty of their dreams."
}, 
{
  id: 9,
  quote: "Don't watch the clock; do what it does. Keep going."
}, 
{
  id: 10,
  quote: "You are never too old to set another goal or to dream a new dream."
}]

const JOKES = [{
  id: 1,
  joke: "Why don’t scientists trust atoms? Because they make up everything!"
},
{
  id: 2,
  joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
},
{
  id: 3,
  joke: "Why don’t skeletons fight each other? They don’t have the guts."
},
{
  id: 4,
  joke: "What do you get when you cross a snowman and a vampire? Frostbite."
},
{
  id: 5,
  joke: "Why did the bicycle fall over? Because it was two-tired!"
},
{
  id: 6,
  joke: "What’s orange and sounds like a parrot? A carrot!"
},
{
  id: 7,
  joke: "Why don’t programmers like nature? It has too many bugs."
},
{
  id: 8,
  joke: "Why did the math book look sad? Because it had too many problems."
},
{
  id: 9,
  joke: "What do you call fake spaghetti? An impasta!"
},
{
  id: 10,
  joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
}]


app.get("/randomquote" , (req , res) => {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  const randomQuote = QUOTES[randomIndex];

  res.json(randomQuote);
})

app.get("/randomjoke" , (req , res) => {
  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const randomJoke = JOKES[randomIndex];

  res.json(randomJoke);
})
app.listen(8080)
