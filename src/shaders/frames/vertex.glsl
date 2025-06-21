uniform float uTime;
varying vec2 vUv;
varying float vFogDepth;

void main() {
    vUv = uv;
    
    float diagonal = (position.x + position.y) * 0.5;  
    float wave = sin(diagonal * 1.5 + uTime * 1.0) * 0.2;  
    
    vec3 pos = position;
    pos.z += wave;  
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vFogDepth = -mvPosition.z;  
}