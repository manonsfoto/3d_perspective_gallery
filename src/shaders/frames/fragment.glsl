 uniform sampler2D uTexture;
uniform float uTime;
varying vec2 vUv;
varying float vFogDepth;

void main() {
    
    float diagonal = (vUv.x + vUv.y) * 1.5;  
    

    float distortion = sin(diagonal * 0.8 + uTime * 0.5) * 0.005; 
    
   
    vec2 distortedUv = vUv + vec2(distortion);
    
   
    vec4 textureColor = texture2D(uTexture, distortedUv);
    
 
    float wave = sin(diagonal * 5.0 + uTime * 1.5) * 2.5 + 0.5; 
    vec3 color = mix(textureColor.rgb, textureColor.rgb * 1.05, wave * 0.2); 
    
  float fogAmount = smoothstep(4.0, 8.0, vFogDepth);
    vec3 finalColor = mix(color, vec3(1.0), fogAmount);

    gl_FragColor = vec4(finalColor, textureColor.a);
}