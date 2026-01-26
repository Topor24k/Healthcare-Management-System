# 🎨 MINDBRIDGE COLOR PALETTE

Complete color reference guide for the MINDBRIDGE mental health platform.

---

## PRIMARY COLORS (Main Brand Colors)

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Cream** | `#FAF8F3` | rgb(250, 248, 243) | Main background, button text, light elements |
| **Ivory** | `#F5F2E9` | rgb(245, 242, 233) | Secondary background, alternating sections |
| **Navy** | `#1B2B3A` | rgb(27, 43, 58) | Primary dark color, headers, titles |
| **Deep Navy** | `#0F1922` | rgb(15, 25, 34) | Darkest accent, deep backgrounds |
| **Gold** | `#C9A961` | rgb(201, 169, 97) | Primary accent, highlights, icons, active states |
| **Bronze** | `#8B6F47` | rgb(139, 111, 71) | Secondary accent, borders |

---

## SECONDARY COLORS (Supporting Colors)

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Burgundy** | `#6B2C3E` | rgb(107, 44, 62) | Accent color, emotion states, icons |
| **Sage** | `#8A9A8E` | rgb(138, 154, 142) | Muted text, placeholders, inactive icons |
| **Charcoal** | `#2C2C2C` | rgb(44, 44, 44) | Body text, dark text |
| **Pearl** | `#E8E4D9` | rgb(232, 228, 217) | Light borders, dividers, subtle backgrounds |

---

## SPECIAL BACKGROUNDS

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Light Teal** | `#9BBAB8` | rgb(155, 186, 184) | Message/Contact section background |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds, input fields, pure white elements |

---

## GRADIENTS

### Sidebar Gradient
```css
background: linear-gradient(165deg, #0F1922 0%, #1B2B3A 100%);
/* Deep Navy → Navy */
```
**Usage:** Sidebar background

### Header Gradient
```css
background: linear-gradient(90deg, #1B2B3A 0%, #0F1922 100%);
/* Navy → Deep Navy */
```
**Usage:** Header/Top navigation background

### Accent Gradient
```css
background: linear-gradient(135deg, #C9A961 0%, #8B6F47 100%);
/* Gold → Bronze */
```
**Usage:** Buttons, active elements, pricing cards, CTAs

### Text Gradient (Titles)
```css
background: linear-gradient(135deg, #1B2B3A 0%, #6B2C3E 100%);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
/* Navy → Burgundy */
```
**Usage:** Feature section titles

### Background Gradients
```css
/* Ivory to White */
background: linear-gradient(135deg, #F5F2E9 0%, #FFFFFF 100%);

/* Pearl to Ivory to Pearl */
background: linear-gradient(135deg, #E8E4D9 0%, #F5F2E9 48%, #E8E4D9 100%);
```
**Usage:** Section backgrounds, card backgrounds

---

## TRANSPARENT/RGBA COLORS

### Gold Variants (with opacity)
| Opacity | RGBA Value | Usage |
|---------|------------|-------|
| 8% | `rgba(201, 169, 97, 0.08)` | Navigation item backgrounds |
| 10% | `rgba(201, 169, 97, 0.1)` | Focus states, light borders |
| 15% | `rgba(201, 169, 97, 0.15)` | Header borders |
| 20% | `rgba(201, 169, 97, 0.2)` | Borders, decorative elements |
| 25% | `rgba(201, 169, 97, 0.25)` | Box shadows, hover effects |
| 30% | `rgba(201, 169, 97, 0.3)` | Strong shadows, pricing card elements |
| 35% | `rgba(201, 169, 97, 0.35)` | Button hover shadows |

### Black Variants (shadows)
| Opacity | RGBA Value | Usage |
|---------|------------|-------|
| 6% | `rgba(0, 0, 0, 0.06)` | Very light shadows |
| 8% | `rgba(0, 0, 0, 0.08)` | Light shadows on cards |
| 10% | `rgba(0, 0, 0, 0.1)` | Standard shadows |
| 12% | `rgba(0, 0, 0, 0.12)` | Medium shadows |
| 15% | `rgba(0, 0, 0, 0.15)` | Strong shadows |
| 20% | `rgba(0, 0, 0, 0.2)` | Deep shadows |
| 30% | `rgba(0, 0, 0, 0.3)` | Very strong shadows |

### Bronze Variants
| Opacity | RGBA Value | Usage |
|---------|------------|-------|
| 10% | `rgba(139, 111, 71, 0.1)` | Hover effects |
| 12% | `rgba(139, 111, 71, 0.12)` | Card shadows |
| 15% | `rgba(139, 111, 71, 0.15)` | Strong hover shadows |
| 20% | `rgba(139, 111, 71, 0.2)` | Elevated shadows |

### Deep Navy Variant
| Opacity | RGBA Value | Usage |
|---------|------------|-------|
| 60% | `rgba(15, 25, 34, 0.6)` | Modal backdrop |

---

## EMOTION CALENDAR COLORS

Special gradients used for emotion tracking in the profile/community pages.

