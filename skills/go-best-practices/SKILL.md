---
name: go-best-practices
description: "Go engineering practices. Use when reading or editing .go files, designing Go packages or APIs, handling errors or context, writing concurrent Go, or reviewing Go code."
---

# Go best practices

Apply `principle-type-system-discipline` and `principle-boundary-discipline`, translated into honest Go. Read `go.mod`, repository scripts, CI, and nearby packages before choosing commands or conventions.

## Packages and APIs

- Put code with the domain knowledge it owns. Avoid generic `util`, `common`, and pass-through packages.
- Define narrow interfaces in the consuming package. Accept interfaces and return concrete types unless callers need substitution.
- Keep exported APIs small. Do not export a type, field, or interface only to make tests easier.
- Make the zero value useful when it represents a valid state. Use a constructor when creation must validate invariants or acquire resources.
- Keep dependencies pointing toward domain logic. Put HTTP, database, CLI, and generated-code adapters at boundaries.

## Types and boundaries

- Use named types for IDs, units, and values that must not be mixed.
- Parse and validate JSON, RPC, CLI, configuration, and database data at the boundary. Trust the domain type after parsing.
- Use unexported fields and package constructors when a struct must preserve an invariant.
- Do not model contradictory states as booleans plus loosely related pointers. Use separate concrete types or a package-owned variant interface when the distinction changes behavior.
- Go does not provide exhaustive sum-type matching. Do not claim that a switch is compiler-proven exhaustive. Validate closed enums and test every supported variant.
- Derive from protobuf, OpenAPI, database, or other authoritative schemas when the repository already generates those types.
- Do not retain or mutate caller-owned slices and maps unless the API states that ownership transfer. Copy at the boundary when aliasing would break an invariant.

## Errors and context

- Add useful operation context when returning an error and preserve the cause with `%w`.
- Use `errors.Is` and `errors.As`. Do not branch on error strings.
- Use sentinel or typed errors only when callers need stable programmatic behavior.
- Handle or return an error at each layer. Avoid logging and returning the same error unless that boundary owns a distinct event.
- Pass `context.Context` as the first parameter for cancellable work. Propagate cancellation and deadlines. Do not use context as an options bag.

## Concurrency and resources

- Start synchronous. Add concurrency only when independent work or latency justifies it.
- Give every goroutine an owner, a stop condition, and a join or drain path. Bound worker counts and queues.
- Let the sender close a channel. State channel ownership when it is not obvious.
- Protect shared maps and mutable state, or remove the sharing. Do not copy a type containing a mutex.
- Close files, response bodies, rows, and other resources on every path. Check deferred errors when they affect correctness.

## Verification

- Use `gofmt` and the repository's normal checks.
- Run focused tests while iterating, then `go test ./...` when repository scope permits.
- Run `go test -race ./...` for changed concurrent behavior when the suite supports it.
- Run `go vet ./...` unless the repository wraps it in another command.
- Prefer table-driven tests when cases share setup and assertions. Keep distinct behavior in distinct tests.
- Test exported behavior and failure cases. Avoid mocks when a real in-process dependency is cheap and deterministic.
