# webapp-defender

> Squad defensivo de seguranca para aplicacoes web. Encontra vulnerabilidades via auditoria passiva e gera codigo de correcao pronto para aplicar. **ZERO testes intrusivos.**

## O que faz

- Audita **RLS policies** (Supabase) — a causa raiz de 60%+ dos findings CRITICAL
- Verifica **security headers**, **CORS**, **OpenAPI exposure**
- Revisa **fluxos de autenticacao** (rate limiting, signup, senhas, JWT)
- Avalia **conformidade LGPD** e identifica PII exposta
- Gera **codigo de correcao** pronto (SQL, vercel.json, configs Supabase)

## Origem

Construido a partir de dados reais de auditoria:
- **41 vulnerabilidades** encontradas em 3 aplicacoes Supabase + Vercel
- **9 CRITICAL**, 15 HIGH, 13 MEDIUM
- **280+ pessoas** com dados pessoais expostos
- Frameworks: OWASP Top 10, NIST 800-53, CVSS 3.1, LGPD

## Instalacao

1. Copie a pasta `webapp-defender/` para `squads/` no seu projeto AIOS:

```
seu-projeto/
└── squads/
    └── webapp-defender/   ← cole aqui
```

2. O squad sera detectado automaticamente pelo AIOS.

## Como usar

### Comandos principais

```
@shield *audit          → Auditoria passiva completa (1-3h)
@shield *quick-check    → Check rapido: headers, CORS, OpenAPI (~10min)
@shield *rls-audit      → Auditoria focada em RLS (~30-60min)
@shield *triage         → Priorizar findings por severidade
@shield *roadmap        → Gerar roadmap de remediacao
@shield *fix {finding}  → Gerar codigo de correcao
@shield *report         → Gerar relatorio consolidado
```

### Agentes especializados

| Agente | Comando | O que faz |
|--------|---------|-----------|
| `@rls-guardian` | `*audit-rls` | Audita RLS policies em SQL/migrations |
| `@config-sentinel` | `*audit-all` | Verifica CORS, headers, OpenAPI, hints |
| `@auth-inspector` | `*review-auth` | Revisa fluxo de autenticacao |
| `@compliance-advisor` | `*check-lgpd` | Avaliacao de conformidade LGPD |
| `@fix-generator` | `*fix-sql` | Gera SQL de correcao |

## Arquitetura

```
@shield (Orchestrador)
│
├── Tier 1: MINDS (Especialistas)
│   ├── @rls-guardian        → RLS & Access Control
│   ├── @config-sentinel     → Configuracoes de seguranca
│   ├── @auth-inspector      → Autenticacao & autorizacao
│   └── @compliance-advisor  → LGPD & privacidade
│
└── Tier 2: TOOLS (Operacionais passivos)
    ├── @header-analyzer     → Analisa headers HTTP
    ├── @schema-reviewer     → Analisa exposicao de schema
    ├── @policy-validator    → Valida RLS policies em SQL
    └── @fix-generator       → Gera codigo de correcao
```

## Conteudo do squad

| Componente | Quantidade |
|-----------|-----------|
| Agents | 9 (1 orchestrador + 4 minds + 4 tools) |
| Tasks | 33 |
| Workflows | 3 (full-audit, rls-audit, quick-check) |
| Checklists | 4 (supabase, vercel, lgpd, pre-deploy) |
| Vulnerability Patterns | 10 (extraidos de auditorias reais) |
| Templates | 1 (relatorio de auditoria) |

## Workflows disponiveis

### 1. Full Audit (`*audit`)
Pipeline completo: inventario → scan passivo → revisao profunda → compliance → remediacao → relatorio

### 2. RLS Audit (`*rls-audit`)
Focado em Supabase: enumerar tabelas → validar policies → coverage matrix → gerar fixes SQL

### 3. Quick Check (`*quick-check`)
Rapido (~10min): headers + CORS + OpenAPI → resumo com quick wins

## Checklists incluidas

- **Supabase Security Baseline** — RLS, RPCs, auth, API exposure
- **Vercel Security Config** — Headers, CORS, env vars, deployment
- **LGPD Compliance** — Artigos 6, 7, 11, 18, 46, 48
- **Pre-Deploy Security Gate** — Checklist obrigatorio antes de deploy

## Top 10 vulnerabilidades cobertas

| # | Pattern | OWASP | Frequencia |
|---|---------|-------|-----------|
| 1 | RLS desabilitado em tabelas com PII | A01 | 100% das apps |
| 2 | RPCs sem verificacao de autorizacao | A01 | 67% das apps |
| 3 | CORS wildcard (*) | A05 | 100% das apps |
| 4 | OpenAPI schema exposto publicamente | A05 | 67% das apps |
| 5 | Signup aberto com auto-confirm | A07 | 67% das apps |
| 6 | Zero rate limiting em auth | A07 | 67% das apps |
| 7 | Security headers ausentes | A05 | 100% das apps |
| 8 | PII vazando em rankings/views publicas | A01 | 67% das apps |
| 9 | Policies de escrita incompletas (INSERT/UPDATE) | A01 | 67% das apps |
| 10 | PostgREST hints habilitados | A05 | 67% das apps |

## Stack alvo

Otimizado para apps construidas com:
- **Supabase** (Auth, Database, PostgREST)
- **Vercel** (Hosting, Edge Functions)
- **React / Next.js** (Frontend)
- **PostgreSQL** (RLS, Functions)

Mas os principios se aplicam a qualquer stack web.

## Restricoes (NON-NEGOTIABLE)

- **NUNCA** envia requests que modificam dados no alvo
- **NUNCA** tenta bypass de autenticacao
- **NUNCA** faz brute force, fuzzing ou injection
- **APENAS** analise passiva: configs, codigo, policies, headers
- **SEMPRE** gera remediacao para cada finding

## Requisitos

- AIOS Core >= 2.1.0
- Claude Code com acesso ao projeto

## Creditos

- **Squad:** Craft (Squad Creator) + Sidney Fernandes
- **Dados de auditoria:** SAIOS Cybersecurity Division
- **Framework:** SAIOS — Security AI Orchestrated System v4.0

---

*webapp-defender v1.0.0 — Encontrar → Explicar → Corrigir*
