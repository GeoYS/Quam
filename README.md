# Quam
Quam, the warriors of song! This is a game in development with elements inspired by games like Crypt of the Necrodancer and Super Smash Bros.

Notes on project setup for Visual Studio Community 2013:

Step 1. Set up git! Oh boy, this'll be messy.

  ```
  i. Open VS 2013. Do not create a project.
  
  ii. Go to Team Explorer. Click the plug icon at the top. You should be in Connect.
  
  iii. Under Local Git Repositories, click clone. Enter in the GitHub URL, then select a (temporary) location to store the repo.
  
  iv. Now create a new HTML with Typescript project, call it Quam or whatever. File > New > Project... > OK. No settings need be changed.
  
  v. Open up file explorer. Copy and paste the src and assets folders into the nested Quam folder (ie. second level).
  
  vi. Copy the other files (eg. .git, .gitignore, etc.) into the first Quam folder.
  
  vii. Back in VS 2013, go to Solution Explorer, and drag-and-drop the src folder from file explorer to "Quam". Not References, not Solutions 'Quam', not the white space around, but "Quam" (or whatever you named your project).
  
  viii. In Solution Explorer, right-click Solutions 'Quam', select Add Source Control.
  
  ix. Congratulations, you did it! Finish the rest few steps and see the fruit of your labour!
  ```

Step 2. Add the Phaser library to your project. To do this, just copy and paste the required Phaser files into the nested Quam folder.

Step 3. Go to Debug > Quam Properties... and make sure these things are set as such:

  ~ The ECMAScript version is set to ECMAScript 5.
  ~ Set the Module system to None
  ~ Check ‘Combine JavaScript output into file’ and enter ‘game.js’ as the filename

Step 4a. Add this code to the web.config file:

  ```
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
    </staticContent>
  </system.webServer>"
  ```
  
Step 4b. Replace all code in app.ts with this: 

  ```
  window.onload = () => {
      var game = new Quam.Game();
  };
  ```

Step 4c. Delete this line from your index.html in head: 

  ```
  <script src="app.js"></script>
  ```

Step 4d. Add this to lines to your index.html in head: 

  ```
  <script src="phaser.js"></script>
  <script src="game.js"></script>
  ```
  
Step 5. You should be good after that. Try launching in Google Chrome!
