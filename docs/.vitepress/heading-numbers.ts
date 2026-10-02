import type MarkdownIt from 'markdown-it'

// Wraps a leading section number ("0.1.1", "A.2.5.3") in h1-h4 text in
// <span class="sf-num"> so it can be muted and never competes with the words.
// Runs as the last core rule, after anchors and the outline extractor have read
// the plain heading text, so ids and "On this page" are unaffected.
const NUM = /^((?:[A-Z]\.)?\d+(?:\.\d+)*)(\s+)/

export function headingNumbers(md: MarkdownIt) {
  md.core.ruler.push('sf_heading_numbers', (state) => {
    const tokens = state.tokens
    for (let i = 0; i < tokens.length - 1; i++) {
      const open = tokens[i]
      if (open.type !== 'heading_open' || !/^h[1-4]$/.test(open.tag)) continue
      const first = tokens[i + 1].children?.[0]
      if (!first || first.type !== 'text') continue
      const m = NUM.exec(first.content)
      if (!m) continue
      const num = new state.Token('html_inline', '', 0)
      num.content = `<span class="sf-num">${md.utils.escapeHtml(m[1])}</span>`
      first.content = m[2] + first.content.slice(m[0].length)
      tokens[i + 1].children!.unshift(num)
    }
  })
}
