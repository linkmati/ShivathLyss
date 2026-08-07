#!/usr/bin/env python3
import json
import sys
import os
import re

def print_help():
    print("Shivath Ledger Search CLI Helper")
    print("Usage:")
    print("  python3 search_ledger.py <query_term> [--type <wiki|spell|mission|character>]")
    print("Examples:")
    print("  python3 search_ledger.py \"Boiling Sun\"")
    print("  python3 search_ledger.py \"Fireball\" --type spell")
    sys.exit(0)

def main():
    if len(sys.argv) < 2 or "--help" in sys.argv or "-h" in sys.argv:
        print_help()

    query = sys.argv[1].lower()
    
    # Parse --type filter
    type_filter = None
    if "--type" in sys.argv:
        idx = sys.argv.index("--type")
        if idx + 1 < len(sys.argv):
            type_filter = sys.argv[idx + 1].lower()

    # Load JSON dump
    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(script_dir, "shivath_ledger_dump.json")
    
    if not os.path.exists(json_path):
        print(f"Error: Database dump file not found at {json_path}")
        print("Please run the export process again.")
        sys.exit(1)

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    results = []

    # 1. Search WikiNodes
    if not type_filter or type_filter == "wiki":
        for node in data.get("wikiNodes", []):
            title = node.get("title") or ""
            slug = node.get("slug") or ""
            body = node.get("body") or ""
            excerpt = node.get("excerpt") or ""
            subtitle = node.get("subtitle") or ""
            tags = " ".join(node.get("tags") or [])
            
            if (query in title.lower() or 
                query in slug.lower() or 
                query in body.lower() or 
                query in excerpt.lower() or 
                query in subtitle.lower() or
                query in tags.lower()):
                results.append({
                    "type": "WikiNode",
                    "subtype": node.get("contentType"),
                    "title": title,
                    "slug": slug,
                    "tags": node.get("tags", []),
                    "subtitle": subtitle,
                    "excerpt": excerpt,
                    "body": body,
                    "updatedAt": node.get("updatedAt")
                })

    # 2. Search Spells
    if not type_filter or type_filter == "spell":
        for spell in data.get("spells", []):
            name = spell.get("name") or ""
            slug = spell.get("slug") or ""
            body = spell.get("body") or ""
            school = spell.get("school") or ""
            classes = " ".join(spell.get("classes") or [])
            subclasses = " ".join(spell.get("subclasses") or [])
            
            if (query in name.lower() or 
                query in slug.lower() or 
                query in body.lower() or 
                query in school.lower() or 
                query in classes.lower() or 
                query in subclasses.lower()):
                results.append({
                    "type": "Spell",
                    "title": name,
                    "slug": slug,
                    "level": spell.get("level"),
                    "school": school,
                    "castingTime": spell.get("castingTime"),
                    "range": spell.get("range"),
                    "components": spell.get("components"),
                    "duration": spell.get("duration"),
                    "classes": spell.get("classes", []),
                    "subclasses": spell.get("subclasses", []),
                    "body": body,
                    "updatedAt": spell.get("updatedAt")
                })

    # 3. Search Missions
    if not type_filter or type_filter == "mission":
        for m in data.get("missions", []):
            title = m.get("title") or ""
            slug = m.get("slug") or ""
            body = m.get("body") or ""
            summary = m.get("summary") or ""
            
            if (query in title.lower() or 
                query in slug.lower() or 
                query in body.lower() or 
                query in (summary or "").lower()):
                results.append({
                    "type": "Mission",
                    "title": title,
                    "slug": slug,
                    "status": m.get("status"),
                    "canonDay": m.get("canonDay"),
                    "canonYear": m.get("canonYear"),
                    "summary": summary,
                    "body": body,
                    "updatedAt": m.get("updatedAt")
                })

    # 4. Search Characters
    if not type_filter or type_filter == "character":
        for c in data.get("characters", []):
            name = c.get("name") or ""
            slug = c.get("slug") or ""
            species = c.get("species") or ""
            clazz = c.get("class") or ""
            subclass = c.get("subclass") or ""
            
            if (query in name.lower() or 
                query in slug.lower() or 
                query in (species or "").lower() or 
                query in (clazz or "").lower() or 
                query in (subclass or "").lower()):
                results.append({
                    "type": "Character",
                    "title": name,
                    "slug": slug,
                    "species": species,
                    "class": clazz,
                    "subclass": subclass,
                    "level": c.get("level"),
                    "vitalStatus": c.get("vitalStatus")
                })

    # Output results
    if not results:
        print(f"No records match '{sys.argv[1]}' in the ledger.")
        return

    print(f"Found {len(results)} matches for '{sys.argv[1]}':\n")
    for i, res in enumerate(results, 1):
        print(f"--- MATCH {i}: [{res['type']}] {res['title']} ({res['slug']}) ---")
        if res['type'] == "WikiNode":
            print(f"Category: {res['subtype']}")
            if res['subtitle']:
                print(f"Subtitle: {res['subtitle']}")
            if res['tags']:
                print(f"Tags: {', '.join(res['tags'])}")
            if res['excerpt']:
                print(f"Excerpt: {res['excerpt']}")
            print("\nBody:")
            print(res['body'])
            
        elif res['type'] == "Spell":
            print(f"Level {res['level']} {res['school']}")
            print(f"Casting Time: {res['castingTime']} | Range: {res['range']} | Duration: {res['duration']}")
            print(f"Components: {res['components']}")
            if res['classes']:
                print(f"Classes: {', '.join(res['classes'])}")
            if res['subclasses']:
                print(f"Subclasses: {', '.join(res['subclasses'])}")
            print("\nDescription:")
            print(res['body'])
            
        elif res['type'] == "Mission":
            print(f"Status: {res['status']}")
            if res['canonDay'] is not None and res['canonYear'] is not None:
                print(f"Date: Year {res['canonYear']}, Day {res['canonDay']}")
            if res['summary']:
                print(f"Summary: {res['summary']}")
            print("\nDescription:")
            print(res['body'])
            
        elif res['type'] == "Character":
            print(f"Level {res['level']} {res['species'] or 'Unknown'} {res['class'] or 'Unknown'}{' ('+res['subclass']+')' if res['subclass'] else ''}")
            print(f"Status: {res['vitalStatus']}")
            
        print("\n" + "="*50 + "\n")

if __name__ == "__main__":
    main()
