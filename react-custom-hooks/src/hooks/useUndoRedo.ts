import { useState } from "react";

type UndoRedoState<T> = {
    history: T[];
    index: number;
};

export function useUndoRedo<T>(initialValue: T) {
    const [state, setState] = useState<UndoRedoState<T>>({
        history: [initialValue],
        index: 0,
    })
    const { history, index } = state;

    const canUndo = index > 0;
    const canRedo = index < history.length - 1;
    const value = history[index];

    const setValue = (value: T) => {
        setState((prev) => {
            const nextHistory = [...prev.history.slice(0, prev.index + 1), value];
            return {
                history: nextHistory,
                index: prev.index + 1,
            };
        });
    };

    const undo = () => {
        setState((prev) => {
            if (prev.index === 0) {
                return prev;
            }
            return {
                ...prev,
                index: prev.index - 1,
            }
        })
    }

    const redo = () => {
        setState((prev) => {
            if (prev.index >= prev.history.length - 1) {
                return prev;
            }
            return {
                ...prev,
                index: prev.index + 1,
            }
        })
    }

    return { value, history, index, canUndo, canRedo, setValue, undo, redo };
}