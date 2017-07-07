import * as Immutable from 'immutable'

export type OrderWhere = "before" | "after"

export function moveListItem<T>(data: Immutable.List<T>, selectedIndex: number, newIndex: number, direction?: OrderWhere): Immutable.List<T> {
    if (direction) {
        if (direction == "after" && newIndex < selectedIndex)
            newIndex++
        else if (direction == "before" && newIndex > selectedIndex)
            newIndex--
    }

    const saved = data.get(selectedIndex)
    return data.remove(selectedIndex).insert(newIndex, saved)
}