import logging
import json
import os

ROOT = os.path.dirname(os.path.realpath(__file__))
project_listing = [
  {
    "a_key": "tasteful_mathematics",
    "name": "Tasteful Mathematics",
    "static_page_path": "tasteful_mathematics.json",
    "a_created_by": "britain",
    "a_created_ts": "2020-01-22"
  },
  {
    "a_key": "highly_technical_data",
    "name": "Highly Technical Data",
    "static_page_path": "static_page/highly_technical_data.json",
    "a_created_by": "britain",
    "a_created_ts": "2020-01-22"
  },
  {
    "a_key": "basic",
    "name": "b.ASIC",
    "static_page_path": "static_page/data/basic.json",
    "a_created_by": "britain",
    "a_created_ts": "2020-01-22"
  },
  {
    "a_key": "rote_learning",
    "name": "Rote Learning",
    "static_page_path": "static_page/data/rote_learning.json",
    "a_created_by": "britain",
    "a_created_ts": "2020-01-22"
  },
]
project_mapping = {project["a_key"] for project in project_listing}

document_path = os.path.join(ROOT, "document_listing.json")
with open(document_path) as _json_file:
    document_listing = json.load(_json_file)

CURRENT_ID = 0
document_mapping = {}
for document in document_listing:
    CURRENT_ID = max(CURRENT_ID, document["a_id"])
    document_mapping[document["a_key"]] = document


def get_logger(name):
    return logging.getLogger(name)


def project_list():
    return [record["a_key"] for record in project_listing]


def store_document(document_record):
    global CURRENT_ID
    global document_listing
    key = document_record["a_key"]
    if key in document_mapping:
        document_record["a_id"] = document_mapping[key]["a_id"]
    else:
        CURRENT_ID += 1
        document_record["a_id"] = CURRENT_ID

    document_listing.append(document_record)
    with open(document_path, "w") as json_file:
        json.dump(document_listing, json_file, indent=2, default=str)
