 varying vec2 vUv;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    
    float diagonal = position.x + position.y;
    float wave = sin(diagonal * 1.2 + uTime*0.8 ) * 0.1;
    vec3 pos = position;
    pos.z += wave;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }