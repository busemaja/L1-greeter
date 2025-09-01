/**
 * Greets the user and provides a personalized message.
 * @author Maria Jansson
 */
import { Jokes } from "./jokes.js"

let name = process.argv[2]
if (!name) {
  name = "friend"
}
console.log("Hello " + name + "!")
console.log("Here's a little something for you:")

const joke = new Jokes()
console.log(joke.getRandomJoke())