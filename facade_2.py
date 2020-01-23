import json
import os

ROOT = os.getcwd()
project_listing = [

]
project_mapping = {project["a_key"] for project in project_listing}

document_path = os.path.join(ROOT, "document_listing.json")
with open(document_path) as json_file:
    document_listing = json.load(json_files)

current_document_id = 0
docuemnt_mapping = {}
for document in document_listing:
    CURRENT_ID = max(current_document_id, document["a_id"])
    document_mapping[document["a_key"]] = document

def store_document(document_record):
    global current_document_id, docment_listing
    key = document_record["a_key"]
    if key in document_mapping:
        document_record["a_id"] = document_mapping[key]["a_id"]
    else:
        current_document_id += 1
        document_record["a_id"] = current_document_id

    document_listing.append(document_record)
    with open(document_path, "w") as json_file:
        json.dump(document_listing)
