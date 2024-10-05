export const selectTravelList = [
  {
    title: "Solo Traveler",
    desc: "Ideal for those who love to travel alone.",
    icon: "🧳", // You can replace with an actual icon component or string
    people: "Just me",
  },
  {
    title: "Couple Retreat",
    desc: "Perfect for a romantic getaway with your partner.",
    icon: "❤️", // Icon for couples
    people: "Couple",
  },
  {
    title: "Family Vacation",
    desc: "Fun-filled trips for the entire family.",
    icon: "👨‍👩‍👧‍👦", // Family icon
    people: "Family",
  },
];

export const selectBudgetOptions = [
  {
    title: "Luxury",
    desc: "Experience the finest accommodations and services.",
    icon: "💎", // Icon representing luxury
    budget: "Luxury",
  },
  {
    title: "Budget-Friendly",
    desc: "Affordable travel options that don’t compromise on experience.",
    icon: "💰", // Icon for cheap/budget travel
    budget: "Cheap",
  },
  {
    title: "Moderate",
    desc: "Balanced options for comfort without overspending.",
    icon: "🏖️", // Icon for moderate pricing
    budget: "Moderate",
  },
];

export const AI_PROMPT =
  "Generate travel plan: {location},for {totaldays} days for {traveler} with {budget} budget,give hotel option list with hotel name,hotel image url in proper img format not in html,rating descriptions and suggest the itenary with place name,place details,place image url ,ticket pricing,rating ,time travel each of the loaction for {totaldays} days with each day plan with best time to visit in JSON format and also give anchor tag to the hotel link so that it can redirect but if th imh url is not working then give proper img url \n";

export const AI_PROMPT_SEARCH = `Based on the user's search term "{userInput}", provide a list of the top 5 most popular or frequently searched travel destinations that are relevant to this input. For each destination, include:`;
