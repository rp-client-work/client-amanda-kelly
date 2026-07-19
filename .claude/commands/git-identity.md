---
description: Set git commit identity to Claude <noreply@anthropic.com> so commits show as verified on GitHub
---

Run:

```
git config user.email "noreply@anthropic.com"
git config user.name "Claude"
```

Confirm the config was set by running `git config user.email && git config user.name`.
