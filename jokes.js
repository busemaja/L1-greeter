/**
 * Provides a collection of jokes.
 * @author Maria Jansson
 */

export class Jokes {
  constructor() {
    this.jokes = [
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "Why don't skeletons fight each other? They don't have the guts."
    ];
  }

  getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    return this.jokes[randomIndex];
  }
}