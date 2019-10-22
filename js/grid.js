class Grid {
    constructor(attributeFirst, attributeSecond, attributeThird, gridLength) {
        this.attributeFirst = attributeFirst ? attributeFirst : null;
        this.attributeSecond = attributeSecond ? attributeSecond : null;
        this.attributeThird = attributeThird ? attributeThird : null;
        this.gridLength = gridLength
    }

    browseTab() {
        let randomInt = 0;
        let cell = null;
        let id =  null;
        let i = 0;
        let j = 0;

        while (i < this.gridLength) {
            randomInt = Math.floor(Math.random() * this.gridLength)
            if (randomInt < 10) {
                id = 'td-0'
            }
            else {
                id = 'td-'
            }
            cell = document.getElementById(id + randomInt);

            while (cell.hasAttribute(this.attributeFirst) || cell.hasAttribute(this.attributeSecond) || cell.hasAttribute(this.attributeThird) && j < this.gridLength) {
                randomInt = Math.floor(Math.random() * this.gridLength)
                if (randomInt < 10) {
                    id = 'td-0'
                }
                else {
                    id = 'td-'
                }
                cell = document.getElementById(id + randomInt);
                j++
            }
            i++
        }
        return cell
    }
}

export { Grid }