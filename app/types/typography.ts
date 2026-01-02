import { cva, type VariantProps } from "class-variance-authority";

export const text = cva("", {
  variants: {
    role: {
      pageTitle: "text-3xl md:text-4xl font-semibold tracking-tighter",
      pageTitleSmall: "text-2xl md:text-3xl font-semibold tracking-tighter",
      sectionTitle: "text-2xl font-semibold tracking-tight",
      subsectionTitle: "text-xl font-semibold tracking-tight",
      sectionHeader: "text-lg font-semibold",
      h3: "text-lg font-semibold",
      h4: "text-xl font-semibold",
      h4Small: "text-base font-semibold",
      h5: "text-lg font-semibold",
      h6: "text-sm font-medium",

      company: "text-base font-semibold",
      roleTitle: "text-sm font-medium",
      impact: "text-sm font-normal leading-relaxed",

      body: "text-sm font-normal leading-relaxed",
      bodyStrong: "text-sm font-semibold leading-relaxed",
      bodyLarge: "text-base font-normal",
      bodyXLarge: "text-lg md:text-xl font-normal",
      bodySmall: "text-xs font-normal leading-relaxed",
      subtitle: "text-sm md:text-base font-normal",
      meta: "text-xs font-normal",
      label: "text-xs font-medium",
      caption: "text-xs font-normal",
      badge: "text-xs font-medium",
      cardTitle: "text-sm font-semibold",
      cardDescription: "text-xs font-medium",
    },
    tone: {
      default: "text-neutral-900 dark:text-neutral-100",
      muted: "text-neutral-600 dark:text-neutral-400",
      subtle: "text-neutral-500 dark:text-neutral-500",
      inverse: "text-white dark:text-black",
    },
    align: {
      left: "",
      right: "text-right",
    },
    leading: {
      normal: "",
      snug: "leading-snug",
      relaxed: "leading-relaxed",
    },
    numeric: {
      default: "",
      tabular: "tabular-nums",
    },
    truncate: {
      false: "",
      true: "truncate",
    },
  },
  defaultVariants: {
    tone: "default",
    align: "left",
    leading: "normal",
    numeric: "default",
    truncate: false,
  },
});

export type TextVariants = VariantProps<typeof text>;

