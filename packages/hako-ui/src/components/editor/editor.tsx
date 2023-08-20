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
import { createEditor, Descendant, Editor as SlateEditor } from 'slate';
import isHotkey from 'is-hotkey';
import { withReact, Slate, Editable, RenderElementProps, RenderLeafProps } from 'slate-react';
import { Toolbar } from './toolbar';
import { Element } from './element';
import { Leaf } from './leaf';
import { EditorFormat } from './types';
import { MarkButton } from './mark-button';
import { BlockButton } from './block-button';
import { withHistory } from 'slate-history';
import classNames from 'classnames';

const HOTKEYS: Record<string, EditorFormat> = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  } as Descendant,
];

interface EditorProps {
  /**
   * The label for the input.
   * @type {string}
   * @default ''
   * @example 'Message'
   */
  label?: string;

  /**
   * The callback fired when a key is pressed.
   * @param {Descendant[]} value - The new value.
   * @default undefined
   */
  onChange?: (value: Descendant[]) => void;

  /**
   * If `true`, the editor is disabled.
   * @default false
   * @optional
   * @type boolean
   */
  disabled?: boolean;

  /**
   * The value of the editor.
   * @default undefined
   * @optional
   * @type Descendant[]
   */
  value?: Descendant[];

  /**
   * If `true`, the editor is in preview mode.
   * @default false
   * @optional
   * @type bool
   */
  previewOnly?: boolean;

  /**
   * If `true`, the editor is required.
   * @default false
   * @type bool
   */
  required?: boolean;

  /**
   * The hint for the input. This will be displayed below the input.
   * Can be used to provide additional information about the input such as error messages.
   *
   * @type {string}
   * @default ''
   * @example 'We will never share your email address with anyone else.'
   */
  hint?: string;

  /**
   * The status of the input. This will be used to determine the color of the input border.
   * Can be used to indicate the input is in an error state.
   * @type {string}
   * @default 'default'
   * @example 'error'
   */
  status?: 'error' | 'success' | 'default';
}

export const Editor = ({
  label,
  onChange,
  required,
  hint,
  status = 'default',
  disabled = false,
  value = initialValue,
  previewOnly = false,
}: EditorProps) => {
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
  };

  return (
    <div className="space-y-1">
      {label && (
        <label>
          {label} {required && <span className="text-danger100">*</span>}
        </label>
      )}
      <div>
        <Slate
          editor={editor}
          initialValue={value}
          onChange={(value) => {
            const isAstChange = editor.operations.some((op) => 'set_selection' !== op.type);
            if (isAstChange) {
              onChange?.(value);
            }
          }}
        >
          {!previewOnly && (
            <Toolbar>
              <MarkButton disabled={disabled} format="bold">
                <LuBold size={22} />
              </MarkButton>
              <MarkButton disabled={disabled} format="italic">
                <LuItalic size={22} />
              </MarkButton>
              <MarkButton disabled={disabled} format="underline">
                <LuUnderline size={22} />
              </MarkButton>
              <MarkButton disabled={disabled} format="code">
                <LuCode size={22} />
              </MarkButton>
              <BlockButton disabled={disabled} format="heading-one">
                <LuHeading1 size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="heading-two">
                <LuHeading2 size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="block-quote">
                <LuQuote size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="numbered-list">
                <LuListOrdered size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="bulleted-list">
                <LuList size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="left">
                <LuAlignLeft size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="center">
                <LuAlignCenter size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="right">
                <LuAlignRight size={24} />
              </BlockButton>
              <BlockButton disabled={disabled} format="justify">
                <LuAlignJustify size={24} />
              </BlockButton>
            </Toolbar>
          )}
          <Editable
            className={classNames('p-2 focus:outline-none editor', {
              'h-40': !previewOnly,
            })}
            readOnly={disabled || previewOnly}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            spellCheck
            onKeyDown={handleChange}
          />
        </Slate>
      </div>
      <div
        className={classNames('min-h-[20px]', {
          'text-danger100': status === 'error',
          'text-success': status === 'success',
        })}
      >
        {hint}
      </div>
    </div>
  );
};
