import json

import presentation_engine


def create_project(args):
    kwargs = {
        "project": args.project,
        "key": args.key,
        "name": args.name,
        "user": args.user or "britain"
    }
    if not all(kwargs.values()):
        kwargs["message"] = "Missing a keyword argument"
        print(json.dumps(kwargs, indent=2))
        exit(1)

    presentation_engine.create_project_document(**kwargs)
