 uniform sampler2D uTexture;
uniform float uTime;

varying vec2 vUv;
varying float vFogDepth;
varying vec3 vColorMod;

void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    
    vec3 color = textureColor.rgb * vColorMod;
    
    float fogAmount = smoothstep(4.0, 8.0, vFogDepth);
    vec3 finalColor = mix(color, vec3(1.0), fogAmount);
    
    gl_FragColor = vec4(finalColor, textureColor.a);
}