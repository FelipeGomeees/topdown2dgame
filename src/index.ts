import { GameMap } from "./classes/GameMap";
import { testMap } from "./maps";

window.onload = () => {
    const map = new GameMap(testMap, testMap);
    map.draw();
}   