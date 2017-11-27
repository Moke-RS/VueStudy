window.Event = new Vue()

Vue.component('cell', {
    template: `
        <td :class="{ 'selected': isSelected, 'upper-border': isUpperBorder, 'right-border': isRightBorder, 'bottom-border': isBottomBorder, 
                      'left-border': isLeftBorder }" @mousedown="setInitialCell" @mouseup="setLastCell" @mouseover.prevent="setLastCellWhenHovering">
        
        </td>
    `,
    data() {
        return {
            isSelected: false,
            isUpperBorder: false,
            isRightBorder: false,
            isBottomBorder: false,
            isLeftBorder: false
        }
    },
    props: {
        row: { type: Number, required: true, default: 0},
        col: { type: Number, required: true, default: 0},
        mousedown: { type: Boolean, default: false }
    },
    methods: {
        setInitialCell() {
            Event.$emit('initialCellSelected', { row: this.row, col: this.col })
        },
        setLastCell() {
            Event.$emit('lastCellSelected', { row: this.row, col: this.col })
        },
        setLastCellWhenHovering() {
            if (this.mousedown)
                Event.$emit('lastCellSelected', { row: this.row, col: this.col })
        }
    }
})

Vue.component('grid', {
    template: `
        <table @mousedown.prevent="toggleMouseDown" @mouseup.prevent="toggleMouseDown">
            <tbody>
                <tr v-for="row in rows">
                    <cell v-for="col in cols" :row="row" :col="col" :mousedown="isMouseDown" />
                </tr>
            </tbody>
        </table>
    `,
    data() {
        return {
            initialCell: { row: -1, col: -1 },
            lastCell: { row: -1, col: -1 },
            isMouseDown: false
        }
    },
    props: {
        rows: {  type: Number, required: true, default: 0},
        cols: {  type: Number, required: true, default: 0}
    },
    methods: {
        selectRange() {
            if ( this.initialCell.row == -1 || this.initialCell.col == -1 ||
                 this.lastCell.row == -1 || this.lastCell.col == -1) return
            
            let minRowVal, minColVal, maxRowVal, maxColVal = -1;

            minRowVal = this.initialCell.row <= this.lastCell.row ? this.initialCell.row : this.lastCell.row;
            maxRowVal = this.initialCell.row == minRowVal ? this.lastCell.row : this.initialCell.row;
            
            minColVal = this.initialCell.col <= this.lastCell.col ? this.initialCell.col : this.lastCell.col;
            maxColVal = this.initialCell.col == minColVal ? this.lastCell.col : this.initialCell.col;

            this.$children.forEach(cell => {
                cell.isSelected = (cell.row >= minRowVal && cell.row <= maxRowVal && cell.col >= minColVal && cell.col <= maxColVal)
                cell.isUpperBorder = (cell.isSelected && cell.row == minRowVal)
                cell.isRightBorder = (cell.isSelected && cell.col == maxColVal)
                cell.isBottomBorder = (cell.isSelected && cell.row == maxRowVal)
                cell.isLeftBorder = (cell.isSelected && cell.col == minColVal)
            });
        },
        toggleMouseDown() {
            this.isMouseDown = !this.isMouseDown            
        }
    }, 
    mounted() {
        Event.$on('initialCellSelected', (cell) => {
            if (cell.row == this.initialCell.row &&
                cell.col == this.initialCell.col) {
                    this.$children.filter(cell => { return this.row == cell.row && this.col == cell.col }).isSelected = false
            } else {
                this.initialCell = { row: cell.row, col: cell.col }
                this.lastCell = this.initialCell
            }

            this.selectRange()
        })

        Event.$on('lastCellSelected', (cell) => {
            this.lastCell = { row: cell.row, col: cell.col }
            this.selectRange()
        })
    }
})

new Vue({
    el: '#root'
})

