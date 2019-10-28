class Weapon {
    constructor() {
        this.weaponTab = [
            {
                "name": "couteau",
                "damage": "5"
            },
            {
                "name": "épée",
                "damage": "10"
            },
            {
                "name": "revolver",
                "damage": "15"
            },
            {
                "name": "fusil",
                "damage": "20"
            },
            {
                "name": "mitraillette",
                "damage": "25"
            },
            {
                "name": "grenade",
                "damage": "30"
            }
        ];
    }

    getWeaponTab() {
        return this.weaponTab
    }

    getRandomWeapon() {
        return this.weaponTab[randomInt].name
    }
}

export { Weapon }