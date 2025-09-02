/**
 * @file Defines and returns a random joke from the collection.
 * @module Jokes
 * @author Maria Jansson
 */

/**
 * A class for listing jokes and serving up a random one from the collection.
 */
export class Jokes {
  /**
   * Constructor for the class, adds a bunch of jokes.
   */
  constructor () {
    this.jokes = [
      'Why did the scarecrow win an award? Because he was outstanding in his field!',
      'I told my wife she was drawing her eyebrows too high. She looked surprised.',
      "Why don't skeletons fight each other? They don't have the guts.",
      'Are people born with photographic memories, or does it take time to develop?',
      'I can tell when people are being judgmental just by looking at them.',
      'The rotation of the Earth really makes my day.',
      "I'm on a whiskey diet. I've lost three days already.",
      'I used to play piano by ear, but now I use my hands.',
      "I told my computer I needed a break, and now it won't stop sending me KitKat ads.",
      'The world champion tongue twister got arrested. I hear they’re going to give him a tough sentence.'
    ]
  }

  /**
   * A function to deliver a random joke from the collection.
   *
   * @returns {string} - a random joke
   */
  getRandomJoke () {
    const randomIndex = Math.floor(Math.random() * this.jokes.length)
    return this.jokes[randomIndex]
  }
}
