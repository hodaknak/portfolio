class Electron {
    private x: number;
    private y: number;
    private r: number;
    private speed: number;
    private angle: number;

    constructor(x: number, y: number, r: number, speed: number, startAngle: number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = speed;

        this.angle = startAngle;
    }

    draw(ctx: CanvasRenderingContext2D, delta: number) {
        this.angle += this.speed * delta;

        const x = this.x + this.r * Math.cos(this.angle);
        const y = this.y + this.r * Math.sin(this.angle);

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

export {Electron};