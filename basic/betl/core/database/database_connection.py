import sqlalchemy as sa
from core import facade


class DatabaseBinding:

    def __init__(self, database_key):
        database_url = facade.get_database_url(database_key)
        connection_string = str(database_url)
        self.engine = sa.create_engine(connection_string)

    def __enter__():
        pass

    def __exit__():
        pass

    def __del__():
        pass

    def reflect_table(table_name, schema_name):
        pass
