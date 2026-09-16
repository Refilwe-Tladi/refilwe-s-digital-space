# Refilwe Thando Tladi Portfolio

## Goal
Build a polished, responsive, recruiter-focused personal portfolio at the main website address. The site will use only the supplied facts and clearly mark every missing detail, project link, contact method, work-history item, and CV file as editable.

## Experience and structure
- Create one smooth-scrolling portfolio with a sticky “RT” navigation bar and mobile menu.
- Build an opening section featuring Refilwe’s full name, supplied career statement, two clear actions, and an abstract initials-based “RT” profile composition—never a generated portrait.
- Add distinct sections for About, technical skills, soft skills, three projects, education, certifications, experience, career interests, reasons to work with Refilwe, and contact.
- Preserve the supplied project wording. Mark projects two and three as editable placeholders and disable or clearly label links that have not been provided.
- Provide obvious CV actions near the top, experience area, and contact area. Until a real PDF exists, these will explain that the CV is ready to be connected rather than downloading a fabricated file.
- Add an accessible contact form that validates fields and opens the visitor’s email app using an editable email placeholder; it will not claim a message was sent to a server.

## Visual direction
- Use a warm off-white canvas, charcoal typography, blush surfaces, dusty-rose details, and selective deep-magenta actions.
- Pair refined editorial headings with a clean, highly readable sans-serif body font.
- Use generous spacing, restrained rounded cards, fine borders, abstract technology lines, and a distinctive initials portrait area.
- Keep animation subtle: entrance transitions, gentle decorative movement, clear focus states, and reduced-motion support.
- Ensure strong contrast, keyboard usability, clear labels, and layouts that adapt cleanly from phones to large screens.

## Implementation details
- Define the full semantic design system in the global stylesheet using Tailwind v4 and OKLCH tokens.
- Build reusable React sections and shared controls rather than one monolithic page.
- Use semantic HTML, one H1, descriptive metadata, social metadata, and recruiter-focused page copy.
- Keep site content in simple data structures near the page so qualifications, links, contact details, and projects are easy to replace later.
- Add the selected web fonts through the document head and remove all template metadata.

## Verification
- Run the project checks and production build.
- Review the finished page at desktop and mobile widths, including navigation, section links, form validation, CV placeholders, overflow, and visible focus states.
