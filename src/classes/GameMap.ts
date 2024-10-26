export class GameMap {
    tileMap: number[][];
    collisionMap: number[][];

    private static defaultMap(): number[][] {
        const map: number[][] = [];
        for (let i = 0; i < 20; i++) {
            map.push([]);
            for (let j = 0; j < 20; j++) {
                map[i].push(0);
            }
        }
        return map;
    }

    public draw() {
        const canvas = document.getElementById("map") as HTMLCanvasElement;
        interface idToTile {
            [key: number]: string;
        }
        const converter: idToTile = {
            0: 'green',
            1: 'blue',
        }
        const ctx = canvas.getContext("2d");
        if (ctx) {
            for (let i = 0; i < this.tileMap.length; i++) {
                for (let j = 0; j < this.tileMap[i].length; j++) {
                    ctx.fillStyle = converter[this.tileMap[i][j]];
                    ctx.fillRect(i * 50, j * 50, 50, 50);
                }
            }
        }
    }

    constructor(tileMap?: number[][], collisionMap?: number[][]) {
        this.tileMap = tileMap || GameMap.defaultMap();
        this.collisionMap = collisionMap || GameMap.defaultMap();     
    }
}