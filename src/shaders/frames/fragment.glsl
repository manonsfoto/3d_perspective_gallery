 uniform sampler2D uTexture;
  uniform float uTime;
  varying vec2 vUv;
  
  void main() {
  
    float diagonal = vUv.x + vUv.y;
    float distortion = sin(diagonal * 10.0 + uTime * 2.0) * 0.01;
    
  
    vec2 distortedUv = vUv + vec2(distortion);
    
    vec4 textureColor = texture2D(uTexture, distortedUv);
    
    float wave = sin(diagonal * 15.0 + uTime * 2.5) * 0.5 + 0.5;
    vec3 color = mix(textureColor.rgb, textureColor.rgb * 1.1, wave * 0.2);
    
    gl_FragColor = vec4(color, textureColor.a);
  }