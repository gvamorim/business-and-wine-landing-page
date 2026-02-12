# Business & Wine — Landing Page

Landing page responsiva (mobile-first) para o evento **Business & Wine: Visão Estratégica 2026**. Design premium em dark mode, com paleta navy (#0C1D38), texto branco e destaques em dourado (#C5A059).

## Tecnologias

- **[Astro](https://astro.build)** — gerador de site estático
- **[Tailwind CSS](https://tailwindcss.com)** — estilização utilitária
- **CSS + Intersection Observer** — animações de scroll sem bibliotecas extras

## Pré-requisitos

- Node.js 18+
- npm (ou yarn/pnpm)

## Instalação

```bash
npm install
```

## Scripts

| Comando        | Descrição                    |
|----------------|------------------------------|
| `npm run dev`  | Servidor de desenvolvimento  |
| `npm run build`| Gera o site estático em `dist/` |
| `npm run preview` | Pré-visualiza o build localmente |

## Estrutura do projeto

```
├── public/
│   └── images/          # Imagens (palestrantes, parceiros, menu, etc.)
├── src/
│   ├── components/      # Componentes Astro
│   │   ├── Hero.astro
│   │   ├── Speakers.astro
│   │   ├── GastronomicExperience.astro
│   │   ├── Timeline.astro
│   │   ├── SponsorsMarquee.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Conteúdo da página

- **Hero** — Título, data (23 de fevereiro de 2026), local (Coco Bambu Anchieta) e CTA “Garanta Sua Vaga”
- **Palestrantes** — 5 cards com foto e biografia
- **Experiência gastronômica** — Open Wine e menu premium
- **Programação** — Timeline vertical com horários (18h30–22h)
- **Parceiros** — Marquee infinito com logos em B&W e cor no hover
- **Rodapé** — Preço (R$ 129,90), botão de compra e endereço com link

Todo o texto está em **PT-BR**.

## Deploy

O build gera arquivos estáticos em `dist/`. Basta publicar essa pasta em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

## Licença

ISC
