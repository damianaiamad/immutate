# immutate

Demonstrates a Typescript error:

1. cd immutate-lib
1. npm i
1. npm link
1. cd ../immutate-app
1. npm i
1. npm link immutate-lib
1. tsc

`DMHC-PB:immutate-app damian$ tsc -v
Version 2.4.1
DMHC-PB:immutate-app damian$ tsc
error TS2321: Excessive stack depth comparing types 'List<OrderData>' and 'List<OrderData>'.
index.ts(12,39): error TS2345: Argument of type 'List<OrderData>' is not assignable to parameter of type 'List<OrderData>'.
  Types of property 'set' are incompatible.
    Type '(index: number, value: OrderData) => List<OrderData>' is not assignable to type '(index: number, value: OrderData) => List<OrderData>'. Two different types with this name exist, but they are unre
lated.
      Type 'List<OrderData>' is not assignable to type 'List<OrderData>'. Two different types with this name exist, but they are unrelated.`

# Discussion

tsc is unable to determine that the types are actually identical.
Both immutate-app and immutate-lib specify immutable 3.8.1