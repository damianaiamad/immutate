import { moveListItem, OrderWhere } from 'immutate-lib'
import * as Immutable from 'immutable'

export interface OrderData {
    id: string
}

class Test {
    private orderData: Immutable.List<OrderData>

    updateLocally(selectedIndex: number, newIndex: number, where?: OrderWhere) {
        this.orderData = moveListItem(this.orderData, selectedIndex, newIndex, where)
    }
}