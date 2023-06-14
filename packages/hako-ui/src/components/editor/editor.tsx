import { useCallback, useState } from 'react';
import { BiBold, BiItalic, BiUnderline } from 'react-icons/bi';
import { createEditor, Editor as SlateEditor } from 'slate';
import isHotkey from 'is-hotkey';
import { withReact, Slate, Editable, RenderElementProps, RenderLeafProps } from 'slate-react';
import { Toolbar } from './toolbar';
import { Element } from './element';
import { Leaf } from './leaf';
import { EditorFormat } from './types';
import { MarkButton } from './mark-button';

const HOTKEYS: Record<string, EditorFormat> = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  // 'mod+`': 'code',
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
  const [editor] = useState(() => withReact(createEditor()));
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
          <BiBold />
        </MarkButton>
        <MarkButton format="italic">
          <BiItalic />
        </MarkButton>
        <MarkButton format="underline">
          <BiUnderline />
        </MarkButton>
      </Toolbar>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} spellCheck onKeyDown={handleChange} />
    </Slate>
  );
};
