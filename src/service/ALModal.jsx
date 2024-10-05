/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "trip_name": "Mumbai Budget Couple\'s Getaway",\n  "duration": 3,\n  "budget": "cheap",\n  "travelers": "Couple",\n  "hotels": [\n    {\n      "name": "Hotel Sai Palace",\n      "image_url": "https://www.booking.com/hotel/in/sai-palace.html",\n      "rating": 3.5,\n      "description": "A basic and clean hotel with a central location. Offers comfortable rooms at an affordable price."\n    },\n    {\n      "name": "Hotel Royal Residency",\n      "image_url": "https://www.tripadvisor.com/Hotel_Review-g297604-d1020949-Reviews-Hotel_Royal_Residency-Mumbai_Maharashtra.html",\n      "rating": 3.0,\n      "description": "A budget-friendly option with basic amenities. Offers simple rooms and is conveniently located."\n    },\n    {\n      "name": "Treebo Trend The Pride",\n      "image_url": "https://www.treebo.com/hotels/mumbai/treebo-trend-the-pride/",\n      "rating": 4.0,\n      "description": "A modern and stylish hotel with comfortable rooms and good value for money."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "theme": "Iconic Mumbai",\n      "plan": [\n        {\n          "time": "9:00 AM",\n          "location": "Gateway of India",\n          "details": "A historic arch built during the British Raj, offering stunning views of the Arabian Sea and the city skyline.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gateway_of_India_Mumbai.jpg/1200px-Gateway_of_India_Mumbai.jpg",\n          "ticket_price": "Free",\n          "rating": 4.5,\n          "travel_time": "1 hour" \n        },\n        {\n          "time": "11:00 AM",\n          "location": "Elephanta Caves",\n          "details": "Ancient rock-cut caves with Hindu sculptures and intricate carvings, accessible by ferry from the Gateway of India.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Elephanta_Caves_entrance.jpg/1200px-Elephanta_Caves_entrance.jpg",\n          "ticket_price": "INR 250 per person (ferry included)",\n          "rating": 4.0,\n          "travel_time": "1 hour (ferry ride)"\n        },\n        {\n          "time": "2:00 PM",\n          "location": "Dhobi Ghat",\n          "details": "A sprawling open-air laundry where thousands of clothes are washed and dried daily, a fascinating glimpse into Mumbai\'s daily life.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Dhobi_Ghat_2009.jpg/1200px-Dhobi_Ghat_2009.jpg",\n          "ticket_price": "Free",\n          "rating": 3.5,\n          "travel_time": "30 minutes"\n        },\n        {\n          "time": "7:00 PM",\n          "location": "Marine Drive",\n          "details": "A scenic promenade known as the \'Queen\'s Necklace\' for its illuminated arc at night. Enjoy a stroll and breathtaking views of the sea.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Marine_Drive_Mumbai.jpg/1200px-Marine_Drive_Mumbai.jpg",\n          "ticket_price": "Free",\n          "rating": 4.0,\n          "travel_time": "30 minutes"\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "theme": "Bollywood and Culture",\n      "plan": [\n        {\n          "time": "10:00 AM",\n          "location": "Mani Bhavan",\n          "details": "The former residence of Mahatma Gandhi in Mumbai, where he lived during the Indian independence movement. Learn about his life and teachings.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Mani_Bhavan_Mumbai.jpg/1200px-Mani_Bhavan_Mumbai.jpg",\n          "ticket_price": "INR 50 per person",\n          "rating": 4.0,\n          "travel_time": "30 minutes"\n        },\n        {\n          "time": "12:00 PM",\n          "location": "Chhatrapati Shivaji Maharaj Terminus",\n          "details": "A UNESCO World Heritage site, this iconic railway station is a stunning example of Victorian Gothic architecture.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chhatrapati_Shivaji_Terminus.jpg/1200px-Chhatrapati_Shivaji_Terminus.jpg",\n          "ticket_price": "Free",\n          "rating": 4.5,\n          "travel_time": "30 minutes"\n        },\n        {\n          "time": "2:00 PM",\n          "location": "Film City",\n          "details": "A bustling film studio complex where you can explore sets, watch film shoots, and get a glimpse into the world of Bollywood.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Filmcity_Mumbai.jpg/1200px-Filmcity_Mumbai.jpg",\n          "ticket_price": "INR 100 per person",\n          "rating": 3.5,\n          "travel_time": "1 hour"\n        },\n        {\n          "time": "7:00 PM",\n          "location": "Siddhivinayak Temple",\n          "details": "A popular Hindu temple dedicated to Lord Ganesha, known for its auspicious energy and fulfilling wishes.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Siddhivinayak_Temple_Mumbai.jpg/1200px-Siddhivinayak_Temple_Mumbai.jpg",\n          "ticket_price": "Free",\n          "rating": 4.0,\n          "travel_time": "30 minutes"\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "theme": "Relaxation and Street Food",\n      "plan": [\n        {\n          "time": "10:00 AM",\n          "location": "Juhu Beach",\n          "details": "A famous beach with golden sand, great for a relaxing walk, watching the waves, and enjoying the street food stalls.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Juhu_Beach_Mumbai.jpg/1200px-Juhu_Beach_Mumbai.jpg",\n          "ticket_price": "Free",\n          "rating": 4.0,\n          "travel_time": "30 minutes"\n        },\n        {\n          "time": "12:00 PM",\n          "location": "Street Food Tour in Juhu",\n          "details": "Indulge in a delicious street food tour, sampling local delicacies like vada pav, panipuri, bhel puri, and more.",\n          "image_url": "https://www.thefork.com/blog/wp-content/uploads/2022/08/best-street-food-in-mumbai-1.jpg",\n          "ticket_price": "INR 500 per person",\n          "rating": 4.5,\n          "travel_time": "2 hours"\n        },\n        {\n          "time": "3:00 PM",\n          "location": "Kanheri Caves",\n          "details": "Ancient Buddhist cave temples carved into the Sanjay Gandhi National Park, offering tranquility and scenic views.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kanheri_Caves_Main_Entrance.jpg/1200px-Kanheri_Caves_Main_Entrance.jpg",\n          "ticket_price": "INR 15 per person",\n          "rating": 4.0,\n          "travel_time": "1 hour"\n        },\n        {\n          "time": "7:00 PM",\n          "location": "Bandra-Worli Sea Link",\n          "details": "A magnificent bridge connecting Bandra and Worli, offering panoramic views of the city and the Arabian Sea.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bandra-Worli_Sea_Link_from_Worli.jpg/1200px-Bandra-Worli_Sea_Link_from_Worli.jpg",\n          "ticket_price": "Free",\n          "rating": 4.5,\n          "travel_time": "30 minutes"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* **Ticket prices:** Prices are approximate and subject to change. \n* **Travel time:**  This is based on average traffic conditions. It\'s always best to check for real-time traffic updates.\n* **Food:** Mumbai offers an incredible street food scene. You can find delicious and affordable meals at numerous local eateries.\n* **Local transport:** Consider using local transportation like trains and buses for affordable travel within the city.\n* **Flexibility:** Feel free to adjust the itinerary to fit your interests and preferences. \n* **Safety:**  Be aware of your surroundings, especially in crowded areas, and take standard precautions to ensure your safety.\n* **Best Time to Visit:** The best time to visit Mumbai is during the winter months (October to March) when the weather is pleasant. \n',
        },
      ],
    },
  ],
});
