# 3D Perspective Gallery

[3D Perspective Gallery](https://3d-perspective-gallerybyminyeong.vercel.app/) built with React and Three.js

## About

This project is a learning exercise that recreates and builds upon the beautiful 3D gallery concept originally designed by Unseen Studio.

The implementation uses modern web technologies including:

- React
- Three.js
- React Three Fiber
- React Three Drei
- React Three Postprocessing

## Credits

- Inspired by the original design from [Unseen Studio](https://unseen.co/projects/)

## Reflection

When I first saw Unseen Studio's work, I was confident I could recreate it thanks to my basic Three.js knowledge from Bruno Simon's Three.js Journey course. However, as I dove into implementation, I discovered just how many techniques were involved beyond the basics.

### Key Learnings:

- **Loading Meshes & Fog**: These were relatively straightforward to implement
- **Custom Godray Post-Processing**: This was particularly challenging but rewarding to get right

### Areas for Improvement:

- **Text Blending Effects**: Implement proper mix-blend-mode effects for text with background meshes. While I understand the theory (separate rendering of background mesh and text with blending), implementing it proved challenging. I plan to seek help from the Three.js community to achieve this effect.
- **Cross-Platform Compatibility**: Currently, the project works best on desktop/laptop computers. On mobile, it's partially functional on iPhone in horizontal orientation but has compatibility issues with Android devices.
- **Performance Optimization**: Need to improve performance for better cross-device support

Despite the challenges, this project was an incredible learning experience that pushed me far beyond following tutorial content. The hands-on problem-solving provided insights that passive learning simply can't match.
