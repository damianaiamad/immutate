# immutate

1. `tsc` is unable to determine that types are actually identical when importing from external package.
1. Problem due to independent instances of immutable in each package?
1. Seems to cause quite a performance hit. (I am developing a larger app that became very slow when I split it into two packages to share code.)

# Reproduce

1. cd immutate-lib
1. npm i
1. npm link
1. cd ../immutate-app
1. npm i
1. npm link immutate-lib
1. tsc

```
DMHC-PB:immutate-app damian$ tsc -v
Version 2.4.1

DMHC-PB:immutate-app damian$ tsc --listFiles --diagnostics
error TS2321: Excessive stack depth comparing types 'List<OrderData>' and 'List<OrderData>'.
index.ts(12,39): error TS2345: Argument of type 'List<OrderData>' is not assignable to parameter of type 'List<OrderData>'.
  Types of property 'set' are incompatible.
    Type '(index: number, value: OrderData) => List<OrderData>' is not assignable to type '(index: number, value: OrderData) => List<OrderData>'. Two different types with this name exist, but they are unre
lated.
      Type 'List<OrderData>' is not assignable to type 'List<OrderData>'. Two different types with this name exist, but they are unrelated.
/Users/damian/.nvm/versions/node/v7.10.0/lib/node_modules/typescript/lib/lib.es6.d.ts
/Users/damian/EventSoft/Code/immutate/immutate-lib/node_modules/immutable/dist/immutable-nonambient.d.ts
/Users/damian/EventSoft/Code/immutate/immutate-lib/index.ts
/Users/damian/EventSoft/Code/immutate/immutate-app/node_modules/immutable/dist/immutable-nonambient.d.ts
/Users/damian/EventSoft/Code/immutate/immutate-app/index.ts
Files:             5
Lines:         26203
Nodes:         99337
Identifiers:   35318
Symbols:      129226
Types:         49188
Memory used: 138661K
I/O read:      0.01s
I/O write:     0.00s
Parse time:    0.69s
Bind time:     0.28s
Check time:    2.41s
Emit time:     0.06s
Total time:    3.43s
```
