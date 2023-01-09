import type { SvelteComponentTyped } from 'svelte';

export type Dialog = {
  characterName: string;
  bodyText: string;
  nextButton?: {
    text: string;
    action?: () => void;
    href?: string;
  };
};
export type Dialogs = Array<Dialog>;

export type SlideType = 'pick-items' | 'click-times';
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
  itemComponent: typeof SvelteComponentTyped<{ picked?: boolean }>;
  bgImage: string | undefined;
} & BaseSlideType;

export type ClickTimesSlideType = {
  type: 'click-times';
  targetComponent: typeof SvelteComponentTyped<{ progress?: number }>;
  dragComponent: typeof SvelteComponentTyped<{ isIntersecting?: boolean }>;
  targetStrokes: number;
} & BaseSlideType;
export type Slide = PickItemsSlideType | ClickTimesSlideType;
export type SlidesType = Array<Slide>;
