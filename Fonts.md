# 🔤 MINDBRIDGE TYPOGRAPHY GUIDE

Complete font and typography reference for the MINDBRIDGE mental health platform.

---

## FONT FAMILIES

### Primary Font (Headings)
**Playfair Display** - Serif font for elegance and sophistication

```css
font-family: 'Playfair Display', serif;
```

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
```

**Available Weights:**
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-Bold)
- 700 (Bold)

**Usage:** Titles, headings (H1-H4), logo, feature cards, section headers

---

### Secondary Font (Body Text)
**Inter** - Sans-serif font for readability and modern feel

```css
font-family: 'Inter', sans-serif;
```

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
```

**Available Weights:**
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-Bold)

**Usage:** Body text, paragraphs, buttons, labels, navigation, forms

---

### Tertiary Font (Decorative - Limited Use)
**Cormorant Garamond** - Serif font for special occasions

```css
font-family: 'Cormorant Garamond', serif;
```

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
```

**Available Weights:**
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-Bold)

**Usage:** Special decorative elements (currently minimal usage in project)

---

## FONT SIZES

### Landing Page (LandingPage.html)

#### Headings
| Element | Font Size | Font Family | Weight | Usage |
|---------|-----------|-------------|--------|-------|
| **Hero H1** | `68px` | Playfair Display | 600 | Main landing hero title |
| **Features H2** | `52px` | Playfair Display | 600 | Feature section title |
| **About H2** | `44px` | Playfair Display | 600 | About section title |
| **Pricing H2** | `52px` | Playfair Display | 600 | Pricing section title |
| **Section H2** | `34px` | Playfair Display | 600 | Assistance banner title |
| **H3 (Cards)** | `20px-24px` | Playfair Display | 600 | Card titles, feature cards |

#### Body Text
| Element | Font Size | Font Family | Weight | Line Height |
|---------|-----------|-------------|--------|-------------|
| **Hero Description** | `16px` | Inter | 300 | 1.8 |
| **Section Descriptions** | `15px-16px` | Inter | 300 | 1.7-1.8 |
| **Card Text** | `13px` | Inter | 300 | 1.6 |
| **Button Text** | `13px-15px` | Inter | 500 | - |
| **Small Text** | `12px-13px` | Inter | 300-500 | - |

#### Navigation & UI
| Element | Font Size | Font Family | Weight |
|---------|-----------|-------------|--------|
| **Logo** | `24px` | Playfair Display | 600 |
| **Nav Links** | `14px` | Inter | 400 |
| **Form Inputs** | `14px` | Inter | 400 |
| **Modal Title** | `48px` | Playfair Display | 600 |

---

### Dashboard Pages (Dashboard, Journal, AI Companion, etc.)

#### Headings
| Element | Font Size | Font Family | Weight | Usage |
|---------|-----------|-------------|--------|-------|
| **Page Title (Header)** | `32px` | Playfair Display | 600 | Main page title in header |
| **Logo (Sidebar)** | `28px` | Playfair Display | 600 | Sidebar brand logo |
| **Card Titles** | `18px-24px` | Playfair Display | 600 | Section and card headers |
| **Small Titles** | `16px` | Playfair Display | 600 | Smaller section titles |

#### Body Text
| Element | Font Size | Font Family | Weight | Line Height |
|---------|-----------|-------------|--------|-------------|
| **Body Text** | `14px-15px` | Inter | 300-400 | 1.6-1.8 |
| **Feed Posts** | `15px` | Inter | 300 | 1.8 |
| **Username** | `15px` | Inter | 400 | - |
| **Labels/Captions** | `13px-14px` | Inter | 300-500 | 1.5-1.7 |
| **Small Text** | `12px-13px` | Inter | 300 | 1.6 |

#### Navigation & UI
| Element | Font Size | Font Family | Weight |
|---------|-----------|-------------|--------|
| **Nav Items** | `14px` | Inter | 400 |
| **Buttons** | `13px-14px` | Inter | 500 |
| **Search Input** | `14px` | Inter | 400 |
| **Filter Buttons** | `13px` | Inter | 500 |

---

### Profile Page (UserProfilePage.html)

#### Headings
| Element | Font Size | Font Family | Weight |
|---------|-----------|-------------|--------|
| **User Name** | `32px` | Playfair Display | 600 |
| **Section Headers** | `18px-22px` | Playfair Display | 600 |
| **Stats Numbers** | `28px` | Playfair Display | 600 |

#### Body Text
| Element | Font Size | Font Family | Weight |
|---------|-----------|-------------|--------|
| **User Bio** | `14px` | Inter | 300 |
| **Stats Labels** | `13px` | Inter | 300 |
| **Card Text** | `14px` | Inter | 400 |
| **Small Labels** | `12px` | Inter | 300 |

---

## FONT WEIGHTS USAGE

### Playfair Display (Headings)
| Weight | Value | Usage |
|--------|-------|-------|
| **Regular** | 400 | Rarely used; generally prefer 600 |
| **Medium** | 500 | Rarely used; generally prefer 600 |
| **Semi-Bold** | 600 | **Primary weight** - Most headings, titles, logo |
| **Bold** | 700 | Reserved for strong emphasis (minimal use) |

### Inter (Body)
| Weight | Value | Usage |
|--------|-------|-------|
| **Light** | 300 | **Primary for body text** - Descriptions, paragraphs, captions |
| **Regular** | 400 | **Primary for UI** - Navigation, labels, standard text |
| **Medium** | 500 | **Buttons & emphasis** - CTAs, important labels |
| **Semi-Bold** | 600 | Strong emphasis, headings (minimal use) |

---

## LETTER SPACING

Typography uses subtle letter spacing for elegance and readability.

### Headings (Playfair Display)
| Element | Letter Spacing | Usage |
|---------|----------------|-------|
| **Large Titles** | `1px-2px` | Hero titles, page titles, logo |
| **Medium Titles** | `0.5px-1px` | Section headers, card titles |
| **Small Titles** | `0.3px-0.5px` | Small headers |
| **Pricing Card Titles** | `1.5px` | Special emphasis |
| **Uppercase Titles** | `2px` | Page header titles (uppercase) |

### Body Text (Inter)
| Element | Letter Spacing | Usage |
|---------|----------------|-------|
| **Body Text** | `0.2px-0.3px` | Standard body paragraphs |
| **Nav Links** | `0.5px` | Navigation items |
| **Buttons** | `0.5px` | Button text |
| **Labels** | `0.3px` | Form labels, UI labels |
| **Small Text** | `0.3px` | Captions, small descriptions |
| **Uppercase Labels** | `1px-2px` | Small uppercase labels |

---

## LINE HEIGHT

### Headings
| Element | Line Height | Purpose |
|---------|-------------|---------|
| **Large Headlines** | `1.1-1.3` | Tight spacing for impact |
| **Section Headers** | `1.2-1.4` | Balanced readability |

### Body Text
| Element | Line Height | Purpose |
|---------|-------------|---------|
| **Long Paragraphs** | `1.7-1.8` | Maximum readability |
| **Short Descriptions** | `1.5-1.6` | Compact content |
| **Card Text** | `1.6` | Balanced readability |
| **UI Labels** | `1.0-1.2` | Tight spacing |

---

## TEXT ALIGNMENT

### Alignment by Element Type

| Element | Alignment | Reason |
|---------|-----------|--------|
| **Hero Text** | Left | Natural reading flow |
| **Feature Cards** | Center | Visual balance |
| **Section Headers** | Center | Emphasis and balance |
| **Body Paragraphs** | Left/Center | Context-dependent |
| **Navigation** | Left | Standard UI pattern |
| **Buttons** | Center | Visual consistency |
| **Forms** | Left | Best for readability |

---

## TEXT TRANSFORMS

### Uppercase Usage
| Element | Transform | Letter Spacing |
|---------|-----------|----------------|
| **Page Header Titles** | `uppercase` | `2px` |
| **Small Labels** | `uppercase` | `1px-2px` |
| **Pricing Card Titles** | `uppercase` | `1.5px` |

Most text maintains **normal casing** for readability and elegance.

---

## COMPLETE IMPORT STATEMENT

Copy this to include all fonts at once:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');
```

