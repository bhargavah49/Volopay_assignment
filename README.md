# Volopay_assignment
# Card Listing Application

This is a card listing application built with React. It allows users to view and filter cards based on different criteria. The application fetches card data from a mock API and provides functionalities such as tab navigation, search by card name, and filtering by card type.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:


git clone <repository-url>


2. Install the dependencies:


cd card-listing-application
npm install


3. Start the development server:


npm start


4. Open your browser and visit `http://localhost:3000` to view the application.

## Features

- Tab navigation: Switch between "Your," "All," and "Blocked" cards.
- Search: Search for cards by their name.
- Filter: Filter cards by their type (All, Burner, Subscription).
- Card Listing: Display cards with their respective details, including card type, name, budget name, and additional information depending on the card type (expiry for burner cards and limit for subscription cards).
- Pagination: Fetch additional card data using infinite scroll to load more cards.

## Technologies Used

- React: JavaScript library for building user interfaces.
- CSS: Styling the components and layout of the application.
- Mock API: Simulated API response to fetch card data.

## Folder Structure


card-listing-application/
  ├── src/
  │   ├── components/         # React components
  │   ├── App.js              # Main component
  │   └── index.js            # Entry point
  ├── public/
  │   ├── index.html          # HTML template
  │   └── ...
  ├── package.json            # Project dependencies and scripts
  ├── README.md               # Project documentation (you are here)
  └── ...


## Mock API Response

The application uses a mock API response to fetch card data. The structure of the response is as follows:

json
{
  "data": [
    {
      "name": "Mixmax",
      "budget_name": "Software subscription",
      "owner_id": 1,
      "spent": {
        "value": 100,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 1000,
        "currency": "SGD"
      },
      "card_type": "burner",
      "expiry": "9 Feb",
      "limit": 100,
      "status": "active"
    },
    {
      "name": "Quickbooks",
      "budget_name": "Software subscription",
      "owner_id": 2,
      "spent": {
        "value": 50,
        "currency": "SGD"
      },
      "available_to_spend": {
        "value": 250,
        "currency": "SGD"
      },
      "card_type": "subscription",
      "limit": 10,
      "status": "active"
    }
  ],
  "page": 1,
  "per_page": 10,
  "total": 100
}


## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize and modify the application according to your needs.

## Acknowledgements

- This project was created as part of a coding assignment.
- Special thanks to the contributors and maintainers of the libraries and tools used in this project.

---

Please update the sections accordingly and provide additional information as required based on your project's specific needs and guidelines.
