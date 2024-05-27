function merge<T extends {}, B extends {}>(objA: T, objB: B) {
  return Object.assign(objA, objB);
}
