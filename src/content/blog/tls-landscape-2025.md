---
title: "The TLS Landscape in 2025"
description: "The TLS ecosystem is shifted significantly. Short-lived certificates are now the norm, automation is table stakes, and the the old model of manually renewing certificates once a year is effectively dead."
pubDate: 2025-06-10
heroImage: "/blog/tls-thumb.svg"
tags: ["security", "tls", "sslboard"]
---

The TLS ecosystem has shifted significantly over the past few years, and the changes in 2025 are worth paying attention to. Short-lived certificates are now the norm rather than the exception, automation is table stakes, and the old model of manually renewing certificates once a year is effectively dead.

Let's start with certificate lifetimes. Apple's move to limit certificate validity to 47 days, following Google's earlier push for 90-day lifetimes, has forced the industry toward fully automated issuance. Let's Encrypt and other ACME-based certificate authorities have made this transition manageable, but it's created new challenges for organisations that still rely on manual processes or legacy infrastructure that doesn't support automated renewal.

The adoption of TLS 1.3 continues to climb. As of mid-2025, over 90% of web traffic in most regions uses TLS 1.3, with TLS 1.2 making up nearly all the remainder. TLS 1.0 and 1.1 are effectively gone from the public web, though they persist in some internal enterprise environments and IoT devices that can't be easily updated.

Certificate transparency logs have become an essential tool for security teams. They provide a public, append-only record of every certificate issued, making it possible to detect unauthorised certificates for your domains within minutes rather than months. The ecosystem around CT monitoring has matured considerably, with several open-source and commercial tools now available.

The bottom line is that TLS management is becoming more automated but also more complex. More certificates, shorter lifetimes, and stricter compliance requirements mean that visibility and monitoring matter more than ever. If you don't have a clear picture of your certificate landscape, now is the time to get one.
