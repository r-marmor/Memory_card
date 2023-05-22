1. Start a new React project //DONE
2. Create a game state in your root App component:
    - Create a `score` state with a default value of 0.
    - Create a `highScore` state with a default value of 0.
    - Create a `clickedCards` state as an empty array to keep track of clicked cards.
    - Create a `cards` state as an array of card objects. Each card object should have a unique `id`.

3. Create a `Card` component that takes `id` and `handleClick` as props:
    - Render an image or any content you want for the card.
    - Attach an `onClick` event listener that calls the `handleClick` function with `id` as argument.

4. Back to the App component, define the `handleClick` function:
    - This function takes `id` as argument.
    - Check if the clicked card's `id` is in the `clickedCards` array.
        - If it is, the game ends: 
            - Reset the `score` to 0.
            - Empty the `clickedCards` array.
        - If it isn't, the game continues:
            - Increment the `score` by 1.
            - Add the clicked card's `id` to the `clickedCards` array.
            - If the new `score` is greater than `highScore`, update `highScore` with the new `score`.

5. Shuffle the `cards` array after each click event (there are many algorithms to do this; Fisher-Yates is a popular one).

6. In the `render` method of the App component, map the `cards` array to a list of `Card` components, passing `id` and `handleClick` to each.

7. Also in the `render` method, display the current `score` and `highScore`.

8. Implement CSS for styling as per your requirements.