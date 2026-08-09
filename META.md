FOR OWLBEAR STREAMING
?name=TV&presentation=true&join=true

## Web Access & AI Scraping

A public, unauthenticated API endpoint is available on the local/production web server for AI models or scrapers to retrieve the latest public lore/rules:

* **Production Base**: `https://shivath.com/api/llm-context`

### Query Formats:
* **Index**: `/api/llm-context` (returns index of all available public entities, titles, slugs, and timestamps)
* **Single Item**: `/api/llm-context?slug=<slug>` (returns details of a specific entry)
* **All Details (Paginated)**: `/api/llm-context?all=true&limit=50&offset=0` (optional: `&type=wiki` or `&type=spell`)