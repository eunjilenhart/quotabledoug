import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "ðª",
//   name: "Tense Biceps",
//   meaning:
//     "âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>Quotable Doug</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiTerm=>
  {return(
    <Entry
      key={emojiTerm.id}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
   ) })}</dl>
    </div>
  );
}

export default App;
