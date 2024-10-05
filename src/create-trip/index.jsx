import React, { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { selectBudgetOptions, selectTravelList } from "../constants/options";
import { toast } from "sonner";
import { AI_PROMPT, AI_PROMPT_SEARCH } from "../constants/options";
import { chatSession } from "../service/ALModal";
import { useDispatch } from "react-redux";
import { addApiData } from "@/redux/data/dataSlice";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/custom/Dropdown";
import { Skeleton } from "../components/ui";

const CreateTrip = () => {
  const [formData, setFormData] = useState({});
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const daysRef = useRef("");

  // Update formData for budget
  function handleBudgetClick(item) {
    setFormData((prev) => ({
      ...prev,
      budget: item.title,
    }));
  }

  // Update formData for travelType
  function handleTravelTypeClick(item) {
    setFormData((prev) => ({
      ...prev,
      travelType: item.title,
    }));
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();

    const destination = input;
    const days = daysRef.current.value;

    // Ensure formData is updated properly
    const updatedFormData = {
      ...formData,
      destination,
      days,
    };

    if (!destination || !days || !formData.budget || !formData.travelType) {
      toast.error("Submit all the required fields");
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replace("{location}", destination)
      .replace("{totaldays}", days)
      .replace("{traveler}", formData.travelType)
      .replace("{budget}", formData.budget);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const parsedResult = await result?.response?.text();

      // Store data and dispatch it to Redux
      localStorage.setItem("aiResponse", parsedResult);
      dispatch(addApiData(parsedResult));

      // Navigate to the result page
      navigate("/showTrip");
    } catch (error) {
      console.error("Error generating trip:", error);
      toast.error("There was an issue generating the trip.");
    }
  }

  // Handle search with debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (input && !isSelected) {
        try {
          setLoading(true);
          const searchPrompt = AI_PROMPT_SEARCH.replace("{userInput}", input);
          const result = await chatSession.sendMessage(searchPrompt);
          const parsedResult = await result?.response?.text();

          // Parse the response and update the dropdown
          const parsedArray = JSON.parse(parsedResult) || [];
          setLoading(false);
          setResponse(parsedArray);
        } catch (error) {
          console.error("Error fetching data:", error);
          setResponse([]); // Fallback to an empty array on error
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [input, isSelected]);

  // Handle input change for the search field
  const handleChange = (e) => {
    setInput(e.target.value);
    setIsSelected(false); // Reset selected state on input change
  };

  // Handle dropdown selection
  function handleOption(selectedOption) {
    setInput(selectedOption.destination);
    setResponse([]); // Clear suggestions after selection
    setIsSelected(true);
  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-4xl text-center mb-5">
        Tell us about your travel preferences
      </h2>
      <p className="mt-2 text-gray-600 text-xl text-center">
        Just provide some information
      </p>

      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-2xl my-2 font-semibold">
              What is the destination of your choice
            </h2>
            <Input
              type="text"
              value={input}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            />
            {loading
              ? "loading"
              : input && (
                  <Dropdown data={response} handleOption={handleOption} />
                )}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl my-2 font-semibold">
              Select number of days
            </h2>
            <Input
              type="number"
              placeholder="e.g. 3"
              ref={daysRef}
              className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl my-2 font-semibold">
              What is your budget?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              {selectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-300 hover:shadow-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => handleBudgetClick(item)}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-600">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl my-2 font-semibold">
              What type of traveler are you?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              {selectTravelList.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-300 hover:shadow-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => handleTravelTypeClick(item)}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-600">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out p-2 rounded-md"
            >
              Generate Trip
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTrip;
