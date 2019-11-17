export default function theme(state = [], action) {
  switch (action.type) {
    case '@note/STORE': {
      return [...state, ...action.payload];
    }
    case '@note/UPDATE': {
      const { id, top, left, title, text } = action.payload;
      console.log(action.payload);
      return [
        ...state.map(s => ({
          ...s,
          ...(s._id === id
            ? {
                title: title !== undefined ? title : s.title,
                text: text !== undefined ? text : s.text,
                left: left !== undefined ? left : s.left,
                top: top !== undefined ? top : s.top,
                zindex: state.length,
              }
            : {
                zindex: s.zindex > 2 ? s.zindex - 1 : s.zindex,
              }),
        })),
      ];
    }
    case '@note/DELETE': {
      const { id } = action.payload;
      return [...state.filter(s => s._id !== id)];
    }
    default:
      return state;
  }
}
