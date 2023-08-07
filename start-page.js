kaboom();

const pad = 16;

const centerX = width() / 2;
const centerY = height() / 2;

const backgroundColor = add([
    rect(width(), height()),
    color(122, 48, 108),
]);

const gameTitle = add([
    pos(centerX, centerY),
    text("Pancake Palace", {
        font: "modak",
        size: 100,
        align: "center",
        width: width() - pad * 2,
        lineSpacing: 8,
        letterSpacing: 4,
        transform: (idx, ch) => ({
            color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
            pos: vec2(0, wave(-4, 4, time() * 4 + idx * 0.5)),
            scale: wave(1, 1.2, time() * 3 + idx),
            angle: wave(-9, 9, time() * 3 + idx),
        }),
    }),
]);

function wave(min, max, t) {
    return Math.sin(t) * (max - min) * 0.5 + (max + min) * 0.5;
}