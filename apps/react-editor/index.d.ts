import { Component } from 'react';
import ToastuiEditor, { EditorOptions, ViewerOptions, EventMap } from 'my-awesome13-editor';
import ToastuiEditorViewer from 'my-awesome13-editor/dist/toastui-editor-viewer';

export interface EventMapping {
  onLoad: EventMap['load'];
  onChange: EventMap['change'];
  onCaretChange: EventMap['caretChange'];
  onFocus: EventMap['focus'];
  onBlur: EventMap['blur'];
  onKeydown: EventMap['keydown'];
  onKeyup: EventMap['keyup'];
  onBeforePreviewRender: EventMap['beforePreviewRender'];
  onBeforeConvertWysiwygToMarkdown: EventMap['beforeConvertWysiwygToMarkdown'];
}

export type EventNames = keyof EventMapping;

export type EditorProps = Omit<EditorOptions, 'el'> & Partial<EventMapping>;
export type ViewerProps = Omit<ViewerOptions, 'el'> & Partial<EventMapping>;

export class Editor extends Component<EditorProps> {
  getInstance(): ToastuiEditor;

  getRootElement(): HTMLElement;
}

export class Viewer extends Component<ViewerProps> {
  getInstance(): ToastuiEditorViewer;

  getRootElement(): HTMLElement;
}
