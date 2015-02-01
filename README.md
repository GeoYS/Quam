# Quam
Quam, the warriors of song! This is a game in development with elements inspired by games like Crypt of the Necrodancer and Super Smash Bros.

Notes on project setup for Visual Studio Community 2013:

Step 1. Create a new HTML with Typescript project

Step 2. Add the Phaser library to your project.

Step 3a. Pull the project from GitHub. (If you have trouble with this, see Step 7.)

Step 3b. Actually, just go see Step 7!

Step 4. Go to Debug > Quam Properties... and make sure these things are set as such:

  ~ The ECMAScript version is set to ECMAScript 5.
  ~ Set the Module system to None
  ~ Check ‘Combine JavaScript output into file’ and enter ‘game.js’ as the filename

Step 5a. Add this code to the web.config file:

  ```
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
    </staticContent>
  </system.webServer>"
  ```
  
Step 5b. Replace all code in app.ts with this: 

  ```
  window.onload = () => {
      var game = new Quam.Game();
  };
  ```

Step 5c. Delete this line from your index.html in head: 

  ```
  <script src="app.js"></script>
  ```

Step 5d. Add this to lines to your index.html in head: 

  ```
  <script src="phaser.js"></script>
  <script src="game.js"></script>
  ```
  
Step 6. You should be good after that. Try launching in Google Chrome!

Step 7a. To sync with the GitHub repo, open Team Explorer, click the Home icon.

Step 7b. Click Settings > Git Settings. Add your username and email.

Step 7c. Click the Home icon again. Click Unsynced Commits, add the Quam GitHub url, and sync it up!!!
