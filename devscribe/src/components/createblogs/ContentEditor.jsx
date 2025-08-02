import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Heading from "@tiptap/extension-heading";
import HardBreak from "@tiptap/extension-hard-break";
import { Extension } from '@tiptap/core'


const ShiftEnterNewParagraph = Extension.create({
  name: 'shiftEnterNewParagraph',

  addKeyboardShortcuts() {
    return {
      'Shift-Enter': ({ editor }) => {
        editor.commands.splitBlock()  // inserts a new <p> or splits current block
        return true
      },
    }
  },
})

const BlogEditor = () => {
  const [_, setEditorUpdated] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable default heading to avoid double config
        heading: false,
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextStyle,
      ShiftEnterNewParagraph

    ],
    content: `
        <h1>Start writing your blog here</h1>
        <p>what's in your mind</p>
      `,
  });

  useEffect(() => {
    if (!editor) return;

    const update = () => {
      setEditorUpdated((prev) => !prev);
    };
    editor.on("update", update);
    editor.on("selectionUpdate", update);

    return () => {
      editor.off("update", update);
      editor.off("selectionUpdate", update);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 rounded-t-md bg-zinc-800">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded-xl font-semibold ${
            editor.isActive("bold")
              ? "text-zinc-100 underline"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded-xl font-semibold ${
            editor.isActive("italic")
              ? "text-zinc-100 underline"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Italic
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-1 rounded-xl font-semibold ${
            editor.isActive("heading", { level: 1 })
              ? "text-zinc-100 underline"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1 rounded font-medium transition-colors duration-150
              ${
                editor.isActive("heading", { level: 2 })
                  ? "text-zinc-100 underline"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
        >
          H2
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded-xl font-semibold ${
            editor.isActive("bulletList")
              ? "text-zinc-100 underline"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().setCodeBlock().run()}
          className={`px-3 py-1 rounded-xl font-semibold ${
            editor.isActive("codeBlock")
              ? "text-zinc-100 underline"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Code
        </button>
      </div>
      {/* Editor Area */}
      <div className="border border-zinc-800 rounded-b-md p-4 h-[400px] overflow-y-auto text-base leading-relaxed prose prose-invert max-w-none">
        <EditorContent
          editor={editor}
          className="whitespace-pre-wrap break-words outline-none w-full"
        />
      </div>
    </div>
  );
};

export default BlogEditor;
