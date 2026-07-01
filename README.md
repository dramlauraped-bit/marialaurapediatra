# Site institucional — Dra. Maria Laura Almeida

Site em React (Vite) + CSS para a Dra. Maria Laura Almeida, pediatra. Construído
seguindo a skill de design [taste-skill](https://github.com/leonxlnx/taste-skill)
(instalada em `.claude/skills/taste-skill`), com paleta pastel acolhedora,
tipografia serifada + sans-serif, movimento discreto e foco em conversão
(agendamento de consulta).

## Antes de publicar (importante)

1. **Foto do Hero.** O código já espera o arquivo em
   `public/images/dra-maria-laura-hero.jpg` (fundo full-bleed da seção de
   abertura, com gradiente e texto por cima). Salve a foto enviada exatamente
   nesse caminho, com esse nome. Sem o arquivo, o navegador mostra apenas o
   gradiente sem imagem por trás.
2. **Foto da seção Sobre.** Ainda usa um placeholder de `picsum.photos`.
   Substitua por uma foto real em `src/components/About.jsx` quando tiver uma
   segunda imagem disponível.
3. **CRM.** Já preenchido no rodapé: `CRM 52130723-1/RJ` (editável em
   `src/data/content.js`, campo `doctor.crm`).
4. **Agenda online.** O botão "Ver agenda online" (seção de agendamento) está
   como placeholder. Conecte o link real de uma plataforma (Doctoralia,
   Calendly etc.) em `src/components/Booking.jsx`.
5. **Domínio.** As tags de SEO (canonical, Open Graph, JSON-LD) em
   `index.html` já apontam para `https://marialaurapediatra.com/`.
6. **Formulário de agendamento.** Hoje o formulário monta uma mensagem e abre
   o WhatsApp (não depende de backend). Se preferir salvar os leads em algum
   CRM/planilha, será preciso adicionar um endpoint próprio.

## Rodando localmente

Este projeto precisa do [Node.js](https://nodejs.org/) (versão 18 ou superior)
instalado na máquina. Este ambiente não tinha Node disponível durante a
criação do site, por isso o código não foi testado com `npm run dev` — revise
a seção de QA abaixo depois de instalar as dependências.

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview   # para conferir o build localmente
```

O build final fica na pasta `dist/`.

## Publicando o site

Qualquer host de arquivos estáticos serve. Os mais simples:

### Vercel
1. Crie conta em vercel.com e conecte o repositório (GitHub/GitLab).
2. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
3. Deploy automático a cada push.

### Netlify
1. Crie conta em netlify.com e conecte o repositório.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Como o site usa rotas de cliente (`/blog/:slug`), adicione um arquivo
   `public/_redirects` com o conteúdo `/*  /index.html  200` para que o
   recarregamento de páginas internas funcione.

Depois do deploy, aponte o domínio próprio (registrado em Registro.br ou
similar) para o host escolhido.

## Estrutura do projeto

```
index.html              Meta tags de SEO, Open Graph e JSON-LD (Physician)
src/
  main.jsx              Ponto de entrada, BrowserRouter
  App.jsx                Layout global (Navbar, rotas, Footer, botão WhatsApp)
  index.css              Tokens de design (cor, tipografia, raio, espaçamento)
  data/content.js        Todo o conteúdo textual do site (serviços, FAQ, blog...)
  hooks/                 useScrollToHash, useDocumentMeta
  components/            Navbar, Hero, About, Services, Locations, Hospitals,
                          Blog, FAQ, Booking, Footer, decoração e utilitários
  pages/                 Home, BlogList, BlogPost, NotFound
public/
  fonts/                 Cormorant Garamond + Plus Jakarta Sans (self-hosted)
  favicon.svg
```

## Decisões de design

- **Paleta:** verde-sálvia + bege claro + pêssego suave (família "Forest"),
  evitando o bege/latão genérico comum em sites gerados por IA.
- **Tipografia:** Cormorant Garamond (títulos, elegante e legível) + Plus
  Jakarta Sans (corpo de texto, moderna e acessível). Fontes self-hosted em
  `public/fonts`, sem depender do Google Fonts em produção.
- **Ícones:** Phosphor Icons (`@phosphor-icons/react`), peso "light", para um
  traço delicado e consistente.
- **Movimento:** discreto (fade + leve deslocamento ao rolar a página),
  respeitando `prefers-reduced-motion` em qualquer navegador ou sistema
  configurado para reduzir animações.
- **Modo escuro:** não implementado nesta versão. Foi uma escolha deliberada
  para um site médico voltado a pais e responsáveis, priorizando legibilidade
  e um visual clínico consistente. Pode ser adicionado depois via `data-theme`
  ou `prefers-color-scheme`, se desejado.
- **Acessibilidade:** navegação por teclado, skip link, labels associados a
  todos os campos de formulário, contraste AA nos textos e botões, respeito a
  `prefers-reduced-motion`.

## Sugestão de imagens e ícones (se quiser ir além dos placeholders)

- Foto do Hero: já definida (foto real, fundo full-bleed com gradiente e
  texto por cima). Ideal em alta resolução, orientação retrato ou quadrada,
  mínimo 1600px no lado maior, para ficar nítida em telas grandes.
- Foto em consultório (Sobre): médica atendendo ou em ambiente acolhedor.
- Ícones: já cobertos pela biblioteca Phosphor Icons (não é necessário criar
  novos ícones).
- Ilustrações: o site já inclui motivos discretos (blob orgânico e uma
  pequena folha) em `src/components/Decorative.jsx`. Evite adicionar
  ilustrações infantis literais (ursinhos, mamadeiras) para manter o tom
  premium e minimalista pedido no briefing.
