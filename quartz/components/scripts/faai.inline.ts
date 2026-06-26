type SectionDefinition = {
  className: string
  label: string
}

const sectionDefinitions: Record<string, SectionDefinition> = {
  "bottom line": {
    className: "faai-bottom-line",
    label: "Takeaway",
  },
  "the concept": {
    className: "faai-concept",
    label: "Concept",
  },
  "clinical anchor": {
    className: "faai-clinical-anchor",
    label: "Case Vignette",
  },
  "what to do": {
    className: "faai-what-to-do",
    label: "Protocol",
  },
  "how it fails": {
    className: "faai-how-it-fails",
    label: "Warning",
  },
  "failure mode": {
    className: "faai-how-it-fails",
    label: "Warning",
  },
  "cross-refs": {
    className: "faai-cross-refs",
    label: "Cross-Refs",
  },
}

function normalizeHeading(text: string) {
  return text.trim().toLowerCase().replace(/\s+/g, " ")
}

function enhanceFaaiSections() {
  const container =
    document.querySelector<HTMLElement>(".center > article .markdown-preview-view") ??
    document.querySelector<HTMLElement>(".center > article")
  if (!container || container.dataset.faaiEnhanced === "true") return

  const headings = Array.from(container.querySelectorAll<HTMLHeadingElement>(":scope > h2"))
  let enhancedCount = 0

  for (const heading of headings) {
    const definition = sectionDefinitions[normalizeHeading(heading.textContent ?? "")]
    if (!definition || heading.closest(".faai-section")) continue

    const section = document.createElement("section")
    section.className = `faai-section ${definition.className}`

    const label = document.createElement("div")
    label.className = "faai-section-label"
    label.textContent = definition.label

    heading.before(section)
    section.append(label, heading)

    while (section.nextSibling) {
      const next = section.nextSibling
      if (next instanceof HTMLHeadingElement && next.tagName === "H2") break
      section.appendChild(next)
    }

    enhancedCount += 1
  }

  if (enhancedCount > 0) {
    container.dataset.faaiEnhanced = "true"
  }
}

document.addEventListener("nav", () => {
  requestAnimationFrame(enhanceFaaiSections)
})

enhanceFaaiSections()
