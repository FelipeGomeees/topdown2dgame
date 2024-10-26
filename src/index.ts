import { GameMap } from "./classes/GameMap";

async function gameSetup() {
    const map = new GameMap();
    map.draw();
}