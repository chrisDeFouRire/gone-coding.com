---
title: "The TLS landscape after ballot SC-081"
description: "Certificate lifetimes are dropping from 398 days to 47 by 2029, and domain validation reuse drops even faster. What the CA/Browser Forum schedule means in practice, and what to do before March 2026."
pubDate: 2025-06-10
heroImage: "/blog/tls-landscape-2025.jpg"
tags: ["security", "tls", "sslboard"]
---

In April 2025 the CA/Browser Forum voted through ballot SC-081v3, and with it killed the annual certificate renewal. Maximum certificate lifetimes drop from today's 398 days to 200 days in March 2026, 100 days in March 2027, and 47 days in March 2029. Domain validation reuse drops faster still: from 398 days to just 10 days by 2029.

If you renewed certificates by hand each year, that workflow stops working somewhere around phase two. Here is what changed, what did not, and what we think you should do about it.

## The schedule, precisely

The ballot amends the TLS Baseline Requirements. These dates are fixed in the requirements now, not proposals:

| Date | Max certificate lifetime | Domain validation reuse |
| --- | --- | --- |
| Today | 398 days | 398 days |
| 15 March 2026 | 200 days | 200 days |
| 15 March 2027 | 100 days | 100 days |
| 15 March 2029 | 47 days | 10 days |

One quirk worth knowing: CAs subtract a day for clock differences, so a "200-day" certificate is really 199. Nobody will miss the day.

The first phase is mild. Going from one renewal a year to two is annoyance, not crisis, and most organisations can absorb it with existing processes. The second phase is where manual renewal dies: quarterly renewals across a fleet of domains means someone is renewing something every few weeks, and the odds of a missed deadline stop being negligible. By the 47-day phase, renewal is a weekly event at any organisation with real domain coverage, and validation data goes stale in ten days.

## Why browsers want this

The stated motivation is revocation. Certificates get compromised: keys leak, domains get hijacked, employees go rogue. The revocation system meant to handle this, CRLs and OCSP, barely functions in practice because browsers soft-fail when they cannot reach a revocation server. A certificate that cannot be reliably revoked is only as trustworthy as its lifetime, so shorten the lifetime.

The ballot's own rationale section is unusually blunt about this. It devotes pages to the failings of revocation before concluding that expiry is the only mechanism that actually works. The Forum already proved the concept in 2023 by carving out an exemption for certificates that live seven days or less and skip revocation machinery entirely. SC-081 drags the whole ecosystem in that direction.

## What did not change

ACME did. Let's Encrypt and the other automated authorities have been issuing 90-day certificates for years, and renewing them with certbot, Caddy, or acme.sh is a solved problem. If your infrastructure already renews through ACME with auto-renewal, SC-081 costs you nothing. Zero. Your certificates get shorter and your cron job does not notice.

That is the uncomfortable divide this ballot creates. The shops that automated years ago will not feel it. The ones running a spreadsheet with expiry dates and a calendar reminder will feel it quarterly, then weekly.

## What to do before March 2026

You have until March to get ready, which is enough time if you start now:

1. Inventory what you actually have. Most organisations discover certificates they forgot about, often on internal services, often owned by someone who left. Certificate transparency logs are the free way to do this for public names; that is a large part of why we built SSLBoard.
2. Move public endpoints to ACME. It is the only issuance workflow that scales to 47 days without hiring someone whose job title is "renews certificates".
3. Decide what to do with the things that cannot automate. Load balancers behind vendor lock-in, appliances, that one legacy box nobody will touch. They will need a migration plan or an exception list with names on it.

## The part nobody is ready for

Short lifetimes also change failure modes. When a certificate expires after 47 days instead of 398, an outage is never more than six weeks away, so expiry monitoring shifts from insurance to necessity. And with validation reuse dropping to 10 days, workflows that batch validation and issuance will need rework.

We think the direction is right: the revocation system is broken and expiry is the honest fallback. But the industry is about to find out how much of its TLS estate was quietly running on manual process. If you want to know which of your certificates would survive the first cut, that is a one-domain search on [SSLBoard](https://sslboard.com).
