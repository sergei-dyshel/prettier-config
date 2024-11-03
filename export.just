# Check formatting
[no-cd]
format-check *args:
    prettier . --check {{args}}

# Check and fix formatting
[no-cd]
format-write *args:
    prettier . --check --write {{args}}
