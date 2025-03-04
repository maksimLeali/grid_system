export type ColorKeys =
  | "primary"
  | "primary-shade"
  | "primary-light"
  | "primary-light-shade"
  | "primary-dark"
  | "primary-dark-shade"
  | "secondary"
  | "secondary-shade"
  | "secondary-light"
  | "secondary-light-shade"
  | "secondary-dark"
  | "secondary-dark-shade"
  | "tertiary"
  | "tertiary-shade"
  | "tertiary-light"
  | "tertiary-light-shade"
  | "tertiary-dark"
  | "tertiary-dark-shade"
  | "black"
  | "black-light"
  | "black-dark"
  | "white-light"
  | "white"
  | "white-dark"
  | "gray"
  | "gray-light"
  | "gray-dark"
  | "success"
  | "success-dark"
  | "success-light"
  | "danger"
  | "danger-dark"
  | "danger-light"

export let colors: Record<ColorKeys | string, string> = {
  "primary": "var(--primary)",
  "primary-shade": "var(--primary-shade)",
  "primary-light": "var(--primary-light)",
  "primary-light-shade": "var(--primary-light-shade)",
  "primary-dark": "var(--primary-dark)",
  "primary-dark-shade": "var(--primary-dark-shade)",
  "secondary": "var(--secondary)",
  "secondary-shade": "var(--secondary-shade)",
  "secondary-light": "var(--secondary-light)",
  "secondary-light-shade": "var(--secondary-light-shade)",
  "secondary-dark": "var(--secondary-dark)",
  "secondary-dark-shade": "var(--secondary-dark-shade)",
  "tertiary": "var(--tertiary)",
  "tertiary-shade": "var(--tertiary-shade)",
  "tertiary-light": "var(--tertiary-light)",
  "tertiary-light-shade": "var(--tertiary-light-shade)",
  "tertiary-dark": "var(--tertiary-dark)",
  "tertiary-dark-shade": "var(--tertiary-dark-shade)",
  "black": "var(--black)",
  "black-light": "var(--black-light)",
  "black-dark": "var(--black-dark)",
  "white-light": "var(--white-light)",
  "white": "var(--white)",
  "white-dark": "var(--white-dark)",
  "gray": "var(--gray)",
  "gray-light": "var(--gray-light)",
  "gray-dark": "var(--gray-dark)",
  "success": "var(--success)",
  "success-dark": "var(--success-dark)",
  "success-light": "var(--success-light)",
  "danger": "var(--danger)",
  "danger-dark": "var(--danger-dark)",
  "danger-light": "var(--danger-light)"
};
