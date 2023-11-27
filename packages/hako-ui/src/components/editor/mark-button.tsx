import { useSlate } from 'slate-react';
import { Editor } from 'slate';
import { EditorFormat } from './types';
import { Button } from './button';

export interface MarkButtonProps {
  format: EditorFormat;
  children: React.ReactNode;
  disabled?: boolean;
}

export const MarkButton = ({ format, children, disabled = false }: MarkButtonProps) => {
  const editor = useSlate();

  const toggleMark = () => {
    const isActive = isMarkActive();

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const isMarkActive = () => {
    const marks = Editor.marks(editor);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return marks ? marks[format] === true : false;
  };

  return (
    <Button disabled={disabled} onClick={toggleMark} isActive={isMarkActive()}>
      {children}
    </Button>
  );
};
