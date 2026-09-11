---
title: "Why we build developer tools"
description: "A note on how we decide what to build: one problem, no agents, pricing that lets you try before you talk to anyone."
pubDate: 2025-03-01
heroImage: "/blog/dev-tools-launch.jpg"
tags: ["company", "engineering"]
---

Before we built products, we spent years doing client work: infrastructure, security reviews, the occasional rescue mission for a system nobody wanted to own. The pattern we kept seeing was never a lack of tools. It was tools that demanded more than the problem was worth: platforms that need an agent on every host, dashboards that need a kickoff call, free tiers that exist to schedule a demo.

Gone Coding exists because we kept thinking the same thing at the end of those projects: this should have been a website.

A website you visit, that does the thing, that shows you the answer. The way `dig` is a website's grumpy ancestor: input, output, done. Most problems in infrastructure do not need a platform. They need one honest answer, presented before you lose interest.

## The test we apply

When an idea comes up, it has to pass three checks, and the third one is where most ideas die:

**One problem.** If we cannot describe the product in a sentence that a busy engineer would understand, it is two products wearing a trench coat. SSLBoard tells you the state of your certificates. That is the sentence. There is no second sentence.

**No deployment.** If using the product requires installing something on your infrastructure, we have converted a question into a project. Projects need approvals and maintenance windows. Questions deserve answers. We make exceptions only when the answer physically cannot be obtained from outside.

**Try before you talk.** If a stranger cannot get value from the product in the first five minutes without creating an account, the product is not ready. Pricing pages and sales calls come after the answer, never before it.

## What this costs

Narrow tools leave things out, and it is fair to ask what. The honest list: SSLBoard will not manage your PKI, rotate your keys, or integrate with your provisioning system. quickS3 will not replace your data lake tooling. We would rather be the tool you open when the question appears than the platform you log into because someone paid for seats.

There is a commercial argument for this too, though it was not the original motivation. Small tools with clear jobs sell themselves, or they do not sell, and either way we find out quickly. Nobody ever churning through six months of enterprise sales cycle has ever learned whether their product was good.

## The current roster

Today the company runs six products: three certificate and TLS tools (SSLBoard, QCReady, SSLCalendar), an S3 file browser for teams (quickS3), an AI interviewer that turns a relative's memories into a book (HappySouls), and a multiplayer breakout game (TwinBrix), because if you only build serious things you get weird in the wrong way.

The roster is diverse but every product passed the same three checks. If future products hold to them too, we will consider the philosophy a success. And if you find one of our tools solving a problem you thought needed a platform, we would love to hear about it: chris@gone-coding.com.
