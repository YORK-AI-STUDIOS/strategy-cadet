#!/usr/bin/env python3
"""
Migrate <div class="sc-source-line">...</div> from inside .sc-body-frame
to outside (as a sibling), so it anchors to .sc-slide via the
new locked-citation-band CSS rule in slide-base.css.

Pattern in every slide currently:
    <div class="sc-source-line">...</div>
      </div>     <-- body-frame close
    </section>

Target:
      </div>     <-- body-frame close
    <div class="sc-source-line">...</div>
    </section>

Idempotent: skips slides that already have the source-line outside body-frame
(detected by finding the source-line AFTER the body-frame close, not before).
"""
import os
import re
import sys

SLIDES_DIR = "/tmp/strategy-cadet-decks/fleetwood-viewer/slides"

# Pattern: capture (source-line div) followed by (any whitespace) (</div>) (whitespace) </section>
# The </div> here is the body-frame close. We swap the source-line and the </div>.
PATTERN = re.compile(
    r'(\n[ \t]*<div class="sc-source-line">.*?</div>)'  # 1: source-line
    r'([ \t\n]*)'                                       # 2: whitespace between
    r'(</div>)'                                         # 3: body-frame close
    r'([ \t\n]*)'                                       # 4: whitespace
    r'(</section>)',                                    # 5: section close
    re.DOTALL,
)

REPLACEMENT = r'\3\2\1\4\5'  # swap source-line and </div>

migrated = []
skipped = []
unmatched = []

for fname in sorted(os.listdir(SLIDES_DIR)):
    if not fname.endswith(".html"):
        continue
    fpath = os.path.join(SLIDES_DIR, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    if 'class="sc-source-line"' not in content:
        skipped.append(f"{fname} (no source-line)")
        continue

    new_content, n = PATTERN.subn(REPLACEMENT, content)
    if n == 0:
        # Maybe already migrated, check if source-line appears AFTER </div></section>
        if re.search(r'</div>\s*\n\s*<div class="sc-source-line"', content):
            skipped.append(f"{fname} (already migrated)")
        else:
            unmatched.append(fname)
        continue

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(new_content)
    migrated.append(fname)

print(f"Migrated: {len(migrated)}")
for m in migrated[:5]:
    print(f"  + {m}")
if len(migrated) > 5:
    print(f"  ... and {len(migrated) - 5} more")
print(f"Skipped: {len(skipped)}")
for s in skipped[:3]:
    print(f"  - {s}")
print(f"Unmatched (needs manual review): {len(unmatched)}")
for u in unmatched:
    print(f"  ! {u}")
sys.exit(0 if not unmatched else 1)
