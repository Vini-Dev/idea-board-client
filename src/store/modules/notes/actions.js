export function storeAction(payload) {
  return { type: '@note/STORE', payload };
}

export function updateAction({ id, top, left, title, text }) {
  return { type: '@note/UPDATE', payload: { id, top, left, title, text } };
}

export function deleteAction(id) {
  return { type: '@note/DELTE', payload: { id } };
}
