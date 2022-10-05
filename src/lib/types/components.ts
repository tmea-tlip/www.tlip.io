/**
 *
 */
export interface Section {
    /**
     *
     */
    id: string;
    /**
     *
     */
    component: unknown;
    /**
     *
     */
    lightModeNavbar?: boolean;
}

/**
 *
 */
export interface Button {
    /**
     *
     */
    title: string;
    /**
     *
     */
    isExternal?: boolean;
    /**
     *
     */
    url: string;
    /**
     *
     */
    secondary?: boolean;
    /**
     *
     */
    small?: boolean;
    /**
     *
     */
    disabled?: boolean;
    /**
     *
     */
    classes?: string;
}

/**
 *
 */
export interface FaqSection {
    /**
     *
     */
    id: string;
    /**
     *
     */
    title: string;
    /**
     *
     */
    description?: string;
    /**
     *
     */
    subsections?: AccordionItem[];
}

/**
 *
 */
export interface AccordionItem {
    /**
     *
     */
     id: string;
     /**
      *
      */
     title: string;
     /**
      *
      */
     description?: string;
}
