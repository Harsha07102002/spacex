# SpaceX Launch Data Viewer

This project is a web application that displays upcoming and past SpaceX launches. Users can toggle the display of upcoming and past launches using buttons. The data is fetched from the SpaceX API.

## Features

- Display upcoming SpaceX launches
- Display past SpaceX launches
- Toggle visibility of upcoming and past launches
- Responsive and visually appealing design

## Technologies Used

- HTML
- CSS
- JavaScript
- SpaceX API

## Project Structure

├── index.html
├── space.css
├── space.js
└── README.md

### `index.html`

The main HTML file that defines the structure of the web application. It includes sections for upcoming and past launches and buttons to toggle their visibility.

### `space.css`

The CSS file that styles the web application. It uses a blue and green color scheme for a modern and visually appealing look.

### `space.js`

The JavaScript file that fetches launch data from the SpaceX API and handles the toggle functionality for showing and hiding launches.

## How to Run the Project

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.

## Usage

- Click the "Show/Hide Upcoming Launches" button to toggle the display of upcoming SpaceX launches.
- Click the "Show/Hide Past Launches" button to toggle the display of past SpaceX launches.

## API

This project uses the SpaceX API to fetch launch data.

- Upcoming launches: `https://api.spacexdata.com/v4/launches/upcoming`
- Past launches: `https://api.spacexdata.com/v4/launches/past`

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [SpaceX API](https://github.com/r-spacex/SpaceX-API) for providing the launch data
