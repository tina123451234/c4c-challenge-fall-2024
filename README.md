This is the starter code for Code4Community's technical challenge for Fall 2024. 
For more detailed information about each of the parts of this starter code, check out the [`INFO.md`](INFO.md) file

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
```
git clone https://github.com/huang0h/c4c-challenge-fall-2024.git
```
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`


Overview
- This website aims to create a simple form to take in new partner information and stores it as tiles on the website. There would also be a button to delete the outdated partners.

Reflection
- Although the webiste is bare minimum, I tried to focus mostly on implementing the necessary key functions as I feel like I have a better understanding of how to change the looks of the webiste rather than the implementation of the elements. By focusing on the elements I was able to learn so much different techniques and frontend to backend communication. Even so, I have zero experience with React, javascript, so everything was a huge learning curve for me. I ended up watching a ton of Youtube tutorials, articles (Medium had a suprisingly large amounts of articles on React), React documentation, and other coding websites, where I ended up implementing this giant mash up of code that fortunately compiles and runs. 

- Having coding experience through fundies 1 (currently taking fundies 2), this is completely different from anything I've done before. Especially since I am majoring in COE, most of the code I've done before were very straightforward where I can basically slap everything in the main function with some helpers if needed. Regardless of the results, I thought this process of learning React and creating a form was really fun and rewarding, and I have learned so so much in such a short span of time. 

- Due to time constraints I wish I could have made the website look better as well as thouroughly testing for all components. Right now although the tiles are implemented (in PartnerTile) along with potenetially deleting capabilities, I couldn't figure out why it was not showing up in the main page even though it was showing up in the console. Due to this I am not confident that the deleting works, although it does not throw any errors. I believe with more time I would be able to produce a more polished result, especially with so much resources in the internet. 