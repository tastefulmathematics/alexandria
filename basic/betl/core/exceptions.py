

class ConfigurationException(Exception):
    def __init__(self, *a, **k):
        self.k = k
        super(ConfigurationException).__init__(self, *a)
