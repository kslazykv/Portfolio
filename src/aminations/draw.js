function random(min, max) {
    'use strict';
    return min + Math.random() * (max - min);
}

function BParticle(x, y, canvasWidth, canvasHeight) {
    this.posX = x;
    this.posY = y;
    this.vx = 5;
    this.vy = 5;
    this.gravity = 0.05;
    this.h = 10;
    this.w = 10;
    this.fragments = [];
    this.bouncefactorx = 0.5;
    this.bouncefactory = 0.5;
    this.color = "rgb(" + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + ")";
    this.stopped = false;

    this.update = function() {
        if (!this.stopped) {
            this.posY += this.vy;

            if (this.posY > canvasHeight - this.h) {
                this.vy *= -this.bouncefactory;
                this.posY = canvasHeight - this.h;
                this.vy *= 0.98;

                if (Math.abs(this.vy) < 0.5) {
                    this.stopped = true;
                }

                if (this.fragments.length === 0) {
                    for (let i = 0; i < random(5, 10); i++) {
                        let p = new Fragment(this.posX, this.posY, canvasWidth, canvasHeight);
                        let s = random(2, 8);
                        p.w = s;
                        p.h = s;
                        p.bouncefactory = random(-0.5, 0.5) * 1.5;
                        p.bouncefactorx = -1;
                        this.fragments.push(p);
                    }

                    for (let i = 0; i < random(5, 10); i++) {
                        let p = new Fragment(this.posX, this.posY, canvasWidth, canvasHeight);
                        p.w = 5;
                        p.h = 5;
                        p.bouncefactory = random(-0.5, 0.5) * 1.5;
                        p.bouncefactorx = 0.5;
                        this.fragments.push(p);
                    }
                }
            }

            this.vy += this.gravity;
        }

        for (let i = 0; i < this.fragments.length; i++) {
            this.fragments[i].update();
        }
    };

    this.draw = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.w, this.h);

        for (let i = 0; i < this.fragments.length; i++) {
            this.fragments[i].draw(ctx);
        }
    };
}

function Fragment(x, y, canvasWidth, canvasHeight) {
    this.posX = x;
    this.posY = y;
    this.vx = random(-2, 2);  // Horizontal velocity
    this.vy = random(-5, 5);  // Vertical velocity
    this.gravity = 0.1;       // Gravity effect
    this.h = random(2, 5);    // Height of the fragment
    this.w = random(2, 5);    // Width of the fragment
    this.bouncefactorx = random(-0.5, 0.5); // Horizontal bounce factor
    this.bouncefactory = random(-0.5, 0.5); // Vertical bounce factor
    this.color = "rgb(" + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + "," + Math.floor(random(0, 255)) + ")"; // Color
    this.stopped = false;

    this.update = function() {
        if (!this.stopped) {
            this.posY += this.vy;
            this.posX += this.vx;

            if (this.posY > canvasHeight - this.h) {
                this.vy *= -this.bouncefactory;
                this.posY = canvasHeight - this.h;
                this.vy *= 0.98;

                if (Math.abs(this.vy) < 0.5) {
                    this.stopped = true;
                }
            }

            this.vy += this.gravity;
        }
    };

    this.draw = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.w, this.h);
    };
}

export const draw = (ctx, canvasWidth, canvasHeight) => {
    let boxes = [];
    let frame = 0;
    const fallinterval = 50;

    const addBox = () => {
        boxes.push(new BParticle(Math.random() * canvasWidth, 0, canvasWidth, canvasHeight));
    };

    addBox();

    const animate = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].update();
            boxes[i].draw(ctx);

            if (boxes.length > 10 && frame % 1000 === 0) {
                boxes.shift();
            }
        }

        if (frame % fallinterval === 0) {
            addBox();
        }

        frame++;
        requestAnimationFrame(animate);
    };

    animate();
};
