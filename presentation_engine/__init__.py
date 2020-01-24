import datetime
import os

import facade

logger = facade.get_logger(__name__)


def create_project_document(project, key, name, user):
    logger.info("Creating project for [{key}]".format(key=key))

    document_record = create_document_record(project, key, name, user)
    facade.store_document(document_record)

    create_draft_template(key)
    create_document_template(key)

    logger.info("Project created for [{key}]".format(key=key))


def create_draft_template(document_key):
    template = "Concrete: \n" \
               "Abstract: \n" \
               "Kernel: \n" \
               "\n" \
               "Outline-----\n" \
               "\n" \
               "Draft-----\n"
    file_name = "{document_key}.txt".format(document_key=document_key)
    path = os.path.join(facade.ROOT, "drafts", file_name)
    with open(path, "w") as datafile:
        datafile.write(template)


def create_document_template(document_key):
    file_name = "{document_key}.html".format(document_key=document_key)
    path = os.path.join(facade.ROOT, "documents", file_name)
    with open(path, "w") as datafile:
        datafile.write("<div></div>")


def create_document_record(project, key, name, user):
    template = {
        "a_project": project,
        "a_key": key,
        "name": name,
        "summary": None,
        "description": None,
        "state": "development",
        "story_elements": {
            "kernel": "",
            "concrete": "",
            "abstract": "",
        },
        "design_elements": {
            "energy": False,
            "abundance": False,
            "freedom": False,
            "harmony": False,
            "play": False,
            "surprise": False,
            "transcendence": False,
            "magic": False,
            "celebration": False,
            "renewal": False,
        },
        "colors": [],
        "timeline": {
            "draft_start": None,
            "draft_end": None,
            "writing_start": None,
            "writing_end": None,
            "design_start": None,
            "design_end": None,
            "draw_start": None,
            "draw_end": None,
            "animate_start": None,
            "animate_end": None,
            "publish_start": None,
            "publish_end": None,
            "qa": None,
        },
        "a_created_by": user,
        "a_created_ts": datetime.datetime.utcnow(),
    }
    return template
