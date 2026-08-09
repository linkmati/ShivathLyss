# Agent Rules for Shivath Workspace

## Graphify First Rule
- ALWAYS check if `graphify-out/` or `graphify-out/graph.json` exists first when answering questions about the project, architecture, deities, or files.
- Query the graph (`graphify query`, `graphify explain`, or `graphify path`) before scanning raw files.

## Lyss Folder Protection
- NEVER read, write, modify, delete, list, search, or interact with any file or folder inside the `6 - Lyss` directory (or anything matching `Lyss`) unless explicitly specified by the user in the current conversation.

## Safe Editing & Git Rules
- NEVER rewrite or overwrite existing notes unless explicitly specified by the user.
- ALWAYS commit git changes before modifying any files in the workspace (NEVER run `git push`).


