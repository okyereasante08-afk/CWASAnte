// ============================================================
// GLOSSARY / CONCEPTS: term-by-term explanations across all 14 categories.
// Each category has: intro (short framing) + terms[] { name, def, note (optional) }
// def and note use $...$ inline math, rendered via KaTeX auto-render.
// ============================================================

export const GLOSSARY = {

  "trig-deriv": {
    intro: "Six functions, one rule: functions WITHOUT \"co-\" have positive derivatives; functions WITH \"co-\" (cos, cot, csc) have negative derivatives.",
    terms: [
      { name: "The sin/cos pair", def: "$\\frac{d}{dx}\\sin x=\\cos x$ and $\\frac{d}{dx}\\cos x=-\\sin x$. They swap into each other — sine's derivative is cosine, cosine's derivative is negative sine." },
      { name: "The tan/cot pair", def: "$\\frac{d}{dx}\\tan x=\\sec^2x$ and $\\frac{d}{dx}\\cot x=-\\csc^2x$. Each one's derivative is \"its own squared co-function.\"" },
      { name: "The sec/csc pair", def: "$\\frac{d}{dx}\\sec x=\\sec x\\tan x$ and $\\frac{d}{dx}\\csc x=-\\csc x\\cot x$. Each is \"itself times its tan/cot partner.\"" },
    ]
  },

  "invtrig-deriv": {
    intro: "Only three denominator shapes exist across all six inverse trig derivatives — each shape shows up twice (once positive, once negative for the \"co-\" version).",
    terms: [
      { name: "$\\sqrt{1-x^2}$ shape", def: "Belongs to $\\arcsin x$ (positive) and $\\arccos x$ (negative). Domain restricted to $|x|<1$ since you're square-rooting $1-x^2$." },
      { name: "$1+x^2$ shape", def: "Belongs to $\\arctan x$ (positive) and $\\text{arccot }x$ (negative). No domain restriction — $1+x^2$ is always positive." },
      { name: "$|x|\\sqrt{x^2-1}$ shape", def: "Belongs to $\\operatorname{arcsec}x$ (positive) and $\\operatorname{arccsc}x$ (negative). Domain restricted to $|x|>1$." },
    ]
  },

  "hyp-deriv": {
    intro: "Same six-function structure as circular trig, but $\\cosh$ breaks the \"co- means negative\" rule — it's the one exception worth memorizing separately.",
    terms: [
      { name: "The sinh/cosh pair (the exception)", def: "$\\frac{d}{dx}\\sinh x=\\cosh x$ and $\\frac{d}{dx}\\cosh x=\\sinh x$ — BOTH positive, unlike circular sin/cos." },
      { name: "The tanh/coth pair", def: "$\\frac{d}{dx}\\tanh x=\\operatorname{sech}^2x$ and $\\frac{d}{dx}\\coth x=-\\operatorname{csch}^2x$." },
      { name: "The sech/csch pair", def: "$\\frac{d}{dx}\\operatorname{sech}x=-\\operatorname{sech}x\\tanh x$ and $\\frac{d}{dx}\\operatorname{csch}x=-\\operatorname{csch}x\\coth x$ — both negative." },
    ]
  },

  "invhyp-deriv": {
    intro: "Same three denominator shapes as inverse trig, but built from $x^2\\pm1$ instead of $1-x^2$ — and most \"co-\" pairs here SHARE the same formula rather than flipping sign.",
    terms: [
      { name: "$\\sqrt{x^2+1}$ vs $\\sqrt{x^2-1}$", def: "$\\sinh^{-1}x$ uses $\\frac{1}{\\sqrt{x^2+1}}$ (no domain restriction). $\\cosh^{-1}x$ uses $\\frac{1}{\\sqrt{x^2-1}}$ (needs $x>1$)." },
      { name: "$\\tanh^{-1}x=\\coth^{-1}x$ formula", def: "Both have derivative $\\frac{1}{1-x^2}$ — identical formula. Only the domain differs: $\\tanh^{-1}$ needs $|x|<1$, $\\coth^{-1}$ needs $|x|>1$." },
      { name: "$\\operatorname{sech}^{-1}$ / $\\operatorname{csch}^{-1}$ shape", def: "$\\frac{-1}{x\\sqrt{1-x^2}}$ and $\\frac{-1}{|x|\\sqrt{1+x^2}}$ respectively — both negative, mirroring the inverse trig sec/csc pattern." },
    ]
  },

  "trig-int": {
    intro: "Most trig integrals are just derivatives run backward. Only four (tan, cot, sec, csc) need a genuinely new technique — the rest you already know if you know the derivative table.",
    terms: [
      { name: "Reversal integrals", def: "$\\int\\sec^2x\\,dx=\\tan x+C$, $\\int\\csc^2x\\,dx=-\\cot x+C$, $\\int\\sec x\\tan x\\,dx=\\sec x+C$, $\\int\\csc x\\cot x\\,dx=-\\csc x+C$ — direct reverses of derivative rules." },
      { name: "The tan/cot integral trick", def: "Write $\\tan x=\\frac{\\sin x}{\\cos x}$, substitute $u=\\cos x$. This turns it into $\\int\\frac{du}{u}=\\ln|u|+C$. Same idea for $\\cot x$ with $u=\\sin x$." },
      { name: "The sec/csc integral trick", def: "Multiply by $\\frac{\\sec x+\\tan x}{\\sec x+\\tan x}$ (a disguised form of 1). The numerator becomes exactly the derivative of the denominator, so it integrates to $\\ln|\\sec x+\\tan x|+C$." },
    ]
  },

  "invtrig-int": {
    intro: "These are the integral-form reverses of the three inverse-trig denominator shapes — recognize the shape, write down the antiderivative.",
    terms: [
      { name: "$\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\frac{x}{a}+C$", def: "Whenever you see $\\sqrt{a^2-x^2}$ alone in a denominator with no other $x$ factor, this is your answer." },
      { name: "$\\int\\frac{dx}{a^2+x^2}=\\frac1a\\arctan\\frac{x}{a}+C$", def: "Whenever the denominator is a sum of squares (constant plus $x^2$), reach for arctan — note the $\\frac1a$ out front, easy to forget." },
      { name: "$\\int\\frac{dx}{x\\sqrt{x^2-a^2}}=\\frac1a\\operatorname{arcsec}\\frac{|x|}{a}+C$", def: "The giveaway is the extra lone $x$ multiplying the square root — that's what makes it arcsec instead of arcsin/arccos." },
    ]
  },

  "hyp-int": {
    intro: "Same reversal logic as trig integrals: most hyperbolic integrals are direct reverses of the derivative table, with tanh/coth needing the substitution trick.",
    terms: [
      { name: "Reversal integrals", def: "$\\int\\operatorname{sech}^2x\\,dx=\\tanh x+C$, $\\int\\operatorname{csch}^2x\\,dx=-\\coth x+C$, and the sech/csch-times-tanh/coth products reverse directly too." },
      { name: "The tanh/coth integral trick", def: "Write $\\tanh x=\\frac{\\sinh x}{\\cosh x}$, substitute $u=\\cosh x$. No absolute value needed on the result since $\\cosh x>0$ always: $\\ln(\\cosh x)+C$." },
    ]
  },

  "invhyp-int": {
    intro: "Integral-form reverses of the inverse hyperbolic derivative shapes — same recognition game as inverse trig integrals, built from $x^2\\pm a^2$.",
    terms: [
      { name: "$\\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\sinh^{-1}\\frac{x}{a}+C$", def: "Plus sign under the root, no lone $x$ outside → sinh inverse." },
      { name: "$\\int\\frac{dx}{\\sqrt{x^2-a^2}}=\\cosh^{-1}\\frac{x}{a}+C$", def: "Minus sign under the root, no lone $x$ outside → cosh inverse." },
      { name: "$\\int\\frac{dx}{a^2-x^2}=\\frac1a\\tanh^{-1}\\frac{x}{a}+C$", def: "No square root at all, just a difference of squares in the denominator → tanh inverse." },
    ]
  },

  "mvt-ivt": {
    intro: "Four theorems that all sound similar but guarantee different things. Keep them straight by asking: does it guarantee a SLOPE, a VALUE, or an EXTREME?",
    terms: [
      { name: "Mean Value Theorem (MVT)", def: "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, some point $c$ has $f'(c)=\\frac{f(b)-f(a)}{b-a}$ — the instantaneous slope matches the average slope somewhere." },
      { name: "Rolle's Theorem", def: "A special case of MVT where $f(a)=f(b)$. Since the average slope is then $0$, it guarantees $f'(c)=0$ for some $c$ — a flat tangent line somewhere in between." },
      { name: "Intermediate Value Theorem (IVT)", def: "If $f$ is continuous on $[a,b]$, it hits every value between $f(a)$ and $f(b)$ at least once. Commonly used to prove a root exists by showing $f$ changes sign." },
      { name: "Extreme Value Theorem (EVT)", def: "A continuous function on a CLOSED, BOUNDED interval always attains an actual maximum and minimum value — this fails if the interval is open or unbounded." },
    ]
  },

  "more-integrals": {
    intro: "Partial fractions, trig product-to-sum, completing the square, and hyperbolic substitution — the toolkit for integrals that don't fit a single standard form.",
    terms: [
      { name: "Partial fractions — distinct linear factors", def: "$\\frac{1}{(x-a)(x-b)}=\\frac{A}{x-a}+\\frac{B}{x-b}$. Each distinct linear factor in the denominator gets its own constant-over-linear term." },
      { name: "Partial fractions — repeated factors", def: "A factor like $x^2$ (i.e. $(x-0)^2$) needs BOTH $\\frac{A}{x}$ and $\\frac{B}{x^2}$ — every power up to the repeat count gets its own term." },
      { name: "Completing the square", def: "Turns $x^2+bx+c$ into $(x+\\frac{b}{2})^2+k$, which converts an awkward quadratic denominator into a recognizable arctan/arcsin/hyperbolic form." },
      { name: "Product-to-sum identities", def: "$\\cos A\\cos B=\\frac12[\\cos(A-B)+\\cos(A+B)]$ (and similar for sin products) turn a product of trig functions into a sum, which integrates term by term." },
    ]
  },

  "implicit-diff": {
    intro: "When $y$ can't be isolated, differentiate both sides treating $y$ as a function of $x$ — every time you differentiate a $y$-term, multiply by $y'$ (chain rule).",
    terms: [
      { name: "The core technique", def: "Differentiate every term on both sides with respect to $x$. Any term containing $y$ picks up a $\\frac{dy}{dx}$ (or $y'$) factor from the chain rule." },
      { name: "Collecting $y'$ terms", def: "After differentiating, gather every term containing $y'$ onto one side, factor it out, then divide to isolate $\\frac{dy}{dx}$." },
      { name: "Evaluating at a point", def: "If asked for the derivative AT a specific point $(x_0,y_0)$, substitute those numbers in immediately after differentiating — much easier than solving for $y'$ symbolically first." },
    ]
  },

  "lhopital": {
    intro: "L'Hopital's Rule only applies to the indeterminate forms $\\frac00$ or $\\frac{\\infty}{\\infty}$ — every other indeterminate form must be algebraically rewritten into one of those two first.",
    terms: [
      { name: "L'Hopital's Rule (the rule itself)", def: "If $\\lim\\frac{f(x)}{g(x)}$ is $\\frac00$ or $\\frac{\\infty}{\\infty}$, then $\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}$ — differentiate top and bottom SEPARATELY, don't use the quotient rule." },
      { name: "$0\\cdot\\infty$ form", def: "Rewrite one factor as a reciprocal to force a fraction: $f\\cdot g=\\frac{f}{1/g}$, turning it into $\\frac00$ or $\\frac{\\infty}{\\infty}$." },
      { name: "$\\infty-\\infty$ form", def: "Combine the two terms into a single fraction (common denominator) — this often reveals a $\\frac00$ form underneath." },
      { name: "$1^\\infty$, $0^0$, $\\infty^0$ forms", def: "Take the natural log first: if $y=f(x)^{g(x)}$, then $\\ln y=g(x)\\ln f(x)$, which is now a $0\\cdot\\infty$ form. Solve for that limit, then exponentiate ($e^{\\text{that limit}}$) to undo the log." },
      { name: "Where L'Hopital breaks down", def: "It only applies to indeterminate forms — if direct substitution gives a real, finite, non-$\\frac00$/$\\frac{\\infty}{\\infty}$ answer, applying L'Hopital anyway gives the WRONG answer. Always check the form first." },
    ]
  },

  "more-derivatives": {
    intro: "Logarithmic differentiation, parametric derivatives, and chain-rule stacking for compositions that don't fit the basic rules cleanly.",
    terms: [
      { name: "Logarithmic differentiation", def: "For $y=f(x)^{g(x)}$ (variable base AND exponent), take $\\ln$ of both sides first: $\\ln y=g(x)\\ln f(x)$. Differentiate implicitly, then multiply back by $y$ at the end." },
      { name: "Parametric derivatives", def: "If $x=x(\\theta)$ and $y=y(\\theta)$, then $\\frac{dy}{dx}=\\frac{dy/d\\theta}{dx/d\\theta}$ — differentiate each with respect to the parameter, then divide." },
      { name: "Recognizing disguised inverse trig", def: "Expressions like $2x\\sqrt{1-x^2}$ or $\\frac{x}{\\sqrt{1-x^2}}$ often match a double-angle or basic trig identity when you substitute $x=\\sin\\theta$ — simplify BEFORE differentiating." },
    ]
  },

  "analysis": {
    intro: "The formal vocabulary of real analysis — precise definitions that look intimidating but each describe one intuitive idea. Master these and the MCQs become pattern-matching.",
    terms: [
      { name: "Bounded set", def: "A set $S$ is bounded if there's some finite $M$ with $|x|\\le M$ for every $x\\in S$ — the whole set fits inside a finite window, it doesn't run off to infinity in either direction." },
      { name: "Bounded above / below", def: "Bounded ABOVE means an upper bound $M$ exists with $x\\le M\\ \\forall x\\in S$ (nothing escapes upward). Bounded BELOW is the mirror image with a lower bound." },
      { name: "Supremum (least upper bound)", def: "The SMALLEST of all possible upper bounds — not just any upper bound, and not necessarily an element of the set itself. Every non-empty, bounded-above set of reals has exactly one." },
      { name: "Infimum (greatest lower bound)", def: "The mirror image of supremum: the LARGEST of all possible lower bounds. E.g. $\\inf\\{1,\\frac12,\\frac13,\\ldots\\}=0$, even though $0$ is never actually reached by any term." },
      { name: "Convergent sequence", def: "$(a_n)\\to L$ means: for every $\\varepsilon>0$, there's some point $N$ beyond which every term $a_n$ satisfies $|a_n-L|<\\varepsilon$ — the terms squeeze arbitrarily close to one fixed number $L$ forever after." },
      { name: "Divergent sequence", def: "A sequence that does NOT converge to any finite value — either it grows without bound (like $a_n=n$), or it oscillates without settling (like $a_n=(-1)^n$)." },
      { name: "Cauchy sequence", def: "Terms get arbitrarily close to EACH OTHER (not to a known target): for every $\\varepsilon>0$, there's $N$ such that $|a_n-a_m|<\\varepsilon$ for all $m,n>N$. In $\\mathbb{R}$, Cauchy is exactly equivalent to convergent." },
      { name: "Monotonic sequence", def: "Either always increasing ($a_{n+1}\\ge a_n$ for all $n$) or always decreasing ($a_{n+1}\\le a_n$ for all $n$) — never changes direction." },
      { name: "Monotone Convergence Theorem", def: "A sequence that is BOTH monotonic AND bounded is guaranteed to converge — it can't oscillate (monotonic rules that out) and can't escape to infinity (bounded rules that out), so it has nowhere to go but toward a limit." },
      { name: "Limit point (accumulation point)", def: "A point $p$ where every neighborhood, no matter how small, contains some OTHER point of the set besides $p$ itself — points of the set keep clustering arbitrarily close to $p$." },
      { name: "Open set", def: "Every point in the set has some entire neighborhood also contained in the set — no point sits exactly on an edge. E.g. $(0,1)$ is open." },
      { name: "Closed set", def: "A set that contains ALL of its limit points — nothing \"leaks out.\" E.g. $[0,1]$ is closed. Note: a set can be neither open nor closed, like $(0,1]$." },
      { name: "Compact set (in $\\mathbb{R}$)", def: "Closed AND bounded, simultaneously (Heine–Borel Theorem). E.g. $[0,1]$ is compact; $(0,1)$ is bounded but not closed, so not compact; $[0,\\infty)$ is closed but not bounded, so not compact." },
      { name: "Interior point", def: "A point $p\\in S$ such that some whole neighborhood around $p$ is also entirely inside $S$ — you can \"wiggle\" a little in any direction and stay inside the set." },
      { name: "Boundary point", def: "A point where every neighborhood contains BOTH points inside $S$ and points outside $S$ — it sits exactly on the edge." },
      { name: "Bolzano–Weierstrass Theorem", def: "Every bounded sequence in $\\mathbb{R}$ has a convergent SUBsequence — the sequence itself doesn't need to converge, but you can always extract a piece that does." },
    ]
  },
};
