// ─────────────────────────────────────────────────────────────────
// lib/inline-links.ts
// Contextual inline link processor for programmatic SNGPL pages.
// Replaces first occurrence of target phrases in body text with
// markdown-style [anchor text](href) links for SEO internal linking.
// ─────────────────────────────────────────────────────────────────

export interface LinkRule {
  /** Regex pattern to match in body text */
  pattern: RegExp;
  /** The replacement anchor text (group $1 is preserved from match) */
  href: string;
  /** How to rewrite the matched text as the anchor label */
  label?: string;
}

// ─── Core link rules ─────────────────────────────────────────────
// Ordered by specificity (more specific rules first).
// Only the FIRST match per body string is replaced (per rule).
const LINK_RULES: LinkRule[] = [
  // Bill calculator
  {
    pattern: /\bgas bill calculator\b/i,
    href: '/calculator',
    label: 'gas bill calculator',
  },
  {
    pattern: /\bbill calculator\b/i,
    href: '/calculator',
    label: 'bill calculator',
  },
  {
    pattern: /\b\/calculator\b/,
    href: '/calculator',
    label: 'SNGPL bill calculator',
  },

  // Duplicate bill
  {
    pattern: /\bduplicate bill\b/i,
    href: '/duplicate-bill',
    label: 'duplicate bill',
  },
  {
    pattern: /\bdownload.{0,20}bill\b/i,
    href: '/duplicate-bill',
    label: 'download your bill',
  },

  // Payment guide
  {
    pattern: /\bEasypaisa\b/,
    href: '/payment-guide',
    label: 'Easypaisa',
  },
  {
    pattern: /\bJazzCash\b/,
    href: '/payment-guide',
    label: 'JazzCash',
  },
  {
    pattern: /\bpay.{0,30}online\b/i,
    href: '/payment-guide',
    label: 'pay online',
  },
  {
    pattern: /\bonline payment\b/i,
    href: '/payment-guide',
    label: 'online payment',
  },

  // Consumer number guide
  {
    pattern: /\bconsumer number\b/i,
    href: '/consumer-number',
    label: 'consumer number',
  },

  // Bill check guide
  {
    pattern: /\bcheck.{0,20}bill online\b/i,
    href: '/bill-check',
    label: 'check your bill online',
  },
  {
    pattern: /\bbillchecker\.sngpl\.com\.pk\b/i,
    href: '/bill-check',
    label: 'billchecker.sngpl.com.pk',
  },

  // Payment guide
  {
    pattern: /\bpayment guide\b/i,
    href: '/payment-guide',
    label: 'payment guide',
  },
  {
    pattern: /\bpayment methods?\b/i,
    href: '/payment-guide',
    label: 'payment methods',
  },

  // Troubleshooting
  {
    pattern: /\btroubleshooting\b/i,
    href: '/guides',
    label: 'troubleshooting guide',
  },
  {
    pattern: /\bfile a complaint\b/i,
    href: '/guides',
    label: 'file a complaint',
  },
  {
    pattern: /\bgas leak\b/i,
    href: '/guides',
    label: 'gas leak',
  },

  // Consumer number recovery
  {
    pattern: /\brecover.{0,15}consumer number\b/i,
    href: '/consumer-number',
    label: 'recover your consumer number',
  },
  {
    pattern: /\blost.{0,15}consumer number\b/i,
    href: '/consumer-number',
    label: 'lost consumer number',
  },

  // SNGPL app
  {
    pattern: /\bSNGPL.{0,10}mobile app\b/i,
    href: '/bill-check',
    label: 'SNGPL mobile app',
  },
  {
    pattern: /\bSNGPL Consumer App\b/i,
    href: '/bill-check',
    label: 'SNGPL Consumer App',
  },

  // Slab/calculator
  {
    pattern: /\bslab.{0,10}rate\b/i,
    href: '/calculator',
    label: 'slab rate',
  },
  {
    pattern: /\bHHM\b/,
    href: '/calculator',
    label: 'HHM',
  },

  // Guides hub
  {
    pattern: /\bSNGPL guide\b/i,
    href: '/guides',
    label: 'SNGPL guide',
  },
];

// ─────────────────────────────────────────────────────────────────
// applyInlineLinks
// Takes a body string and category+city context.
// Returns the body string with contextual [text](href) links injected
// at first-occurrence points.
// ─────────────────────────────────────────────────────────────────
export function applyInlineLinks(
  body: string,
  currentHref?: string
): string {
  let result = body;

  for (const rule of LINK_RULES) {
    // Don't link to the current page
    if (currentHref && rule.href === currentHref) continue;

    // Replace only the first occurrence
    result = result.replace(rule.pattern, (match) => {
      const label = rule.label ?? match;
      return `[${label}](${rule.href})`;
    });
  }

  return result;
}

// ─────────────────────────────────────────────────────────────────
// renderBodyWithLinks
// Processes a body string: applies inline links, then converts
// markdown **bold**, [text](href) links, and double-newlines into
// an HTML-safe string for use with dangerouslySetInnerHTML.
// ─────────────────────────────────────────────────────────────────
export function renderBodyWithLinks(
  body: string,
  currentHref?: string
): string {
  const linked = applyInlineLinks(body, currentHref);

  return linked
    // Convert markdown [text](href) to <a> tags
    .replace(
      /\[([^\]]+)\]\((\/[^)]+)\)/g,
      '<a href="$2" class="text-blue-600 hover:text-blue-800 underline underline-offset-2">$1</a>'
    )
    // Convert **bold** to <strong>
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Convert double newlines to paragraph breaks
    .replace(/\n\n/g, '</p><p class="mt-3">')
    // Wrap in opening paragraph tag
    .replace(/^/, '<p class="mt-3">')
    // Close last paragraph
    .replace(/$/, '</p>');
}
