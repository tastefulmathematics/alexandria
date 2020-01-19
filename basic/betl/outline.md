# b.ASIC: Extract, Transform, Load
## 0. Introduction and overview
### Why? Just why?
### Python
- syntax
- basic data types
- loops
- main
- imports
- objects
### SQL databases
- filter clauses
- CRUD operations
- joins
- constraints and indexing
- query planner
- views
- other queries
### JavaScript/HTML/CSS
- syntax
- basic data types
- loops
- NodeJs
- imports
- objects
- Walk through chrome
### Text editors and IDEs
- Basic with nano
- Syntax highlighting with Atom
- Code completion with PyCharm
- Code execution with PyCharm
- Debugging with PyCharm
- Debugging with Chrome
### Git
- Idea of version control
- Schematic of Git
- Basic git commands
- Remote aspects of Git
### Docker
- Idea of virtualization
- Schematic of Docker
- Vanilla docker containers
- Use cases for docker

## 1. First steps
### Open Files: CSV
- Most primitive version of ETL
- Structure of CSV
- CSV package
- Print to screen

### Transform strings
- Upper/Lower
- Split
- Coalesce
- Regular expressions
### Transform datetime
- String to datetime to string
- Parse and isoformat
- timezones
- timedelta (age)
- datetime object

### Transform hashes
- Notion of a hash
- warn about hash builtin
- ordering keys
- hashing values
- potential for hash versions

### Print data: json and yaml
- Attempt to print structured data
- JSON formatting
- YAML formatting

##2.Backend
### Database basics: SQLite, create table
- create table
- test table with insert/select/update/delete (CRUD)

### DBAPI and SQLAlchemy
- Concepts of DBAPI
- Python packages for each DB
- SQLAlchemy
- Simplify CRUD queries
- Asides for reflection and alembic

### Separate extract and Transform
- Add databases to the option for Extract
- Add databases to the option for Load

### Elaborate databases: uniqueness, indexing, and all that
- improve Load with uniqueness
- improve Load with compact

##3. Frontend
### Frameworks: Bulma and Vuejs
- Bulma tiles and flexbox
- Vuejs conditional rendering
- Vuejs State
- Vue developer tools

### Outline GUI
- Specific tool rather than general GUI
- Expand options for Extract
- Use SQLite to store results

### BUild GUI
### Outline Dashboard
- Components for specific purpose
- Toggle components open/closed
- Transition to tiles and back again
### Build Dashboard

##4. Hardening
### Docker, PostGreSQL and Redis
- Install Docker, PostGreSQL and Redis
- Simple test of PG
- Simple test of Redis
- Switch out SQLite for PG and Redis
- Add to GUI

### S3
- No more local Files
- Python package to interact with S3
- Add to GUI

### SQS and message infrastructure
- The idea of message based systems
- Build a queue from PG and Redis
- Discuss cloud options

### Lambdas
- Server compute
- Serverless compute
- Considerations for both
- A comment on scale

### Strategy pattern
- Outline strategy pattern
- Define API
- Relate conditional branching

##5 Testing
### Goals of Testing
- What it is not
- Allow editing code
- Allow demonstration of code
- Provide code confidence
- Better code writing

### Unit Testing
- Lightweight
- Mocking/Patching

### Implementation Testing
- Minimum number of tests
- Division of labor
- Fixtures and factories

### CLI tooling
- Creating CLIs
- Adding to airflow
- Running ad hoc
