import type { ConfettiProps } from '$lib/confetti/types';
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
  bgImage?: string;
};
export type PickItemsSlideType = {
  type: 'pick-items';
  targetCount: number;
  totalItems: number;
  itemComponent: typeof SvelteComponentTyped<{ picked?: boolean }>;
  toolComponent?: typeof SvelteComponentTyped<{ isIntersecting?: boolean; isActive?: boolean }>;
} & BaseSlideType;

export type ClickTimesSlideType = {
  type: 'click-times';
  targetComponent: typeof SvelteComponentTyped<{ progress?: number }>;
  toolComponent: typeof SvelteComponentTyped<{ isIntersecting?: boolean }>;
  targetClicks: number;
  confettiProps?: ConfettiProps;
} & BaseSlideType;
export type Slide = PickItemsSlideType | ClickTimesSlideType;
export type SlidesType = Array<Slide>;
