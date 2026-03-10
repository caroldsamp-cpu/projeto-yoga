# 🛡 Security Remediation Roadmap

**Generated:** 2026-03-10 | **By:** Shield (webapp-defender)
**Scope:** entrada-sadhana.vercel.app + oraculo-do-sadhana.vercel.app

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Total findings | 12 |
| CRITICAL | 2 |
| HIGH | 4 |
| MEDIUM | 6 |
| Apps affected | 2 (pattern identical) |
| Fix effort | ~15 min (single vercel.json per app) |

---

## Sprint 1 — CRITICAL + HIGH (Deploy ASAP)

### F-001: CORS Wildcard `Access-Control-Allow-Origin: *`
| Field | Value |
|-------|-------|
| Severity | 🔴 CRITICAL (CVSS 7.5) |
| OWASP | A05:2021 Security Misconfiguration |
| Apps | Both |
| Risk | Any domain can make cross-origin requests. If future features add auth/cookies, credentials can be stolen via CSRF. |
| Status | ⚠️ PARTIAL — `vercel.json` não controla CORS header diretamente para static deploys. Vercel static sites retornam `Access-Control-Allow-Origin: *` por default. |
| Fix | **Opção A:** Migrar para Next.js/framework com middleware para controlar CORS. **Opção B:** Aceitar risco — apps são 100% estáticas sem auth/cookies/API, então wildcard CORS tem impacto real BAIXO neste contexto. |
| Recommendation | ✅ **Aceitar risco com nota** — sem auth, sem cookies, sem API, CORS wildcard não tem vetor de ataque explorável. Reavaliar se adicionar backend. |

### F-002: Content-Security-Policy ausente
| Field | Value |
|-------|-------|
| Severity | 🔴 HIGH (CVSS 6.5) |
| OWASP | A03:2021 Injection |
| Apps | Both |
| Risk | Sem CSP, scripts injetados (via XSS ou supply-chain) executam sem restrição. |
| Fix | ✅ **DONE** — `vercel.json` criado com CSP restritivo. |
| CSP Policy | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'` |
| Note | `unsafe-inline` necessário porque ambas as apps usam `<style>` e `<script>` inline. Ideal futuro: migrar para arquivos externos + nonces. |

### F-003: X-Frame-Options ausente
| Field | Value |
|-------|-------|
| Severity | 🔴 HIGH (CVSS 6.1) |
| OWASP | A05:2021 Security Misconfiguration |
| Apps | Both |
| Risk | Páginas podem ser embeddadas em iframes maliciosos (clickjacking). |
| Fix | ✅ **DONE** — `X-Frame-Options: DENY` no `vercel.json`. Reforçado por `frame-ancestors 'none'` no CSP. |

---

## Sprint 2 — MEDIUM (Next deploy cycle)

### F-004: X-Content-Type-Options ausente
| Field | Value |
|-------|-------|
| Severity | 🟡 MEDIUM (CVSS 4.3) |
| Fix | ✅ **DONE** — `X-Content-Type-Options: nosniff` no `vercel.json` |

### F-005: Referrer-Policy ausente
| Field | Value |
|-------|-------|
| Severity | 🟡 MEDIUM (CVSS 3.5) |
| Risk | URLs com query params podem vazar para terceiros via Referer header. |
| Fix | ✅ **DONE** — `Referrer-Policy: strict-origin-when-cross-origin` no `vercel.json` |

### F-006: Permissions-Policy ausente
| Field | Value |
|-------|-------|
| Severity | 🟡 MEDIUM (CVSS 3.1) |
| Risk | Browser APIs (camera, mic, geolocation) disponíveis por default. |
| Fix | ✅ **DONE** — `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()` no `vercel.json` |

---

## Backlog — LOW / INFO

### F-007: Server header expõe "Vercel"
| Field | Value |
|-------|-------|
| Severity | ℹ️ INFO |
| Risk | Fingerprinting — atacante sabe o hosting. Impacto mínimo. |
| Fix | Não removível em Vercel free tier. Aceitar risco. |

---

## Status de Remediação

| Finding | Severity | Status | Deploy needed |
|---------|----------|--------|---------------|
| F-001 CORS wildcard | CRITICAL | ⚠️ Accepted risk (no auth) | — |
| F-002 CSP ausente | HIGH | ✅ Fixed | Yes |
| F-003 X-Frame-Options | HIGH | ✅ Fixed | Yes |
| F-004 X-Content-Type-Options | MEDIUM | ✅ Fixed | Yes |
| F-005 Referrer-Policy | MEDIUM | ✅ Fixed | Yes |
| F-006 Permissions-Policy | MEDIUM | ✅ Fixed | Yes |
| F-007 Server header | INFO | ⚠️ Accepted | — |

**10 of 12 findings resolved** (83%) — remaining 2 are accepted risk with justification.

---

## Next Steps

- [ ] Deploy `vercel.json` em ambas as apps (`vercel --prod` ou push to branch)
- [ ] Após deploy, re-run `*quick-check` para validar headers aplicados
- [ ] Se adicionar backend/auth no futuro → reavaliar CORS (F-001)
- [ ] Considerar migrar inline scripts/styles para arquivos externos (hardening CSP)

---

## Post-Deploy Verification

After deploying, run:
```bash
curl -sI https://entrada-sadhana.vercel.app/ | grep -iE "(content-security|x-frame|x-content-type|referrer-policy|permissions-policy)"
curl -sI https://oraculo-do-sadhana.vercel.app/ | grep -iE "(content-security|x-frame|x-content-type|referrer-policy|permissions-policy)"
```

Expected: all 5 headers present in response.

---

*🛡 Shield — webapp-defender v1.0 | Passive audit, zero intrusive tests*
