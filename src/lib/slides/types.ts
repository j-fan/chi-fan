export type Dialog = {
  characterName: string;
  bodyText: string;
  nextButton?: {
    text: string;
    action?: () => void;
  };
};

export type Dialogs = Array<Dialog>;
