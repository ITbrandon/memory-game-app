# memory-game-app

## Web Developer Fast Track

## Brandon Iticka

### Evaluation: During My Time Coding this Website I encountered a couple annoying bugs mainly while developing the Memory Game itself here Are Some Bugs That I Encountered And How I fixed it

### Bug 1: Finding the Index of the Color in the ClassList for the Squares: I need to find the index of the color because in order to get a match the colors would need to be the Same.

### Solution: I created a helper Method that would find the index of the color in the square I did this in order to make it dynamic so if someone were to add more Tailwind css to the square the game would still function

### Bug 2: Setting the Lives and having them transfer over to the Game: I wanted to add a feature that allowed players to set the number of lives (1-20) they wanted in the Memory Game, however I kept encountering bugs because the settings where you set the Lives and the Game were in two seperate files

### Solution: I was able to use Local Storage to set the Lives and I was Able to get them in my other files. I Discover this method when I was using Local Storage in another project and then an Idea just sparked in my head and I decided to try it out on this project and lucky enough it worked
