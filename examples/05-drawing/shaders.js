// shader ogljisc  -> ce barvo spreminjas je to boljs; to se 3x izvede
const vertex = `#version 300 es
uniform vec2 uOffset;  // uniform -> konstanta-ish -> da je za vsa ogljisca ista

in vec2 aPosition;  // a -> atribut; pozicija je 2d vektor
in vec4 aColor;  // barva je 4d vektor

// mat4 M
// vec4 v
// M * v -> to dela

out vec4 vColor;

void main() {
    vColor = aColor;
    gl_Position = vec4(aPosition + uOffset, 0, 1);
}
`;
// interpolacijo dela GPU sam; nic ni treba sprogramirat

// shader fragmentov -> to se fuulkrat izvede
const fragment = `#version 300 es
precision mediump float;

in vec4 vColor;

out vec4 oColor;

void main() {
    oColor = vColor;
}
`;

export const shaders = {
    test: { vertex, fragment }
};
