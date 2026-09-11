---
title: "Introducing SSLBoard"
description: "SSLBoard is a hosted certificate monitor: point it at a domain and it builds a live inventory of every certificate, tracks expiry, and flags misconfigurations. No agents, no account to start."
pubDate: 2025-01-15
heroImage: "/blog/sslboard-launch.jpg"
tags: ["sslboard", "security", "ssl"]
---

Every organisation we have ever looked at has the same three certificate problems. Nobody knows exactly which certificates exist. Nobody knows exactly when they expire. And the one that breaks, breaks on a Friday evening while everyone responsible is on a plane.

The usual fixes fail in familiar ways. Spreadsheets go stale the week after someone dutifully fills them in. Enterprise certificate lifecycle platforms cost more than the outage they prevent and demand an agent deployment, a discovery scan of your network, and a sales call. Certificate transparency logs are public and complete, but raw CT is a firehose; without tooling it tells you a certificate exists, not what to do about it.

SSLBoard is our answer, and it starts from a different premise: you should be able to type a domain name and get answers, the same way you type a domain into a browser and get a page.

## What it does

The core is a continuous scan. Point SSLBoard at a domain and it enumerates the certificates for that domain and its known subdomains, combining direct TLS inspection with certificate transparency sources. For each certificate you see the issuer, validity window, key algorithm, chain, and SANs, and whether the deployment has problems: expiring soon, chain incomplete, key too small, hostname mismatch.

Three things fall out of that inventory:

- **Expiry tracking.** Every certificate gets monitored, and you get alerted well before expiry, by email. Not once, at some arbitrary "30 days out", but on a schedule you set.
- **Misconfiguration flags.** The checks a pentester would run in the first ten minutes: weak protocols, short keys, broken chains, names on the certificate that no longer match what is served.
- **Shadow-certificate discovery.** Because CT logs record every publicly trusted certificate issued for your domains, SSLBoard surfaces ones you did not know about, including certificates issued by people who maybe should not have them.

## What it deliberately does not do

No agent. Nothing gets installed on your servers; the scanner only sees what the public internet sees. No network discovery sweeping your private ranges, which also means it will never find the certificate on the internal printer, and we consider that a feature. No configuration changes: SSLBoard watches, it does not touch.

We priced it so the free tier answers the question most people actually have, "what is my exposure right now", without an account.

## Why we built it this way

We run our own fleet of domains and products, and we got tired of being the spreadsheet people. The tools we wanted to buy made us pay for a platform when we wanted a dashboard. So we built the dashboard, and then, because we are like that, we made the scanning engine good enough to sell on its own.

Try it on your own domain at [sslboard.com](https://sslboard.com). If it finds something you did not know about, that was the point.
