/**
 * @file Greets the user and provides a personalized message.
 * @module App
 * @author Maria Jansson
 */
import { Jokes } from "./jokes.js"

let name = process.argv[2] || "friend"

console.log("Hello " + name + "!\n" 
  + "Here's a little something for you:")

const joke = new Jokes()
console.log(joke.getRandomJoke())