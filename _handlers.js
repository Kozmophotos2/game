const handlers = {};

export function addHandler(type, handler) {
  if (!handlers[type]) {
    handlers[type] = [];
  }
  handlers[type].push(handler);
}

export function maybeInstrument(type, instrumentFn) {
  // This function could check if instrumentation is already applied.
  // For now, it directly applies the instrumentation.
  instrumentFn();
}

export function triggerHandlers(type, data) {
  if (handlers[type]) {
    handlers[type].forEach(handler => handler(data));
  }
}
