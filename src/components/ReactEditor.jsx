import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import { Mic, Copy, FilePlus } from 'lucide-react';
import './TiptapEditor.css';

const TiptapEditor = ({setId}) => {
  const [content, setContent] = useState('<p>Enter your SQL Query to generate Data...</p>');
  const [isListening, setIsListening] = useState(false);
  const [isOpen , setIsOpen] = useState(true);
  const CollapseComponent = () => {
    setIsOpen(!isOpen);
  }

  const [isFirstClick, setIsFirstClick] = useState(true);

const editor = useEditor({
  extensions: [StarterKit],
  content,
  onUpdate: ({ editor }) => {
    setContent(editor.getHTML());
  },
});

const handleEditorFocus = () => {
  if (isFirstClick) {
    editor.commands.setContent('');
    setIsFirstClick(false);
  }
};


  const handleCopy = () => {
    if (editor) {
      navigator.clipboard.writeText(editor.getText());
    }
  };

  const handleNewReport = () => {
    setId(0) ; 
    if(isListening)
    toggleVoiceInput();
    if (editor) {
      editor.commands.setContent('<p>Enter your SQL Query to generate Data...</p>');
    }
  };

  const toggleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in your browser');
      return;
    }
  
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false; // ✅ Fix duplication
  
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
  
      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript; // ✅ Only latest final result
  
        if (editor) {
          const { from, to } = editor.state.selection; // ✅ Get cursor position
          editor.chain().focus().insertContentAt({ from, to }, transcript).run(); // ✅ Insert at cursor
        }
      };
    }
  };
  

  const AllocateId = () => {
    var num = Math.floor(Math.random() * 10000) + 1;
    setId(num) ; 
  }

  return (
    isOpen ? (

      <div style = {{
        height: "30.5vh",
        width: "35vw",
        // paddingTop: "12px",
        // paddingBottom: "12px",
        overflowY: "scroll",
        margin: "4px",
        borderRadius: "12px",
      }}>
        <div className="toolbar">
          {/* Formatting Buttons */}
  
          {/* Action Buttons */}
          <button
            onClick={toggleVoiceInput}
            className={`toolbar-button ${isListening ? 'is-active' : ''}`}
            title="Voice Input"
          >
            <Mic size={16} /> Mic
          </button>
          <button onClick={handleCopy} className="toolbar-button" title="Copy">
            <Copy size={16} />
            Copy
          </button>
          <button onClick={AllocateId} className="toolbar-button" title="New Report">
            <FilePlus size={16} />
            Submit
          </button>
          <button onClick={handleNewReport} className="toolbar-button" title="New Report">
            <FilePlus size={16} />
            Reset
          </button>
          <button onClick={handleNewReport} className="toolbar-button" title="New Report">
            <FilePlus size={16} />
            Joke
          </button>
          <button onClick={CollapseComponent} className="toolbar-button" title="New Report">
            <FilePlus size={16} />
            ❌
          </button>
        </div>
  
        <EditorContent editor={editor} className="editor-content" onFocus={handleEditorFocus} />
      </div>

    ) : (
      <div
          style={{
            cursor: "pointer",
            padding: "16px",
            backgroundColor: "#ddd",
            borderRadius: "8px",
            width: "fit-content",
            margin: "10px",
            fontSize: "1.2rem",
          }}
          onClick={() => setIsOpen(true)}
        >
          Enter your Query Here
        </div>
    )
  );
};

export default TiptapEditor;