import { useEffect, useState } from "react";
import {mockApiResponse} from '../mockData'
import Card from "./Card";
// Mock API response


const CardListing = () => {
  const [cards, setCards] = useState([]);
  const [activeTab, setActiveTab] = useState("Your");
  const [searchQuery, setSearchQuery] = useState("");
  const [cardTypeFilter, setCardTypeFilter] = useState("All");

  useEffect(() => {
    // Simulating API call to fetch card data
    fetchCards();
  }, []);

  const fetchCards = () => {
    // Simulating API response with pagination
    const { data } = mockApiResponse;
    setCards(data);
    console.log(data)
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Fetch cards based on the selected tab
    fetchCards();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCardTypeFilter = (filter) => {
    setCardTypeFilter(filter);
  };

  const tabOptions = ['Your','All','Blocked']

  // Filter and search the cards based on the current tab, search query, and card type filter
  const filteredCards = cards.filter((card) => {
    if (activeTab === "Your" && card.owner_id !== 1) return false;
    if (activeTab === "Blocked" && card.status !== "blocked") return false;
    if (
      searchQuery &&
      !card.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (cardTypeFilter !== "All" && card.card_type !== cardTypeFilter)
      return false;
    return true;
  });

  return (
    <>
      <div className="tab-btns">
        {
            tabOptions.map((tab, index)=>
           { return (
     
                <button className={activeTab===tab?'tab-btn active':'tab-btn'}  onClick={() => handleTabChange(tab)} key={index}>{tab}</button>
            )})
        }

       
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by card name"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          value={cardTypeFilter}
          onChange={(e) => handleCardTypeFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="burner">Burner</option>
          <option value="subscription">Subscription</option>
        </select>
      </div>
      <div className="cards-wrapper">
        {filteredCards.map((card, index) => (
                <Card key={index} {...card} index ={index}/>
        ))}
      </div>
    </>
  );
};

export default CardListing;
