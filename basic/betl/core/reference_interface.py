from core import reference_tables, database_connection


class ReferenceInterface:
    _data_source_record_list = []

    def __init__(self):
        if not _data_source_record_list:
            with database_connection.DatabaseConnection() as conn:
                table = reference_tables.ReferenceTables().data_source
                for row in conn.execute(table.select()):
                    self._data_source_record_list.append(dict(row))

    
