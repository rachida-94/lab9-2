import { TextInput } from "./component/TextInput/textInput"
import { useState } from "react";

import { CharacterCounter } from "./component/characterCounter/characterCounter";
function App() {
  
const [text, setText] = useState('')
const[wordCount,setWordCount]=useState(0)
const [charCount,setCharCount]=useState(0)
const [readingTime,setReadingTime]=useState(0)

const handleTextChange = (text: string) => {
  setText(text);

  const words = text.split(' ').filter((word) => word.trim() !== '');
  const newWordCount = words.length;
  const newCharCount = text.length;
  const averageWordsPerMinute = 200;
  const newReadingTime = Math.ceil(newWordCount / averageWordsPerMinute);

  setWordCount(newWordCount);
  setCharCount(newCharCount);
  setReadingTime(newReadingTime);
};

const stats = {
    wordCount,
    characterCount: charCount,
    readingTime,
  };

  const limits = {
    minWords: 100,
    maxWords: 300,
    targetReadingTime: 2,
  };

 

  return (
    <>
    
      <TextInput
        onTextChange={handleTextChange}
        placeholder="Start typing..."
        initialValue={text}
        
      />
       
      <CharacterCounter
      stats={stats}
      limits={limits}/>

      
    </>
  )
  
}

export default App
