import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const names = [
    "kritica",
    "puja",
    "riya",
    "sushma",
    "priyanaka",
    "sweata",
    "pushpa"
  ];
  const [suggestion, setSuggestion] = useState(names);
  const [name, setName] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setName(input);
    setSuggestion(names);
    if (input[0] !== "@" || input.length === 0) {
      setPopupOpen(false);
    } else {
      setPopupOpen(true);
      const newInput = input.substr(1, input.length);
      filteringUserNameusingInputText(newInput);
    }
  };

  const filteringUserNameusingInputText = (enteredText) => {
    const filteredUser = suggestion.filter((item) => {
      return item.toLocaleLowerCase().includes(enteredText.toLocaleLowerCase());
    });

    setSuggestion(filteredUser);
  };

  const checkUserList = (suggestion) => {
    return (
      suggestion &&
      suggestion.map((item, index) => {
        return <div key={index}>{item}</div>;
      })
    );
  };
  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          value={name}
          autoFocus={true}
        />
      </div>
      {popupOpen ? checkUserList(suggestion) : null}
    </div>
  );
}