| Emotion | Gradient | Hex Range |
|---------|----------|-----------|
| **Happy** | `linear-gradient(135deg, #ffb84d 0%, #ff9f1a 100%)` | Orange gradient |
| **Calm** | `linear-gradient(135deg, #79d7be 0%, #5bc9a5 100%)` | Teal/Green gradient |
| **Sad** | `linear-gradient(135deg, #6b9ac4 0%, #5586b3 100%)` | Blue gradient |
| **Reflective** | `linear-gradient(135deg, #b29dd9 0%, #9b85c7 100%)` | Purple gradient |

---

## COLOR USAGE BY ELEMENT

### Buttons

#### Primary Buttons
- **Background:** Accent Gradient (`#C9A961` → `#8B6F47`)
- **Text:** Cream (`#FAF8F3`)
- **Border:** Gold (`#C9A961`)
- **Hover Background:** Navy (`#1B2B3A`)
- **Hover Text:** Gold (`#C9A961`)

#### Secondary Buttons
- **Background:** Cream (`#FAF8F3`)
- **Text:** Navy (`#1B2B3A`)
- **Border:** Bronze (`#8B6F47`)
- **Hover Background:** Navy (`#1B2B3A`)
- **Hover Text:** Gold (`#C9A961`)

### Typography

#### Headings
- **H1/H2 (Large):** Navy (`#1B2B3A`) or Gold (`#C9A961`)
- **H3/H4 (Medium):** Navy (`#1B2B3A`)
- **Font Family:** Playfair Display (serif)

#### Body Text
- **Primary:** Charcoal (`#2C2C2C`)
- **Secondary:** Sage (`#8A9A8E`)
- **Light:** Pearl (`#E8E4D9`)
- **Font Family:** Inter (sans-serif)

### Backgrounds

#### Main Sections
- **Page Background:** Cream (`#FAF8F3`)
- **Sidebar:** Sidebar Gradient
- **Header:** Header Gradient
- **Cards:** White (`#FFFFFF`)
- **Alternating Sections:** Ivory (`#F5F2E9`) or Pearl (`#E8E4D9`)

### Borders

#### Standard Borders
- **Light:** Pearl (`#E8E4D9`)
- **Medium:** `rgba(201, 169, 97, 0.2)`
- **Accent:** Gold (`#C9A961`)
- **Dark:** Navy (`#1B2B3A`)

### Icons
- **Primary:** Gold (`#C9A961`)
- **Active/Hover:** Cream (`#FAF8F3`) or Navy (`#1B2B3A`)
- **Inactive:** Sage (`#8A9A8E`)
- **Special:** Burgundy (`#6B2C3E`)

### Shadows

#### Light Shadows
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
```

#### Medium Shadows
```css
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
```

#### Strong Shadows
```css
box-shadow: 0 12px 32px rgba(139, 111, 71, 0.2);
box-shadow: 0 16px 40px rgba(201, 169, 97, 0.25);
```

#### Gold-tinted Shadows
```css
box-shadow: 0 6px 24px rgba(201, 169, 97, 0.3);
text-shadow: 0px 2px 8px rgba(201, 169, 97, 0.3);
```

---

## CSS VARIABLES (Root)

Copy and paste these CSS variables to use in your stylesheets:

```css
:root {
  /* Old Money Color Palette */
  --cream: #FAF8F3;
  --ivory: #F5F2E9;
  --navy: #1B2B3A;
  --deep-navy: #0F1922;
  --burgundy: #6B2C3E;
  --gold: #C9A961;
  --bronze: #8B6F47;
  --sage: #8A9A8E;
  --charcoal: #2C2C2C;
  --pearl: #E8E4D9;
  
  /* Gradients */
  --sidebar-bg: linear-gradient(165deg, var(--deep-navy) 0%, var(--navy) 100%);
  --header-bg: linear-gradient(90deg, var(--navy) 0%, var(--deep-navy) 100%);
  --accent-gradient: linear-gradient(135deg, var(--gold) 0%, var(--bronze) 100%);
  
  /* Utilities */
  --radius: 16px;
  --transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## DESIGN THEME

**Style:** Old Money Aesthetic  
**Vibe:** Sophisticated, elegant, calming, luxurious yet approachable  
**Typography:** Playfair Display (headings) + Inter (body)  
**Border Radius:** 12px - 28px (rounded corners)  
**Transitions:** Smooth, eased animations (cubic-bezier)

---

## COLOR ACCESSIBILITY

### High Contrast Pairs (WCAG AA Compliant)
- Navy (`#1B2B3A`) on Cream (`#FAF8F3`) ✓
- Charcoal (`#2C2C2C`) on Cream (`#FAF8F3`) ✓
- Cream (`#FAF8F3`) on Navy (`#1B2B3A`) ✓
- Gold (`#C9A961`) on Navy (`#1B2B3A`) ✓
- White (`#FFFFFF`) on Navy (`#1B2B3A`) ✓

### Avoid These Combinations
- Sage on Cream (low contrast)
- Pearl on Cream (very low contrast)
- Gold on Cream (low contrast for body text)

---

*Last Updated: January 27, 2026*  
*Project: MINDBRIDGE Mental Health Platform*
