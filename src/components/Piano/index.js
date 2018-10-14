import React from "react";

import { getKeyForNote } from "../../tools/marker";
export class Piano extends React.Component {
  render() {
    const { keys } = this.props;
    return (
      <div className="Piano">
        <ul>
          {this.props.keys.state.notes.map(note => (
            <li
              key={note.name}
              onMouseDown={() => keys.toggleNote(note.name, true, true)}
              onMouseOut={() => keys.toggleNote(note.name, false, true)}
              onMouseUp={() => keys.toggleNote(note.name, false, true)}
              className={`${note.name} ${note.active ? "active" : ""} ${
                note.name.includes("s") ? "black" : "white"
              }`}
              style={
                note.active
                  ? {
                      background: `linear-gradient(to bottom, #fff 0%, rgba(${
                        note.color
                      }, 0.7) 100%)`
                    }
                  : null
              }
            >
              <p
                className="text"
                style={note.active ? { color: "white" } : null}
              >
                {note.name.includes("s") ? "" : getKeyForNote(note.name)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Piano;
