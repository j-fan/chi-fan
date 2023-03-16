import type { ConfettiProps } from '$lib/confetti/types';
import type { SvelteComponent, SvelteComponentTyped } from 'svelte';

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

export type SlideType = 'pick-items' | 'click-times' | 'drag-drop' | 'finished' | 'static';
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
  /**
   * How far from the bottom to render the itemComponents
   * Measured in %
   */
  bottomPosition: number;
  /**
   * Whether to allow items to be "unpicked"
   */
  allowToggle?: boolean;
} & BaseSlideType;

export type ClickTimesSlideType = {
  type: 'click-times';
  targetComponent: typeof SvelteComponentTyped<{ progress?: number }>;
  toolComponent: typeof SvelteComponentTyped<{ isIntersecting?: boolean }>;
  targetClicks: number;
  confettiProps?: ConfettiProps;
} & BaseSlideType;

export type DragDropSlideType = {
  type: 'drag-drop';
  dropZone: typeof SvelteComponentTyped<{ progress?: number }>;
  dropZoneOverlay?: typeof SvelteComponentTyped<{ progress?: number }>;
  dragItems: Array<typeof SvelteComponent>;
  /**
   * Optional prop for specifying a different appearance for drag items
   * when they are dropped in the dropzone. It this is omitted, the item
   * will look the same before & after dropping.
   */
  droppedItems?: Array<typeof SvelteComponent>;
  confettiProps?: ConfettiProps;
  /**
   * By default, moved items disappear after the confetti splash animation.
   * Set this prop to true if you want the moved items to persist in the view.
   * They will stack on top of each other in the dropzone element, with the one
   * picked last being on top.
   */
  showMovedItemsInStack?: boolean;
} & BaseSlideType;

export type FinishedSlideType = {
  type: 'finished';
  heroImage: string;
  title: string;
} & Omit<BaseSlideType, 'dialogs' | 'errorStep'>;

export type StaticSlideType = {
  type: 'static';
  heroImage: string;
  alt: string;
  heightPercent: number;
} & Omit<BaseSlideType, 'dialogs' | 'errorStep'>;

export type Slide =
  | PickItemsSlideType
  | ClickTimesSlideType
  | DragDropSlideType
  | FinishedSlideType
  | StaticSlideType;

export type SlidesType = Array<Slide>;
