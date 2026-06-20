# Product

## Register

product

## Users

ERSEH referents (Enseignants Référents Scolaires aux Élèves en situation de Handicap) and CPC staff (Conseillers Pédagogiques de Circonscription) at the Rectorat Aix-Marseille. Working context is mixed: desk work at the office on a large monitor, plus field visits to schools on a 13" laptop. Users are trained education professionals, fluent in the domain vocabulary (ASH, ULIS, ERSEH, RNE, TFC, TSA…). They are not necessarily tech-savvy, but they use institutional software daily.

## Product Purpose

Track and manage special education inclusion devices (ULIS, ASH) across schools in the Aix-Marseille academic district. Monitor student enrollment, commission statuses, device capacity, and exam success rates. Synchronize inter-team tasks via IMAP email. Generate PDF reports for administrative reviews. The product succeeds when staff can locate a school, check its situation, and take action (update data, flag an issue, delegate a task) in under two minutes.

## Brand Personality

Authoritative, Reliable, Clear. The tone is institutional and neutral — the subject matter (children with disabilities, administrative accountability) requires trust above personality. No delight for its own sake; delight through clarity and precision. French language throughout.

## References & Anti-references

**Reference**: The Esterel portal of the Académie d'Aix-Marseille. Take inspiration from its institutional authority, the academic color vocabulary (the Académie's official brand), and its structured navigation hierarchy. This grounds EduScope within the same visual family that ERSEH/CPC staff already trust.

**Anti-references**: Generic SaaS dashboards (Notion-style, Vercel-style). Any warm cream/sand neutral backgrounds. Hyper-minimal "startup-clean" aesthetics that would feel foreign to an institutional user. Anything that looks like a student-facing app.

## Design Principles

1. **Clarity over personality.** Every design decision should make data faster to read, not harder. Ornamentation that doesn't carry information is a tax on attention.
2. **Progressive disclosure.** The overview stays clean; detail is one click away. Never surface complexity until the user asks for it.
3. **Earn density.** The users are experts; they can handle compact information. But density must be earned through clear hierarchy — not just small type crammed in.
4. **Speak the domain.** Technical education terms (ASH, ERSEH, ULIS, etc.) are first-class vocabulary. Never dumb them down for a general audience that doesn't use this tool.
5. **Resilience at the edge.** The app is used in the field with variable connection. States must be explicit: fresh data, stale data, loading, error — never ambiguous.

## Accessibility & Inclusion

WCAG AA minimum. The user base includes office workers across all ages; small type and low contrast are real risks. Mixed desktop + laptop use means the design must hold at 1280px without requiring scroll. Reduced motion support recommended.
