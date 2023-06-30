const Card = (card) =>{

    return (
        <div key={card.index} className="card">
        <div className="card-type">{card.card_type}</div>
        <div className="card-name">{card.name}</div>
        <div>{card.budget_name}</div>
        {card.card_type === "burner" && (
          <div className="card-expiry">Expiry: {card.expiry}</div>
        )}
        {card.card_type === "subscription" && (
          <div className="card-limit">Limit: {card.limit}</div>
        )}
        <div>Status: {card.status}</div>
      </div>
    )

}

export default Card