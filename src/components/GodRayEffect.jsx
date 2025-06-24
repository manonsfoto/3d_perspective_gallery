import { Effect } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `
uniform float time;
uniform vec2 resolution;
uniform vec2 sunPosition;
uniform vec3 color;
uniform float speed;
uniform float rayCount;
uniform float maxWidth;
uniform float intensity;

float random(float n) {
    return fract(sin(n) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = dot(i, vec2(1.0, 57.0));
    float b = dot(i + vec2(1.0, 0.0), vec2(1.0, 57.0));
    float c = dot(i + vec2(0.0, 1.0), vec2(1.0, 57.0));
    float d = dot(i + vec2(1.0, 1.0), vec2(1.0, 57.0));
    return mix(mix(fract(sin(a)*43758.5), fract(sin(b)*43758.5), u.x),
        mix(fract(sin(c)*43758.5), fract(sin(d)*43758.5), u.x), u.y);
}

float rays(vec2 uv, vec2 pos, float speed, float count, float maxWidth) {
    vec2 delta = uv - pos;
    float dist = length(delta);
    float angle = atan(delta.y, delta.x);
    float t = time;
    
    float ray = 0.0;
    float halfCount = count * 0.5;
    
    for (int i = 0; i < 40; i++) {
        if (float(i) >= count) break;
        
        float seed = float(i) * 10.0;
        bool isClockwise = float(i) < halfCount;
        
        float raySpeed = speed * (0.5 + random(seed * 0.3) * 1.5);
        float rotation = isClockwise ? t * raySpeed : -t * raySpeed * 0.8;
        
        float rayAngle = angle + float(i) * (6.2831 / count) + rotation * 0.5;
        float width = maxWidth * (0.6 + 0.4 * random(seed + 0.5));
        
        float a = rayAngle * 12.0 + t * raySpeed * 3.0;
        float s = sin(a) * 0.5 + 0.5;
        s = pow(s, 40.0);
        s *= 1.0 / (1.0 + dist * 0.3);
        float n = noise(uv * 8.0 + float(i) * 5.0 + t * 0.1) * 0.05;
        float rayIntensity = 0.8 + 0.2 * random(seed + 2.0);
        
        s = smoothstep(0.3, 0.7, s);
        ray += (s + n) * width * rayIntensity;
    }
    
    return ray;
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    float ray = rays(uv, sunPosition, speed, rayCount, maxWidth);
    vec3 col = inputColor.rgb + ray * color * intensity;
    outputColor = vec4(col, inputColor.a);
}
`;

export default class GodRayEffect extends Effect {
  constructor({
    sunPosition = [0.3, 2.0],
    color = [1.0, 0.9, 0.7],
    speed = 0.05,
    rayCount = 50,
    maxWidth = 0.03,
    intensity = 0.7,
  } = {}) {
    super("GodRayEffect", fragmentShader, {
      uniforms: new Map([
        ["time", new Uniform(0)],
        ["resolution", new Uniform([window.innerWidth, window.innerHeight])],
        ["sunPosition", new Uniform(sunPosition)],
        ["color", new Uniform(color)],
        ["speed", new Uniform(speed)],
        ["rayCount", new Uniform(rayCount)],
        ["maxWidth", new Uniform(maxWidth)],
        ["intensity", new Uniform(intensity)],
      ]),
    });
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("time").value += deltaTime;
  }
}
