import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

// Handbook callouts. Each kind carries a fixed label chip so readers can tell
// status (proposal, open question), depth (background) and audience apart at a
// glance. Giving a title makes the block collapsible:
//
//   ::: proposal                    visible block labelled "Proposal"
//   ::: proposal Weekly reviews     collapsed; summary shows chip + title
//
// `::: related` wraps the list of related pages at the end of a page.
const kinds: Record<string, string> = {
  proposal: 'Proposal',
  clarify: 'Under construction',
  example: 'Example',
  roles: 'For role holders',
  background: 'Background',
  optional: 'Optional',
  source: 'Source of truth',
}

export function handbookContainers(md: MarkdownIt) {
  // closing tokens carry no title, so remember which tag each block opened
  const open: string[] = []

  for (const [kind, label] of Object.entries(kinds)) {
    md.use(container, kind, {
      render(tokens: any[], idx: number) {
        const token = tokens[idx]
        if (token.nesting !== 1) return `</${open.pop() ?? 'div'}>\n`

        const title = token.info.trim().slice(kind.length).trim()
        const chip = `<span class="sf-chip">${label}</span>`
        const cls = `custom-block sf-block sf-${kind}`
        open.push(title ? 'details' : 'div')
        return title
          ? `<details class="${cls}"><summary>${chip}<span class="sf-block-title">${md.renderInline(title)}</span></summary>\n`
          : `<div class="${cls}"><p class="sf-block-head">${chip}</p>\n`
      },
    })
  }

  md.use(container, 'related', {
    render(tokens: any[], idx: number) {
      return tokens[idx].nesting === 1
        ? '<nav class="sf-related" aria-label="Related pages"><p class="sf-related-title">Related</p>\n'
        : '</nav>\n'
    },
  })
}
