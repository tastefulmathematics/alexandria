import datetime
import os

import facade_2

def create_project_document(project, key, name, user):
    document_record = {
      "key": key,
      "name": name,
      "description": None,
      "summary": None,
      "state": "development",
      "a_created_by": kuserey,
      "a_created_ts": datetime.datetime.utcnow(),
    }

def create_draft_template(document_key):
    template = "Concrete: \n" \
    "Abstract: \n" \
    "Kernel: \n" \
    "\n" \
    "Outline-----\n" \
    "\n" \
    "Draft-----\n"
    file_name = f"{document_key}.txt"
    path = os.path.join(facade_2.ROOT, "drafts", file_name)
    with open(path, "w") as datafile:
        datafile.write(template)

def create_document_template(document_key):
    file_name = f"{document_key}.html"
    path = os.path.join(facade_2.ROOT, "documents", file_name)
    with open(path, "w") as datafile:
        datafile.write(template)
