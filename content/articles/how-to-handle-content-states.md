---
title: "How to handle content state in a writing project"
image: "/content/product-report-jan-2025.png"
description: "Vewrite's product is based on structured workflows with discrete content states. Let's look at how that impacts how we design the product."
date: "2025-01-15"
author: "Rami James, Founder"
authorLink: "https://www.ramijames.com"
readingLength: 4
---

## Content state is deceptively tricky

### Problem Introduction

We've been thinking hard about what workflow state actually means for the better part of a year now. Before we dive into the nitty-gritty details, perhaps we should define some of the basics first.

In Vewrite, there are a few canonical items that define how the system works. We have:

- Workflows that have states
- Projects that have workflows
- Deliverables which belong to projects

Deliverables are written content pieces. For example, if you have a project for a client and they require that your team writes for them ten content pieces, each of those is one deliverable. You deliver them to the client. 

Each of these deliverables get pushed through a workflow which will have a set of discrete states.

The problem that we have been wrangling with is, "what does it mean for the content itself as it gets pushed through the workflow?"

It's not a simple problem because what the content is often depends on the state that you are currently in within the workflow. For example, a deliverable that is in the OUTLINE state will have content that is an outline and will not be a written piece that you'd deliver. 

Each state's content may be something else, and how Vewrite as a product handles these different states and the associated content is not straightforward. From a user experience perspective this can be clunky and unwieldy, and requires an elegant solution that ensures that the stream of work is easy.

### Designing a solution

Our initial implementation assumed that each workflow would have a set of states, and each state would have it's content. Straightforward and simple. We implemented this in a couple of weeks, and pushed it out to our core group of beta testers. Their initial feedback was that it was clunky and misrepresented how they actually work. 

When we dive into what that actually means, we can get some insight into why. At the heart of the problem is a design assumption that all states (and their content) are equal. This is, of course, not true for most writing projects.

When writing, you'll tend to have a core deliverable and a constellation of actionable items around that deliverable that are supportive in nature. This sounds very esoteric, so let's break it down and explain exactly what this means, because it really gets to the heart of the issue.

You're writing an article which will eventually be published on a client's website. Typically, you'll agree with your client what the scope of the article should encompass. This is your topic, and there will be some research that goes into figuring out the exact details of what you'll be writing. As a way to make sure that you and your client are on the same page, it's good practice to build out a rough outline of the written piece and get that approved before you start writing the draft. Once you have this approved, you can write your draft, and get your client's feedback. It may take a few rounds, but eventually you and your client will be happy with the output and the deliverable will be approved and published.

There are discrete steps along the workflow, but it isn't linear, and the content that eventually builds out the deliverable itself has a life-cycle that supports the end product.

If we approach this in a linear fashion then we encounter a few problems with our initial implementation:

1. It's hard to reference information that is critical for the writing process if it is closely tied to the the states in the workflow
2. Referenced information like research materials, outlines, and review comments is not static and likely will change during the life-cycle of the deliverable
3. 