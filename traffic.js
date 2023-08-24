    class TrafficLight {
    constructor() {
        this.lightIndex = 0;
    }

     static get colors() {
        return ["red", "green", "yellow"];
    }

    get lights() {
        return TrafficLight.colors[this.lightIndex];
    }

    next() {
        this.lightIndex++;
        if (this.lightIndex > TrafficLight.colors.length) {
            this.lightIndex = 0;
        }
    }
}

const traffic = new TrafficLight();
console.log(TrafficLight.colors);
console.log(traffic.lights);
traffic.next()
console.log(traffic.lights);

export default TrafficLight;

