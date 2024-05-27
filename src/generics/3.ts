function merge<T extends {}, B extends {}>(objA: T, objB: B): object {
  return Object.assign(objA, objB);
}
