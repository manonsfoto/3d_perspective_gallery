varying vec3 vPosition;

void main()
{
    float surfaceWaterMix = smoothstep(- 1.0, - 0.1, vPosition.y);
    vec3 color = mix(vec3(0.0,0.0,0.0), vec3(1.0,1.0,1.0),  vPosition.y+0.8);

 
    csm_DiffuseColor = vec4(color, 1.0);
}