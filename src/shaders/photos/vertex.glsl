uniform float uTime;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vFogDepth;
varying vec3 vColorMod;
varying float vDistanceToCamera;

void main() {
    vUv = uv;
    
    float diagonal = (position.x + position.y) * 0.5;
    float wave = sin(diagonal * 1.5 + uTime * 1.0) * 0.2;
    
    float colorWave = sin(diagonal * 5.0 + uTime * 1.5) * 0.1 + 1.0;
    vColorMod = vec3(colorWave * 1.05);
    
    vec3 pos = position;
    pos.z += wave;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vFogDepth = -mvPosition.z;
    vDistanceToCamera = length(mvPosition.xyz);
    
    gl_Position = projectionMatrix * mvPosition;
}