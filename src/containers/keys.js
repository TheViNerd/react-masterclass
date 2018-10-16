import { Container } from "unstated";

export default class KeysContainer extends Container {
  state = {
    notes: ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
      .reverse()
      .map(note => ({ name: note, color: "red", active: false }))
  };
  /**
   * This will toggle notes and keys.
   * @param {string} key
   * @param {string} color
   * @param {boolean} active
   */
  toggleNote = (key, color, active) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (key === note)
        Object.assign({}, note, { color, active });
        return note;
      })
    });
  };
}

export const keysContainer = new KeysContainer();
