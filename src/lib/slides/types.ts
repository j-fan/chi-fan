export type Dialog = {
  characterName: string;
  bodyText: string;
  nextButton?: {
    text: string;
    action?: () => void;
  };
};
export type Dialogs = Array<Dialog>;

export type SlideType = 'pick-items' | 'drag-sides';
export type BaseSlideType = {
  type: SlideType;
  dialogs: Dialogs;
  errorStep: Dialog;
  successStep: Dialog;
};
export type PickItemsSlideType = {
  type: 'pick-items';
  targetCount: number;
  totalItems: number;
} & BaseSlideType;

export type DragSidesSlideType = {
  type: 'drag-sides';
} & BaseSlideType;
export type Slide = PickItemsSlideType | DragSidesSlideType;
export type SlidesType = Array<Slide>;
