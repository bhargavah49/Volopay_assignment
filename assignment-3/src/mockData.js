export const mockApiResponse = {
    data: [
        {
            name: "Mixmax",
            budget_name: "Software subscription",
            owner_id: 1,
            spent: {
              value: 100,
              currency: "SGD"
            },
            available_to_spend: {
              value: 1000,
              currency: "SGD"
            },
            card_type: "burner",
            expiry: "9 Feb",
            limit: 100,
            status: "active"
          },

        {
          name: "semitech",
          budget_name: "Software subscription",
          owner_id: 1,
          spent: {
            value: 100,
            currency: "SGD"
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD"
          },
          card_type: "burner",
          expiry: "9 Feb",
          limit: 100,
          status: "active"
        },
        {
          name: "Quickbooks",
          budget_name: "Software subscription",
          owner_id: 2,
          spent: {
            value: 50,
            currency: "SGD"
          },
          available_to_spend: {
            value: 250,
            currency: "SGD"
          },
          card_type: "subscription",
          limit: 10,
          status: "active"
        },
        {
          name: "Slack",
          budget_name: "Communication tools",
          owner_id: 3,
          spent: {
            value: 20,
            currency: "USD"
          },
          available_to_spend: {
            value: 1000,
            currency: "USD"
          },
          card_type: "subscription",
          limit: 50,
          status: "active"
        },
        {
          name: "Adobe Creative Cloud",
          budget_name: "Design software",
          owner_id: 4,
          spent: {
            value: 150,
            currency: "USD"
          },
          available_to_spend: {
            value: 500,
            currency: "USD"
          },
          card_type: "subscription",
          limit: 200,
          status: "blocked"
        },
        {
            name: "saksoftware",
            budget_name: "Software subscription",
            owner_id: 1,
            spent: {
              value: 100,
              currency: "SGD"
            },
            available_to_spend: {
              value: 1000,
              currency: "SGD"
            },
            card_type: "burner",
            expiry: "9 Feb",
            limit: 100,
            status: "blocked"
          }
        

      ],
      
    page: 1,
    per_page: 10,
    total: 100
  };