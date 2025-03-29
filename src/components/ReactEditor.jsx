import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import { Mic, Copy, FilePlus } from 'lucide-react';
import './TiptapEditor.css';

const TiptapEditor = () => {
  const [content, setContent] = useState('<p>Enter Your Query Here...</p>');
  const [isListening, setIsListening] = useState(false);
  const [isOpen , setIsOpen] = useState(true);
  const CollapseComponent = () => {
    setIsOpen(!isOpen);
  }

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const handleCopy = () => {
    if (editor) {
      navigator.clipboard.writeText(editor.getText());
      alert('Content copied to clipboard!');
    }
  };

  const handleNewReport = () => {
    if (editor) {
      editor.commands.setContent('<p>New report started...</p>');
    }
  };

  const toggleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in your browser');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        if (editor) {
          const { from, to } = editor.state.selection;
          if (from !== to) editor.commands.deleteRange({ from, to });
          editor.commands.insertContent(transcript);
        }
      };
    }
  };

  return (
    isOpen ? (

      <div style = {{
        height: "25vh",
        width: "37.5vw",
        paddingTop: "12px",
        paddingBottom: "12px",
        overflowY: "scroll",
        margin: "4px",
        borderRadius: "12px",
      }}>
        <div className="toolbar">
          {/* Formatting Buttons */}
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`toolbar-button ${editor?.isActive('bold') ? 'is-active' : ''}`}
            title="Bold"
          >
            B
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`toolbar-button ${editor?.isActive('italic') ? 'is-active' : ''}`}
            title="Italic"
          >
            I
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className={`toolbar-button ${editor?.isActive('underline') ? 'is-active' : ''}`}
            title="Underline"
          >
            U
          </button>
  
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
  
        <EditorContent editor={editor} className="editor-content" />
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