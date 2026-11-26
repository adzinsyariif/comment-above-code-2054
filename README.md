# Load-Bearing Bug

[![make.fun · u-mfnakmal-the-comment-above-the-code-35e38026](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026)
[![rank](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/adzinsyariif/comment-above-code-2054/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026)
[![reward](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/adzinsyariif/comment-above-code-2054/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026)

An entry for the [The Comment Above the Code](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026) bounty on [make.fun](https://make.fun): one funny, painfully honest line imagining the comment a developer left above fragile production code.

The line:

> // Do not fix. Three enterprise customers built their billing on this bug working correctly.

The bug is no longer a bug — it is specified behaviour that paying customers
integrated against, so fixing it would break billing. The turn lands on the
last two words: the bug has to keep *working correctly*.

## Run

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. The candidate lines considered
along the way are in [candidates.md](candidates.md).
