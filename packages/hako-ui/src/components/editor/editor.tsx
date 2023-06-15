import { useCallback, useState } from 'react';
import './editor.css';
import {
  LuHeading1,
  LuHeading2,
  LuItalic,
  LuBold,
  LuCode,
  LuUnderline,
  LuQuote,
  LuListOrdered,
  LuList,
  LuAlignLeft,
  LuAlignRight,
  LuAlignJustify,
  LuAlignCenter,
} from 'react-icons/lu';
import { createEditor, Editor as SlateEditor } from 'slate';
import isHotkey from 'is-hotkey';
import { withReact, Slate, Editable, RenderElementProps, RenderLeafProps } from 'slate-react';
import { Toolbar } from './toolbar';
import { Element } from './element';
import { Leaf } from './leaf';
import { EditorFormat } from './types';
import { MarkButton } from './mark-button';
import { BlockButton } from './block-button';
import { withHistory } from 'slate-history';

const HOTKEYS: Record<string, EditorFormat> = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

interface EditorProps {
  /**
   * The callback fired when a key is pressed.
   * @type React.KeyboardEventHandler<HTMLDivElement>
   * @default undefined
   */
  onChange?: React.KeyboardEventHandler<HTMLDivElement>;
}

export const Editor = ({ onChange }: EditorProps) => {
  const [editor] = useState(() => withHistory(withReact(createEditor())));
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);

  const isMarkActive = (format: EditorFormat) => {
    const marks = SlateEditor.marks(editor);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (format: EditorFormat) => {
    const isActive = isMarkActive(format);

    if (isActive) {
      SlateEditor.removeMark(editor, format);
    } else {
      SlateEditor.addMark(editor, format, true);
    }
  };

  const handleChange: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event)) {
        event.preventDefault();
        const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
        toggleMark(mark);
      }
    }

    onChange?.(event);
  };

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Toolbar>
        <MarkButton format="bold">
          <LuBold size={22} />
        </MarkButton>
        <MarkButton format="italic">
          <LuItalic size={22} />
        </MarkButton>
        <MarkButton format="underline">
          <LuUnderline size={22} />
        </MarkButton>
        <MarkButton format="code">
          <LuCode size={22} />
        </MarkButton>
        <BlockButton format="heading-one">
          <LuHeading1 size={24} />
        </BlockButton>
        <BlockButton format="heading-two">
          <LuHeading2 size={24} />
        </BlockButton>
        <BlockButton format="block-quote">
          <LuQuote size={24} />
        </BlockButton>
        <BlockButton format="numbered-list">
          <LuListOrdered size={24} />
        </BlockButton>
        <BlockButton format="bulleted-list">
          <LuList size={24} />
        </BlockButton>
        <BlockButton format="left">
          <LuAlignLeft size={24} />
        </BlockButton>
        <BlockButton format="center">
          <LuAlignCenter size={24} />
        </BlockButton>
        <BlockButton format="right">
          <LuAlignRight size={24} />
        </BlockButton>
        <BlockButton format="justify">
          <LuAlignJustify size={24} />
        </BlockButton>
      </Toolbar>
      <Editable
        className="p-2 focus:outline-none editor"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        spellCheck
        onKeyDown={handleChange}
      />
    </Slate>
  );
};
