# Random Image Generator With Unsplash

<p align="justify">
This web app allows users to view random, high-quality images from the Unsplash API. Each time the page loads or the refresh button is clicked, a new image is fetched from Unsplash's vast collection of stunning photography. 
The app also displays the image creator's name and the total likes they’ve received. 
Clicking on the image or the creator's name takes users directly to the source on Unsplash, providing an interactive experience to explore more works by the photographer.
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/46abdc09-78ef-4752-8431-deae9c766923" height="400" width="700" >
</p>

## Running example
Please, [press here](https://random-image-generator-with-unsplash.vercel.app/) to see running example.
<br/><br/>

## Built with

<img align="right" width="189" alt="image" src="https://github.com/user-attachments/assets/232d9b42-22c9-42ad-a370-aaeef690302e">
<img align="right" width="120" alt="image" src="https://github.com/user-attachments/assets/f0948862-e26e-4c6d-88bf-24408d4ef3b3">
<img align="right" width="120" alt="image" src="https://github.com/user-attachments/assets/d342eed2-2100-41b9-b939-9f40738ddbb5">

This project was built with 
<ul>
  <li>HTML</li> 
  <li>CSS</li>
  <li>Node.js</li>
  <li>Express.js</li>
</ul>
<br/>

## Getting started

To run this application on GitPod follow next steps:

1. <b>Open GitPod workspace for your repository</b> <br/>
Enter https://gitpod.io/#yourRepositoryLink in a browser. It can take few minutes to load.

2. <b>Clone the current repository using the terminal</b> <br/>
In your GitPod terminal (or local terminal), run the following command

```rb
git clone https://github.com/AnnaKRP/random-image-generator-with-unsplash.git
```

3. <b>Access the directory</b> <br/>
Navigate into the project directory
```rb
cd random-image-generator-with-unsplash
```

4. <b>Install the necessary dependencies</b> <br/>
To download the required node_modules, run the following command

```rb
npm install
```

5. <b>Get the Unsplash API key</b> <br/>
To use the Unsplash API, you need an API key.
    <ul>
      <li>Go to the Unsplash Developers page.</li>
      <li>Sign up or log in and create a new application to get an API key (client ID).</li>
    </ul>

6. <b>Create the .env file</b> <br/>
Create a .env file in the root of your project directory and add the following line, replacing <i>your_unsplash_api_key</i> with the actual API key you received

```rb
NEXT_PUBLIC_MY_API_KEY=your_unsplash_api_key
```

7. <b>Run the application</b> <br/>
Start the application locally by running the following command

```rb
npm start
```

This will start the server on http://localhost:3000, and you can view the app in your browser.
