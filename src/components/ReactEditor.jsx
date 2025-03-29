import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { Mic, Copy, FilePlus } from "lucide-react";


const TiptapEditor = ({ setId }) => {
  const [content, setContent] = useState("<p>Enter your SQL Query to generate Data...</p>");
  const [isListening, setIsListening] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [loadingJoke, setLoadingJoke] = useState(false);
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  // Handling States of the Editor
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  // Handling States of the Editor
  const handleEditorFocus = () => {
    if (isFirstClick) {
      editor.commands.setContent("");
      setIsFirstClick(false);
    }
  };

  // Coyping Contents to the Clipboard
  const handleCopy = () => {
    if (editor) {
      navigator.clipboard.writeText(editor.getText());
    }
  };

  // Resetting the Whole Screen to default
  const handleNewQuery = () => {
    setId(0);
    if (isListening) toggleVoiceInput();
    if (editor) {
      editor.commands.setContent("<p>Enter your SQL Query to generate Data...</p>");
    }
  };

  // Handling Voice Input
  const toggleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in your browser");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;

        if (editor) {
          const { from, to } = editor.state.selection;
          editor.chain().focus().insertContentAt({ from, to }, transcript).run();
        }
      };
    }
  };

  // Random ID Allocation to display the Output
  const AllocateId = () => {
    var num = Math.floor(Math.random() * 10000) + 1;
    setId(num);
  };

  // To get a joke from GEMINI
  const handleJoke = async () => {
    setLoadingJoke(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-001:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: "Tell me a programming joke about Data Handling by DataScientists" }
                ]
              }
            ]
          }),
        }
      );
  
      const data = await response.json();
      console.log("API Response:", data);
  
      const joke =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No joke found 🤔";
  
      if (editor) {
        editor.commands.setContent(`<p>💡 ${joke}</p>`);
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
      if (editor) {
        editor.commands.insertContent(`<p>❌ Failed to fetch a joke.</p>`);
      }
    }
    setLoadingJoke(false);
  };
  

  // Collapisble Queries Section
  return isOpen ? (
    <div
      style={{
        height: "30.5vh",
        width: "35vw",
        overflowY: "scroll",
        margin: "4px",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "8px",
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "8px",
          padding: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "8px 8px 0 0",
        }}
      >
        {/* Action Buttons */}
        <button
          onClick={toggleVoiceInput}
          style={{
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: isListening ? "#e53e3e" : "#4a5568",
            border: "1px solid #2d3748",
            cursor: "pointer",
            transition: "all 0.2s",
            color: "white",
            boxShadow: isListening ? "0 0 10px rgba(229, 62, 62, 0.8)" : "none",
          }}
        >
          <Mic size={16} /> Mic
        </button>

        <button
          onClick={handleCopy}
          style={{
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#4a5568",
            border: "1px solid #2d3748",
            cursor: "pointer",
            transition: "all 0.2s",
            color: "white",
          }}
        >
          <Copy size={16} /> Copy
        </button>

        <button
          onClick={AllocateId}
          style={{
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#4a5568",
            border: "1px solid #2d3748",
            cursor: "pointer",
            transition: "all 0.2s",
            color: "white",
          }}
        >
          <FilePlus size={16} /> Submit
        </button>

        <button
          onClick={handleNewQuery}
          style={{
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#4a5568",
            border: "1px solid #2d3748",
            cursor: "pointer",
            transition: "all 0.2s",
            color: "white",
          }}
        >
          <FilePlus size={16} /> Reset
        </button>

        <button
          onClick={handleJoke}
          style={{
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#4a5568",
            border: "1px solid #2d3748",
            cursor: "pointer",
            transition: "all 0.2s",
            color: "white",
          }}
        >
          <FilePlus size={16} /> Joke
        </button>

        <button
          onClick={() => setIsOpen(false)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#4a5568",
            border: "1px solid #2d3748",
            cursor: "pointer",
            transition: "all 0.2s",
            color: "white",
          }}
        >
          ❌
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        style={{
          padding: "16px",
          minHeight: "200px",
          backgroundColor: "white",
          outline: "none",
          lineHeight: "1.6",
          color: "black",
          borderRadius: "0 0 12px 12px",
        }}
        onFocus={handleEditorFocus}
      />
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
  );
};

export default TiptapEditor;
