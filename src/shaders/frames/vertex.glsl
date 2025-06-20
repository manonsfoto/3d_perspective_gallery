 varying vec2 vUv;
uniform float uTime;

void main() {
    vUv = uv;
    
    float diagonal = (position.x + position.y) * 1.5;  
    float wave = sin(diagonal * 1.5 + uTime * 1.0) * 0.05;  
    
    vec3 pos = position;
    pos.z += wave;  
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}