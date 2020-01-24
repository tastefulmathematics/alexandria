import argparse

from presentation_engine import commands

commands = [{
        "command": "create",
        "method": commands.create_project,
        "description": "Create a new project document",
}]
command_mapping = {item["command"]: item for item in commands}

description = "Presentation Engine"


def main():
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument("command")

    help_text = "The project for the presentation"
    parser.add_argument("-p", dest="project", help=help_text)

    help_text = "The key for the document record"
    parser.add_argument("-k", dest="key", help=help_text)

    help_text = "The name of the document"
    parser.add_argument("-n", dest="name", help=help_text)

    help_text = "Who is this?"
    parser.add_argument("-u", dest="user", help=help_text)
    return parser.parse_args()


if __name__ == '__main__':
    args = main()
    command = command_mapping.get(args.command)
    if command:
        command["method"](args)
    else:
        print(f"[{args.command}] is not a valid command.")
