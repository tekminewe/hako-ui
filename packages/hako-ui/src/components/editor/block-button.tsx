import { ReactNode } from 'react';
import { useSlate } from 'slate-react';
import { Editor, Element as SlateElement, Transforms } from 'slate';
import { EditorFormat } from './types';
import { Button } from './button';

const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];
const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export const BlockButton = ({ children, format }: { children: ReactNode; format: EditorFormat }) => {
  const editor = useSlate();

  const isBlockActive = (blockType = 'type') => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
      }),
    );

    return !!match;
  };

  const toggleBlock = () => {
    const isActive = isBlockActive(TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type');
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        LIST_TYPES.includes(n.type) &&
        !TEXT_ALIGN_TYPES.includes(format),
      split: true,
    });
    let newProperties: Partial<SlateElement>;
    if (TEXT_ALIGN_TYPES.includes(format)) {
      newProperties = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        align: isActive ? undefined : format,
      };
    } else {
      newProperties = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
      };
    }
    Transforms.setNodes<SlateElement>(editor, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  };

  return (
    <Button onClick={toggleBlock} isActive={isBlockActive(TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')}>
      {children}
    </Button>
  );
};
