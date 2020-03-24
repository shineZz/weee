import * as types from './type.js';
export const mutations={
    [types.CONSOLE_TEXT](state, val) {
        console.log('val:',val);
        
        state.text.push(val)
        console.log('state:',state);
      }
}