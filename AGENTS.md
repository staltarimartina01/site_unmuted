# AGENTS.md – UNMUTED Brand Guidelines

> Questo file è la fonte di verità permanente per qualsiasi AI Agent che lavora su questo progetto.
> **Non modificare** senza esplicita approvazione di Martina Staltari.

---

## 🎨 Palette Colori (Oxford Academic)

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--color-navy` | Royal Navy Blue | `#1A305E` | Header, Titoli, Testo corpo principale |
| `--color-red` | Heritage Red | `#B22222` | Call to Action (pulsanti), accenti mirati |
| `--color-gold` | Soft Gold | `#C9A86B` | Accenti su fondo Navy (Logo, icone sottili) |
| `--color-cloud` | Cloud White | `#F8F9FB` | Sfondo principale (leggibilità 4.5:1) |
| `--color-sand` | Warm Sand | `#E8D5C4` | Box recensioni e anteprime blog (calore) |

---

## 🏛️ Pilastri Identity

1. **Leggibilità Totale**: La chiarezza del testo è prioritaria su ogni decorazione. Evitare "vibrating colors" (es. rosso su blu o blu su rosso).
2. **Contrasto Elevato**: Testo Navy su Bianco Cloud, Testo Bianco su Bottoni Rossi.
3. **Coerenza Emotiva**: Il Warm Sand unifica i contenuti "umani" (storie e riflessioni).

---

## 📝 Gestione Contenuti (Regole per AI)

1. **Testi Definitivi**: Tutti i testi attuali sono placeholder. Martina fornirà i testi definitivi da sostituire nei prossimi giorni. Mantenere la struttura pronta per l'inserimento.
2. **Blog / Articoli**: **NON** alimentare questa sezione con testi generati dall'IA. Martina scrive personalmente i suoi post in formato Markdown.
3. **Natura del Blog**: Il sistema deve solo fornire la struttura tecnica per ospitare contributi fattuali, citati e di alto livello accademico.

---

## 🔤 Tipografia

| Font | Famiglia | Uso |
|---|---|---|
| Playfair Display | Serif | Titoli (`h1`, `h2`, `h3`) – trasmette eleganza |
| Inter | Sans-serif | Corpo del testo, nav, labels – massima leggibilità |
| Cormorant Garamond | Serif | Citazioni, blockquote, testimonianze |

Import Google Fonts via CSS `@import` in `src/styles/global.css`.

## ✍️ Tono di Voce

- **Magnetico ed evocativo**: le parole devono risonare emotivamente.
- **Accogliente ma sfidante**: crea uno spazio sicuro, poi invita al cambiamento.
- **Editoriale**: usa frasi brevi e incisive, come titoli di rivista.
- **Psicologico**: accenna a blocchi interni, paure, possibilità di liberazione.
- **Non generico**: mai "impara l'inglese". Sempre "sblocca la tua voce".

## 🏗️ Struttura Tecnica

- **Framework**: Astro 5
- **Styling**: Tailwind CSS v4
- **Deploy**: Vercel (adapter `@astrojs/vercel`)
- **Content**: Markdown/MDX via Astro Content Collections
  - `src/content/reviews/` – Storie di successo
  - `src/content/blog/` – Articoli
  - `src/content/risorse/` – Risorse Didattiche

## 📐 Visual Vibe

- Texture che ricordano carta grezza (via CSS grain/noise subtle)
- Transizioni fluide (ease-in-out, 300ms)
- Layout editoriale con uso di whitespace generoso
- Mobile-first, responsive a tutti i breakpoint