---

## FONT PAIRING EXAMPLES

### Large Hero Section
```css
.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 68px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--gold);
}

.hero .description {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  letter-spacing: 0.3px;
  color: var(--pearl);
}
```

### Section Header with Subtitle
```css
.section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--navy);
}

.section p {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0.3px;
  color: var(--charcoal);
}
```

### Button Styling
```css
.button {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  /* Colors depend on button type */
}
```

### Card Title + Content
```css
.card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--gold);
}

.card p {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.6;
  color: var(--pearl);
}
```

### Logo Styling
```css
.logo {
  font-family: 'Playfair Display', serif;
  font-size: 24px-28px;
  font-weight: 600;
  letter-spacing: 2px;
}

.logo .mind {
  color: var(--gold);
  font-weight: 600;
}

.logo .bridge {
  color: var(--cream);
  font-weight: 400;
}
```

---

## RESPONSIVE FONT SIZES

### Recommended Breakpoints

#### Desktop (Default)
- Use sizes as documented above

#### Tablet (max-width: 1024px)
```css
/* Reduce large headings by 15-20% */
.hero h1 { font-size: 54px; } /* from 68px */
.section h2 { font-size: 42px; } /* from 52px */
```

#### Mobile (max-width: 768px)
```css
/* Reduce headings by 30-40% */
.hero h1 { font-size: 40px; } /* from 68px */
.section h2 { font-size: 32px; } /* from 52px */
.card h3 { font-size: 18px; } /* from 22px */

/* Keep body text readable */
.body-text { font-size: 14px; } /* maintain or reduce slightly */
```

