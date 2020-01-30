import sqlalchemy as sa
from core import metadata_columns


class ReferenceTables:

    def __init__(self, schema_name="public"):
        self.schema_name = schema_name
        self.metadata = sa.MetaData()
        self.data_source = sa.Table("data_source", self.metadata,
            sa.Column(**metadata_columns.b_id),
            sa.Column(**metadata_columns.b_key),
            sa.Column("name", sa.Text),
            sa.Column(**metadata_columns.b_created_by),
            sa.Column(**metadata_columns.b_created_ts),
            sa.Column(**metadata_columns.b_touched_by),
            sa.Column(**metadata_columns.b_touched_ts),
        )
