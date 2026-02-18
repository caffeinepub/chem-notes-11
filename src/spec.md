# Specification

## Summary
**Goal:** Build a CBSE Class 11 Chemistry named reactions notes website with a homepage credit and per-reaction pages showing handwritten notes as static images.

**Planned changes:**
- Create a homepage that prominently displays the exact text "made by PIYUSH SRIVASTAVA" and links to the named reactions section.
- Add a named reactions index page listing available reactions with links to separate reaction detail routes.
- Build individual reaction pages that render one or more handwritten-notes images from static frontend assets with basic responsive viewing and a larger-view option (e.g., lightbox/dialog).
- Apply a consistent site-wide visual theme (not blue/purple primary by default) across homepage, index, and reaction pages.
- Add required images under `frontend/public/assets/generated` and reference them directly from the frontend (no backend image fetching).

**User-visible outcome:** Users land on a homepage showing "made by PIYUSH SRIVASTAVA", can navigate to a named reactions list, and open each reaction to view readable handwritten notes images with an option to view them larger.
