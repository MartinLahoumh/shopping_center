# Art Shopping Center

### Description

The shopping center is a place where people can buy and sell art pieces to display in their home. If you have an art piece that you find doesnt quite fit your room any more, sell it online to find it a different owner!
If you are looking for art pieces to decorate your space to scream who you are, find it at the marketplace. (NOTE: prices are not offical, they are all here for testing purposes to see how high or low they can get. So if you see an art piece for $10000000, please do not 
associate it with the price in a real world application, sorry for the trouble)

### Technologies Used

| Front End | Back End |
| --------- | -------- |
| React / Vite |Flask|
| JavaScript |SQLAlchemy|
| CSS |Python|

Front End: React/Vite, JavaScript, CSS
Back End: Flask, SQLAlchemy, Python

### Hosting locally

The steps to setting up and seeing the Art Shopping Center in action involve setting up both front/end of the project [with the backend prior to the frontend so it can properly communicate with the webpage].
The only prerequisites to installation are having the following already installed on your machine

1. [pip](https://pip.pypa.io/en/stable/installation/) [Preferred Installer Program]
2. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) [Node Package Manager]

As mentioned we need to first setup the backend of the project which is done as follows:

1. from the terminal enter the /back_end folder
2. It is recommended that you create a virtual environment, so please do so and activate it before the next step.
3. run the following command [Doing so installs all neccesary packages to run the back end server]
```bash
pip install -r requirements.txt
```
4. To check all packages installed, run
```bash
pip freeze
```
5. Finnally, to run the back end server, use the following command.
```bash
flask run
```

Now that you've finished setting up and got the backend running we can get the frontend up and running

1. From the terminal enter the /front_end folder
2. Perform the following commands within this folder [note that each line should be performed separately and may take some time for each]

```bash
npm install
npm run build
npm run preview
```

3. Now that you've done this navigate to the link shown in the terminal [which should display a message that looks like the following]

```bash
> shopping_center_fe@0.0.0 preview
> vite preview

  ➜  Local:   http://localhost:4173/  <Navigate to the link on this line>
  ➜  Network: use --host to expose
  ➜  press h to show help
```
