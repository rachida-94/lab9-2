import './index.css'
import { TextInput } from "./component/TextInput/textInput"
import { useState } from "react";
import { StatDisplay } from './component/statsDisplay/statsDisplay';

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
    minWords: 25,
    maxWords: 200,
    targetReadingTime: 2,
  };

 

  return (
    <>
    <div className='space-y-2'>
      <TextInput
        onTextChange={handleTextChange}
        placeholder="Start typing..."
        initialValue={text}
        
      />
       
      <CharacterCounter
      stats={stats}
      limits={limits}/>
      <StatDisplay 
      stats={stats}
       showReadingTime={true}
        
       />

</div>
      
      
    </>
  )
  
}

export default App
