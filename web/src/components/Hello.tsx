import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel? : number;
}

function getExclamationMarks(enthusiasmLevel: number) {
    return Array(enthusiasmLevel + 1).join('!');
}

function Hello({name, enthusiasmLevel = 1 } : Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("Let's do better.");
    }
    return (
      <div>
          Hello, <b>{name + getExclamationMarks(enthusiasmLevel)}</b> Did you like <i>that</i>?
      </div>
    );
}

export default Hello;