---

## TYPOGRAPHY BEST PRACTICES

### DO ✓
- Use Playfair Display for **all headings** (H1-H6)
- Use Inter for **all body text, UI elements, and buttons**
- Maintain consistent letter-spacing (0.3px-0.5px for body)
- Use weight 600 for Playfair Display headings
- Use weight 300 for Inter body text
- Use weight 500 for Inter buttons and emphasis
- Maintain line-height 1.7-1.8 for long paragraphs
- Keep uppercase usage minimal and intentional

### DON'T ✗
- Don't mix too many font weights in one section
- Don't use Cormorant Garamond extensively (limited decorative use)
- Don't ignore letter-spacing (it's key to the elegant feel)
- Don't use font sizes below 12px for readability
- Don't use tight line-height (<1.5) for body text
- Don't use too many uppercase elements
- Don't use bold (700) Playfair unless absolutely needed

---

## ACCESSIBILITY CONSIDERATIONS

### Font Size Minimums
- **Body Text:** Never below `13px`
- **Important Info:** Minimum `14px`
- **Optimal Reading:** `15px-16px`

### Line Height for Readability
- **Body Text:** Minimum `1.5`, optimal `1.7-1.8`
- **Headings:** Can be tighter (`1.2-1.4`)

### Font Weight Contrast
- Ensure sufficient contrast between heading weights (600) and body weights (300-400)
- Don't use weights too light (avoid 100-200)

### Letter Spacing
- Adequate spacing improves readability for dyslexia
- Current spacing (0.3px-0.5px) is accessibility-friendly

---

## FALLBACK FONTS

Always include fallback fonts for each family:

```css
/* Playfair Display Fallback */
font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;

/* Inter Fallback */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

---

## ICON FONTS

**Flaticon UI Icons** are used throughout the project:

```css
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');
```

**Usage:**
```html
<i class="fi-rr-icon-name"></i>
```

**Sizing:**
- Navigation icons: `19px`
- Action icons: `16px-22px`
- Large decorative icons: `36px`

---

*Last Updated: January 27, 2026*  
*Project: MINDBRIDGE Mental Health Platform*
