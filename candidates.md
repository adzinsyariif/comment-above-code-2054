# Candidates — The Comment Above the Code

One line, at most 200 characters, as the comment a developer left above
fragile production code. Judged on: on-subject (fragile legacy code),
stinging honesty naming a real failure, economy with the punch on the last
words, a fresh angle (not off-by-one / who-wrote-this / no-comments), and
reading like a real codebase comment.

1. **// Do not refactor. Three enterprise customers have built their billing on this bug.**
   Names the real failure — the bug is now a contract. "Built their billing
   on this bug" is the sting. Slightly flat at the end; "this bug" could
   land harder.

2. **// Sleep(400) is load-bearing. The payment gateway needs time to forget the last request.**
   Recognisable and true, but sleep-as-fix is a well-worn beat and the
   second sentence explains rather than turns.

3. **// Temporary workaround from 2019. The vendor promised a fix in Q2. It is now load-bearing.**
   Good process honesty, but "load-bearing" + vendor promise is a common
   shape and the turn is telegraphed.

4. **// We tried removing this in 2021. Legal still has the incident report.**
   Punchy ending, real fear. But it says *that* it broke, not *how* the
   fragility lives on — less specific than the billing angle.

5. **// Do not sort. The database returns rows in the order Finance expects and nobody knows why.**
   Very real, very codebase. The honesty stings, but the last clause is a
   shrug rather than a punchline.

6. **// This catch block swallows the error because the alert wakes the CEO.**
   Sharp and fresh, but it is about alerting policy more than fragile code
   itself, and "wakes the CEO" reads a touch contest-written.

7. **// If this looks wrong, it is. Fixing it breaks the one customer who pays for everyone else.**
   Honest and economical, but "one customer who pays for everyone else"
   is a familiar SaaS lament.

## Pick

**#1, tightened — // Do not fix. Three enterprise customers built their billing on this bug working correctly.**

The billing-on-a-bug angle is fresh (not the usual cliches), names a real
and recognisable failure — customers have integrated against the bug, so
the bug is now specified behaviour — and the turn lands on the last two
words: the bug must keep *working correctly*. "Do not fix" is shorter and
more direct than "Do not refactor", and reads exactly like a comment left
by someone who has been paged about this before. Drafted into main.ts,
then tightened through revision before finalizing.
