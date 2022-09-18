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
export type PickItemsSlide = {
  type: 'pick-items';
} & BaseSlideType;

export type DragSidesSlide = {
  type: 'drag-sides';
} & BaseSlideType;

export type Slides = Array<PickItemsSlide | DragSidesSlide>;
