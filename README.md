# Quam
Quam, the warriors of song! This is a game in development with elements inspired by games like Crypt of the Necrodancer and Super Smash Bros.

Notes on project setup is VS2013:

Create a new HTML with Typescript project

Add the Phaser library to your project.

Add this code to the web.config file:

  ```
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
    </staticContent>
  </system.webServer>"
  ```
  
Replace all code in app.ts with this: 

  ```
  window.onload = () => {
      var game = new Quam.Game();
  };
  ```

Add this to lines to your index.html in head: 

  ```
  <script src="phaser.js"></script>
  <script src="game.js"></script>
  ```
  
You should be good after that!
