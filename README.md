# Nx Cloud CI worker sizing demo

Nine projects, each with a 15s `build` and an 8s `test`:

```
core ─┬─ ui ───┬─ web
      │        ├─ mobile
      │        ├─ admin
      │        └─ docs
      └─ data ─┬─ api
               └─ worker
```

The job starts on 1 worker. At `nx run-many`, Nx Cloud measures the work left after cache hits
against the whole workspace and adds workers: up to a third stays small (1), up to two thirds is
medium (2), more is large (3).
