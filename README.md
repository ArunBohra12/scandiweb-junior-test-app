# Getting Started

Follow the steps below to create your own local environment

## Front end

1. Navigate to the `./frontend` folder
2. Install the node packages by running `npm install`
3. Rename the `.sample.env` file to `.env.local`
4. In the env file set the url to your backend server
5. Run the command `npm start` to start the react server

## Back end

1. Navigate to the `./backend` folder
2. Run the command `composer dump-autoload` to get the access to the autoload.php in the vendor directory
3. Navigate to `backend\application\Database\Connection.php` file and change the database configuration
4. Start a php server in the backend folder
